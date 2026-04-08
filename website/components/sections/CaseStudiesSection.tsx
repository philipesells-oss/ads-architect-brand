'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Metric {
  label: string;
  before: string;
  after: string;
  delta: string;
  positive: boolean;
}

interface CaseStudy {
  segment: string;
  client: string;
  challenge: string;
  metrics: Metric[];
  quote: string;
  author: string;
}

const cases: CaseStudy[] = [
  {
    segment: 'Hospitality',
    client: 'Boutique Hotel — Bali',
    challenge:
      '$3,000/month on Meta Ads with unpredictable bookings and no follow-up system.',
    metrics: [
      { label: 'Cost per booking', before: '$127', after: '$48', delta: '−62%', positive: true },
      { label: 'Monthly bookings', before: '24', after: '61', delta: '+154%', positive: true },
      { label: 'ROAS', before: '2.1x', after: '5.8x', delta: '+176%', positive: true },
    ],
    quote:
      'We stopped thinking about ads and started thinking about systems. ADS Architect built something we can actually rely on.',
    author: 'Owner, Boutique Hotel',
  },
  {
    segment: 'Wellness',
    client: 'Premium Day Spa — Bali',
    challenge:
      '4,000 Instagram followers, almost zero direct bookings from social. All clients from word-of-mouth.',
    metrics: [
      { label: 'New bookings/month', before: '18', after: '67', delta: '+272%', positive: true },
      { label: 'Cost per appointment', before: '$155', after: '$31', delta: '−80%', positive: true },
      { label: 'Return client rate', before: '34%', after: '61%', delta: '+79%', positive: true },
    ],
    quote:
      'For the first time, I know exactly where my next client is coming from. The system runs while I focus on my team.',
    author: 'Founder, Day Spa',
  },
  {
    segment: 'Entertainment',
    client: 'Premium Venue — SE Asia',
    challenge:
      'High seasonal traffic, zero predictable off-season revenue and no evergreen acquisition.',
    metrics: [
      { label: 'Off-season revenue', before: 'Baseline', after: '+89% YoY', delta: '+89%', positive: true },
      { label: 'Cost per acquisition', before: '$74', after: '$29', delta: '−61%', positive: true },
      { label: 'Repeat visitor rate', before: '21%', after: '44%', delta: '+110%', positive: true },
    ],
    quote:
      "The off-season used to terrify us. Now we run campaigns that bring people in regardless of what's happening.",
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
  return (
    <section id="cases" className="section-divider py-16 md:py-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-3">Results</p>
          <h2 className="text-[26px] sm:text-h2 md:text-[40px] font-bold text-snow max-w-2xl">
            Systems That Perform.
          </h2>
          <p className="text-body text-muted mt-3 max-w-xl">
            Real numbers from real clients. Same budget — different system.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cases.map((c) => (
            <motion.div
              key={c.client}
              variants={cardVariants}
              className="bg-carbon border border-border rounded-xl overflow-hidden hover:border-border-hover transition-all duration-200 flex flex-col"
            >
              {/* Segment badge */}
              <div className="bg-graphite border-b border-border px-4 py-3 flex items-center justify-between">
                <span className="overline text-[10px]">{c.segment}</span>
                <span className="text-caption text-faint truncate ml-2 max-w-[160px]">{c.client}</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Challenge */}
                <p className="text-body-sm text-muted mb-5 italic leading-relaxed">
                  &quot;{c.challenge}&quot;
                </p>

                {/* Metrics — stacked layout works on all screen sizes */}
                <div className="space-y-2.5 mb-5">
                  {c.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-graphite rounded-lg px-3 py-2.5"
                    >
                      <p className="text-caption text-faint mb-1">{metric.label}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-body-sm text-faint line-through">
                          {metric.before}
                        </span>
                        <span className="text-caption text-faint">→</span>
                        <span className="font-mono text-body-sm text-snow font-medium">
                          {metric.after}
                        </span>
                        <span
                          className={`font-mono text-caption font-semibold ml-auto ${
                            metric.positive ? 'text-success' : 'text-error'
                          }`}
                        >
                          {metric.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mt-auto border-t border-border pt-4">
                  <p className="text-body-sm text-muted italic mb-2 leading-relaxed">
                    &quot;{c.quote}&quot;
                  </p>
                  <p className="text-caption text-faint">— {c.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#audit"
            className="inline-flex items-center gap-2 text-teal hover:text-teal-hover transition-colors duration-200 text-body font-medium"
          >
            Get your free Acquisition Audit <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
