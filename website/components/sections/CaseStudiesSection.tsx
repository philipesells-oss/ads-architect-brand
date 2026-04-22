'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useT } from '@/lib/i18n/context';

// Static data that stays the same across locales
const caseData = [
  {
    client: 'Boutique Hotel — Bali',
    metrics: [
      { before: '$127', after: '$48', delta: '−62%', positive: true },
      { before: '24', after: '61', delta: '+154%', positive: true },
      { before: '2.1x', after: '5.8x', delta: '+176%', positive: true },
    ],
    author: 'Owner, Boutique Hotel',
  },
  {
    client: 'Premium Day Spa — Bali',
    metrics: [
      { before: '18', after: '67', delta: '+272%', positive: true },
      { before: '$155', after: '$31', delta: '−80%', positive: true },
      { before: '34%', after: '61%', delta: '+79%', positive: true },
    ],
    author: 'Founder, Day Spa',
  },
  {
    client: 'Premium Venue — SE Asia',
    metrics: [
      { before: 'Baseline', after: '+89% YoY', delta: '+89%', positive: true },
      { before: '$74', after: '$29', delta: '−61%', positive: true },
      { before: '21%', after: '44%', delta: '+110%', positive: true },
    ],
    author: 'Director, Experience Venue',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function CaseStudiesSection() {
  const t = useT();
  const { cases } = t;

  return (
    <section id="cases" className="section-divider py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-3">{cases.overline}</p>
          <h2 className="text-[26px] sm:text-h2 md:text-[40px] font-bold text-snow max-w-2xl">{cases.h2}</h2>
          <p className="text-body text-muted mt-3 max-w-xl">{cases.sub}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cases.items.map((item, i) => {
            const data = caseData[i];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-carbon border border-border rounded-xl overflow-hidden hover:border-border-hover transition-all duration-200 flex flex-col"
              >
                <div className="bg-graphite border-b border-border px-4 py-3 flex items-center justify-between">
                  <span className="overline text-[10px]">{item.segment}</span>
                  <span className="text-caption text-faint truncate ml-2 max-w-[160px]">{data.client}</span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-body-sm text-muted mb-5 italic leading-relaxed">
                    &quot;{item.challenge}&quot;
                  </p>

                  <div className="space-y-2.5 mb-5">
                    {data.metrics.map((metric, j) => (
                      <div key={j} className="bg-graphite rounded-lg px-3 py-2.5">
                        <p className="text-caption text-faint mb-1">{item.metricLabels[j]}</p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-body-sm text-faint line-through">{metric.before}</span>
                          <span className="text-caption text-faint">→</span>
                          <span className="font-mono text-body-sm text-snow font-medium">{metric.after}</span>
                          <span className={`font-mono text-caption font-semibold ml-auto ${metric.positive ? 'text-success' : 'text-error'}`}>
                            {metric.delta}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-border pt-4">
                    <p className="text-body-sm text-muted italic mb-2 leading-relaxed">
                      &quot;{item.quote}&quot;
                    </p>
                    <p className="text-caption text-faint">— {data.author}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="#audit" className="inline-flex items-center gap-2 text-teal hover:text-teal-hover transition-colors duration-200 text-body font-medium">
            {cases.ctaLink} <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
