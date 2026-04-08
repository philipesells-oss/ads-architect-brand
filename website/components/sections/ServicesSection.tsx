'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Layers, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const services = [
  {
    icon: Building2,
    name: 'The Acquisition Architecture Program™',
    badge: 'Flagship',
    badgeAccent: true,
    description:
      'Full acquisition infrastructure — every channel connected, every touchpoint optimized, ongoing management included.',
    includes: [
      'Meta + Google + TikTok Ads',
      'Landing pages & booking flow',
      'CRM + WhatsApp automation',
      'Email flows (nurture + retention)',
      'Revenue Intelligence Brief™',
      'Dedicated Acquisition Strategist',
    ],
    ideal: 'Brands spending $2,000+/month on ads',
    duration: 'Ongoing retainer · min. 6 months',
  },
  {
    icon: Layers,
    name: 'The Revenue Pipeline™',
    badge: 'Most Popular',
    badgeAccent: false,
    description:
      'Paid ads connected to a capture system, CRM, and WhatsApp follow-up. Built in 30 days. Optimized monthly.',
    includes: [
      'Meta + Google Ads (2 platforms)',
      'Landing page optimization',
      'CRM pipeline setup',
      'WhatsApp follow-up automation',
      'Revenue Intelligence Brief™',
    ],
    ideal: '$500–2,000/month ad budget',
    duration: 'Retainer · min. 3 months',
  },
  {
    icon: Zap,
    name: 'The Acquisition Sprint™',
    badge: 'Quick Start',
    badgeAccent: false,
    description:
      'In 14 days: paid ads live, landing page optimized, lead capture automated. Designed to generate bookings from week one.',
    includes: [
      'Paid ads on 1 platform',
      'Landing page optimization',
      'Basic lead capture automation',
      '30-day performance review call',
    ],
    ideal: 'New brands or new markets',
    duration: 'One-time · optional retainer upgrade',
  },
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
  return (
    <section id="services" className="section-divider py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-3">What We Build</p>
          <h2 className="text-[26px] sm:text-h2 md:text-[40px] font-bold text-snow max-w-2xl">
            Three Systems. One Architecture.
          </h2>
          <p className="text-body text-muted mt-3 max-w-xl">
            Every engagement is built on the same Acquisition Stack™. The tier
            depends on where you are — and where you want to go.
          </p>
        </motion.div>

        {/* Cards — stacked on mobile, 3-col on lg */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                className={`bg-carbon border rounded-xl p-5 sm:p-6 flex flex-col hover:bg-graphite transition-all duration-200 ${
                  service.badgeAccent
                    ? 'border-teal/30 shadow-accent'
                    : 'border-border hover:border-border-hover'
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded bg-teal-muted flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-teal" />
                  </div>
                  <span
                    className={`text-caption font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ml-2 ${
                      service.badgeAccent
                        ? 'bg-teal/10 border-teal/30 text-teal'
                        : 'bg-graphite border-border text-faint'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-body sm:text-h5 font-semibold text-snow mb-2 leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-muted mb-5">{service.description}</p>

                {/* Includes */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-body-sm text-muted">
                      <span className="w-4 h-4 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Meta */}
                <div className="border-t border-border pt-4 space-y-1">
                  <p className="text-caption text-faint">
                    <span className="text-muted">Ideal for:</span> {service.ideal}
                  </p>
                  <p className="text-caption text-faint">{service.duration}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-carbon border border-border rounded-xl p-5 sm:p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <p className="text-body font-semibold text-snow mb-1">
              Not sure which system is right for you?
            </p>
            <p className="text-body-sm text-muted">
              Book a free Audit. We&apos;ll diagnose your setup and recommend the right tier.
            </p>
          </div>
          <Button as="a" href="#audit" size="md" className="w-full sm:w-auto flex-shrink-0">
            Book Free Audit <ArrowRight size={15} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
