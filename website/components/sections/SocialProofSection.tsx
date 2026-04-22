'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useT } from '@/lib/i18n/context';

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

function Counter({ end, prefix = '', suffix = '', duration = 2000, decimals = 0 }: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const startTime = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [inView, end, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const statValues = [
  { value: 50,  prefix: '',  suffix: '+',  decimals: 0 },
  { value: 2,   prefix: '$', suffix: 'M+', decimals: 0 },
  { value: 4.8, prefix: '',  suffix: 'x',  decimals: 1 },
  { value: 62,  prefix: '-', suffix: '%',  decimals: 0 },
];

export function SocialProofSection() {
  const t = useT();

  return (
    <section className="section-divider py-14 md:py-20 px-5 md:px-10 bg-carbon">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {statValues.map((stat, i) => (
            <div
              key={i}
              className="bg-carbon px-4 sm:px-6 py-6 sm:py-8 text-center hover:bg-graphite transition-colors duration-200"
            >
              <p className="font-mono text-[32px] sm:text-[40px] md:text-[48px] font-medium text-teal leading-none mb-2">
                <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} duration={1800} />
              </p>
              <p className="text-body-sm font-medium text-snow mb-0.5">{t.socialProof.stats[i].label}</p>
              <p className="text-caption text-faint hidden sm:block">{t.socialProof.stats[i].subLabel}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-body-sm text-faint mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {t.socialProof.bottomText}
        </motion.p>
      </div>
    </section>
  );
}
