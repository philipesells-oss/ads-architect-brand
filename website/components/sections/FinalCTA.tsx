'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="section-divider py-32 px-5 md:px-10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          className="overline mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Ready?
        </motion.p>

        <motion.h2
          className="text-h1 md:text-display font-bold text-snow mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to Build Your{' '}
          <span className="text-teal">Acquisition System?</span>
        </motion.h2>

        <motion.p
          className="text-body-lg text-muted mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Book your free Acquisition Audit. We&apos;ll show you exactly where revenue
          is being left on the table — and what we&apos;d build to recover it.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button as="a" href="#audit" size="lg">
            Book Your Free Audit
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <span className="text-body-sm text-faint">
            48 hours · No sales pressure · Real diagnosis
          </span>
        </motion.div>
      </div>
    </section>
  );
}
