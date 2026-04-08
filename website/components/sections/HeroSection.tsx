'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const proofPoints = [
  '$2M+ managed',
  '50+ campaigns',
  'Hospitality & Wellness',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-5 md:px-10 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#FAFAFA 1px, transparent 1px), linear-gradient(90deg, #FAFAFA 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-teal/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Overline */}
        <motion.p
          className="overline mb-5"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          Acquisition Infrastructure
        </motion.p>

        {/* Headline — scales from 28px mobile → 64px desktop */}
        <motion.h1
          className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[68px] font-bold text-snow leading-[1.08] tracking-tight mb-5"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
        >
          We Don&apos;t Run Ads.
          <br />
          <span className="text-teal">We Build Acquisition Systems.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-base sm:text-body-lg text-muted max-w-2xl mb-4"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
        >
          For hospitality and wellness brands ready to turn ad spend into
          predictable revenue — not just clicks.
        </motion.p>

        {/* Body */}
        <motion.p
          className="text-body-sm sm:text-body text-faint max-w-xl mb-8"
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
        >
          Most ad managers deliver reports. We deliver reservations. Meta,
          Google, TikTok, CRM, email, and WhatsApp — engineered into one system
          with one goal: fill your calendar.
        </motion.p>

        {/* CTAs — stacked on mobile, inline on sm+ */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-10"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
        >
          <Button as="a" href="#audit" size="lg" className="w-full sm:w-auto justify-center">
            Book Free Acquisition Audit
            <ArrowRight size={16} className="ml-2 flex-shrink-0" />
          </Button>
          <Button
            as="a"
            href="#stack"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto justify-center"
          >
            See How It Works
            <ChevronDown size={16} className="ml-2 flex-shrink-0" />
          </Button>
        </motion.div>

        {/* Proof bar — wraps cleanly on mobile */}
        <motion.div
          className="flex flex-wrap gap-x-4 gap-y-2 items-center"
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUp}
        >
          {proofPoints.map((point, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />}
              <span className="font-mono text-body-sm text-teal font-medium">
                {point}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
