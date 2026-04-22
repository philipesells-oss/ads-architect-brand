'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Layers, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useT } from '@/lib/i18n/context';

const serviceIcons = [Building2, Layers, Zap];
const serviceNames = [
  'The Acquisition Architecture Program™',
  'The Revenue Pipeline™',
  'The Acquisition Sprint™',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function ServicesSection() {
  const t = useT();
  const { services } = t;

  return (
    <section id="services" className="section-divider py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-3">{services.overline}</p>
          <h2 className="text-[26px] sm:text-h2 md:text-[40px] font-bold text-snow max-w-2xl">
            {services.h2}
          </h2>
          <p className="text-body text-muted mt-3 max-w-xl">{services.sub}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.items.map((item, i) => {
            const Icon = serviceIcons[i];
            const isAccent = i === 0;
            return (
              <motion.div
                key={serviceNames[i]}
                variants={cardVariants}
                className={`bg-carbon border rounded-xl p-5 sm:p-6 flex flex-col hover:bg-graphite transition-all duration-200 ${
                  isAccent ? 'border-teal/30 shadow-accent' : 'border-border hover:border-border-hover'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded bg-teal-muted flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-teal" />
                  </div>
                  <span className={`text-caption font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ml-2 ${
                    isAccent ? 'bg-teal/10 border-teal/30 text-teal' : 'bg-graphite border-border text-faint'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-body sm:text-h5 font-semibold text-snow mb-2 leading-snug">
                  {serviceNames[i]}
                </h3>

                <p className="text-body-sm text-muted mb-5">{item.desc}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {item.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-body-sm text-muted">
                      <span className="w-4 h-4 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4 space-y-1">
                  <p className="text-caption text-faint">
                    <span className="text-muted">{item.idealLabel}</span> {item.ideal}
                  </p>
                  <p className="text-caption text-faint">{item.duration}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-carbon border border-border rounded-xl p-5 sm:p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <p className="text-body font-semibold text-snow mb-1">{services.ctaTitle}</p>
            <p className="text-body-sm text-muted">{services.ctaSub}</p>
          </div>
          <Button as="a" href="#audit" size="md" className="w-full sm:w-auto flex-shrink-0">
            {services.ctaBtn} <ArrowRight size={15} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
