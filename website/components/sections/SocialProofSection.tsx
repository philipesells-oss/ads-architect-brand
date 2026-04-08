'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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

const stats = [
  { value: 50,  prefix: '',  suffix: '+',  decimals: 0, label: 'systems built',          subLabel: 'Hospitality & Wellness' },
  { value: 2,   prefix: '$', suffix: 'M+', decimals: 0, label: 'managed ad spend',        subLabel: 'Revenue attributed' },
  { value: 4.8, prefix: '',  suffix: 'x',  decimals: 1, label: 'average ROAS',            subLabel: 'Across all campaigns' },
  { value: 62,  prefix: '-', suffix: '%',  decimals: 0, label: 'avg cost reduction',      subLabel: 'Cost per booking' },
];

export function SocialProofSection() {
  return (
    <section className="section-divider py-14 md:py-20 px-5 md:px-10 bg-carbon">
      <div className="max-w-7xl mx-auto">
        {/* 2×2 on mobile → 4 columns on lg */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-carbon px-4 sm:px-6 py-6 sm:py-8 text-center hover:bg-graphite transition-colors duration-200"
            >
              {/* Number scales: 32px mobile → 52px desktop */}
              <p className="font-mono text-[32px] sm:text-[40px] md:text-[48px] font-medium text-teal leading-none mb-2">
                <Counter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={1800}
                />
              </p>
              <p className="text-body-sm font-medium text-snow mb-0.5">{stat.label}</p>
              <p className="text-caption text-faint hidden sm:block">{stat.subLabel}</p>
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
          Exclusively serving Hospitality, Wellness, Retail & Entertainment brands worldwide.
        </motion.p>
      </div>
    </section>
  );
}
