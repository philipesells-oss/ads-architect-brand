'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useT } from '@/lib/i18n/context';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};
const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function AcquisitionStack() {
  const t = useT();
  const { stack } = t;

  return (
    <section id="stack" className="section-divider py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-3">{stack.overline}</p>
          <h2 className="text-[26px] sm:text-h2 md:text-[40px] font-bold text-snow max-w-3xl">
            {stack.h2part1}{' '}
            <span className="text-teal">{stack.h2part2}</span>
          </h2>
          <p className="text-body sm:text-body-lg text-muted mt-3 max-w-2xl">{stack.sub}</p>
        </motion.div>

        <div className="border border-border rounded-xl overflow-hidden">
          <div className="bg-graphite border-b border-border p-3">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stack.columns.map((col, i) => (
                <motion.div key={col.phase} variants={columnVariants} className="relative">
                  <div className="bg-carbon border border-border rounded-lg p-4 hover:border-teal/30 hover:bg-graphite/80 transition-all duration-200 group">
                    <p className="overline mb-3 text-[10px]">{col.phase}</p>
                    <ul className="space-y-1.5">
                      {col.items.map((item) => (
                        <li key={item} className="text-body-sm text-muted group-hover:text-snow transition-colors duration-200 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-teal/50 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {i < stack.columns.length - 1 && (
                    <>
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                        <div className="w-6 h-6 bg-obsidian border border-teal/30 rounded-full flex items-center justify-center">
                          <ArrowRight size={11} className="text-teal" />
                        </div>
                      </div>
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

          <motion.div
            className="bg-carbon px-4 sm:px-6 py-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <p className="overline text-[10px] whitespace-nowrap">{stack.intelligenceLayer}</p>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {stack.metrics.map((metric) => (
                  <span key={metric} className="font-mono text-body-sm text-teal font-medium">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stack.columns.map((col) => (
            <motion.div key={col.phase} variants={columnVariants}>
              <p className="overline mb-2 text-[10px]">{col.phase}</p>
              <p className="text-body-sm text-muted">{col.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 md:mt-12 bg-carbon border border-border rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <p className="text-body sm:text-h5 font-semibold text-snow mb-1">{stack.calloutTitle}</p>
            <p className="text-body-sm text-muted">{stack.calloutSub}</p>
          </div>
          <a href="#audit" className="flex-shrink-0 text-body-sm font-medium text-teal hover:text-teal-hover transition-colors duration-200 flex items-center gap-1 whitespace-nowrap">
            {stack.calloutLink} <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
