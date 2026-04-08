'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface StackColumn {
  phase: string;
  items: string[];
  description: string;
}

const columns: StackColumn[] = [
  {
    phase: 'ATTRACT',
    items: ['Meta Ads', 'Google Ads', 'TikTok Ads'],
    description:
      'Reach your ideal clients where they actually are — with creative and targeting engineered for your category.',
  },
  {
    phase: 'CAPTURE',
    items: ['Landing Pages', 'Lead Forms', 'Booking System'],
    description:
      'Convert traffic into leads and reservations — not just clicks.',
  },
  {
    phase: 'CONVERT',
    items: ['CRM Pipeline', 'WhatsApp Bot', 'Follow-Up Seq.'],
    description:
      'Close the gap between "interested" and "booked" with automated pipelines.',
  },
  {
    phase: 'RETAIN',
    items: ['Email Flows', 'Loyalty Seq.', 'Upsell Flows'],
    description:
      'Turn one-time visitors into lifetime customers with retention automation.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const metrics = ['Cost per Booking', 'ROAS', 'LTV', 'Conversion Rate'];

export function AcquisitionStack() {
  return (
    <section id="stack" className="section-divider py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-3">The Solution</p>
          <h2 className="text-[26px] sm:text-h2 md:text-[40px] font-bold text-snow max-w-3xl">
            One System. Four Engines.{' '}
            <span className="text-teal">One Goal: Fill Your Calendar.</span>
          </h2>
          <p className="text-body sm:text-body-lg text-muted mt-3 max-w-2xl">
            We connect every touchpoint — from first impression to recurring booking
            — into a single, optimized acquisition system.
          </p>
        </motion.div>

        {/* Stack diagram */}
        <div className="border border-border rounded-xl overflow-hidden">
          {/*
            MOBILE: vertical stack (grid-cols-1)
            TABLET: 2 columns (grid-cols-2)
            DESKTOP: 4 columns (grid-cols-4)
          */}
          <div className="bg-graphite border-b border-border p-3">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {columns.map((col, i) => (
                <motion.div key={col.phase} variants={columnVariants} className="relative">
                  <div className="bg-carbon border border-border rounded-lg p-4 hover:border-teal/30 hover:bg-graphite/80 transition-all duration-200 group">
                    {/* Phase label */}
                    <p className="overline mb-3 text-[10px]">{col.phase}</p>

                    {/* Items */}
                    <ul className="space-y-1.5">
                      {col.items.map((item) => (
                        <li
                          key={item}
                          className="text-body-sm text-muted group-hover:text-snow transition-colors duration-200 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-teal/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow — right on desktop, down on mobile (between rows) */}
                  {i < columns.length - 1 && (
                    <>
                      {/* Desktop right arrow */}
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                        <div className="w-6 h-6 bg-obsidian border border-teal/30 rounded-full flex items-center justify-center">
                          <ArrowRight size={11} className="text-teal" />
                        </div>
                      </div>

                      {/* Mobile/tablet down arrow — shown after each card except last */}
                      <div className="flex lg:hidden justify-center py-1">
                        <div className="w-6 h-6 bg-obsidian border border-teal/20 rounded-full flex items-center justify-center">
                          <ArrowDown size={11} className="text-teal/60" />
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Intelligence Layer */}
          <motion.div
            className="bg-carbon px-4 sm:px-6 py-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <p className="overline text-[10px] whitespace-nowrap">Intelligence Layer</p>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {metrics.map((metric) => (
                  <span key={metric} className="font-mono text-body-sm text-teal font-medium">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column descriptions — hidden on mobile (too much text), visible sm+ */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {columns.map((col) => (
            <motion.div key={col.phase} variants={columnVariants}>
              <p className="overline mb-2 text-[10px]">{col.phase}</p>
              <p className="text-body-sm text-muted">{col.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          className="mt-8 md:mt-12 bg-carbon border border-border rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <p className="text-body sm:text-h5 font-semibold text-snow mb-1">
              No siloed campaigns. No &quot;let&apos;s see what happens.&quot;
            </p>
            <p className="text-body-sm text-muted">
              A predictable engine that fills your calendar at a lower cost per booking.
            </p>
          </div>
          <a
            href="#audit"
            className="flex-shrink-0 text-body-sm font-medium text-teal hover:text-teal-hover transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
          >
            See Our Results <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
