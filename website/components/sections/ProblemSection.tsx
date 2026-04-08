'use client';

import { motion } from 'framer-motion';
import { Layers, MessageSquareOff, BarChart2 } from 'lucide-react';

const problems = [
  {
    icon: Layers,
    title: 'No System',
    body: 'Ads run in isolation. Meta, Google, and TikTok are disconnected from your booking system. Every channel works against the others.',
  },
  {
    icon: MessageSquareOff,
    title: 'No Follow-Up',
    body: 'Leads come in but no one responds in time. Abandoned inquiries are lost forever. Your competitors close the clients you attracted.',
  },
  {
    icon: BarChart2,
    title: 'No Real Data',
    body: 'Reports show clicks and impressions. Not bookings. Not revenue. You have no idea what\'s actually working — or what\'s costing you.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProblemSection() {
  return (
    <section className="section-divider py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-4">The Problem</p>
          <h2 className="text-h2 md:text-[40px] font-bold text-snow max-w-2xl">
            Most brands run ads in isolation.
          </h2>
          <p className="text-body-lg text-muted mt-4 max-w-xl">
            The result? Wasted budget, inconsistent bookings, and no clear path
            to fixing it.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                variants={itemVariants}
                className="bg-carbon border border-border rounded-lg p-6 hover:border-border-hover hover:bg-graphite transition-all duration-200"
              >
                <div className="w-10 h-10 rounded bg-teal-muted flex items-center justify-center mb-4">
                  <Icon size={20} className="text-teal" />
                </div>
                <h3 className="text-h5 font-semibold text-snow mb-2">
                  {problem.title}
                </h3>
                <p className="text-body text-muted">{problem.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bridge to solution */}
        <motion.p
          className="mt-12 text-body text-muted max-w-2xl border-l-2 border-teal pl-6"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The issue is never the ads. It&apos;s the absence of a system connecting
          them — from first impression to recurring booking.
        </motion.p>
      </div>
    </section>
  );
}
