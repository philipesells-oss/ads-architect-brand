'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useT } from '@/lib/i18n/context';

export function FinalCTA() {
  const t = useT();
  const { finalCta } = t;

  return (
    <section className="section-divider py-32 px-5 md:px-10 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          className="overline mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {finalCta.overline}
        </motion.p>

        <motion.h2
          className="text-h1 md:text-display font-bold text-snow mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {finalCta.h2part1}{' '}
          <span className="text-teal">{finalCta.h2part2}</span>
        </motion.h2>

        <motion.p
          className="text-body-lg text-muted mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {finalCta.sub}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button as="a" href="#audit" size="lg">
            {finalCta.btn}
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <span className="text-body-sm text-faint">{finalCta.note}</span>
        </motion.div>
      </div>
    </section>
  );
}
