'use client';

import { motion } from 'framer-motion';

const row1 = [
  'Alternative Beach',
  'The Barn Canggu',
  'ASAI Spa & Café',
  'Dom Restaurant',
  'Donna Ubud',
  'Twelve Urban Café',
  'REVĪVŌ Wellness Resort',
  'Vitality Center',
  'The Loft',
  'Tao Padel',
];

const row2 = [
  'Domo Industrias',
  'Maria Curau Salon',
  'Pescado',
  'Inka Spa Ubud',
  'Sunday Kitchen',
  'La Tribu',
  'Ubuntu Bali',
  'Signa Cafe',
  'Ivy Cafe',
  'Nutrio Restaurant',
];

const row3 = [
  'Chilli Beans Indonesia',
  'Ubuntu Bali',
  'Alternative Beach',
  'The Barn Canggu',
  'ASAI Spa & Café',
  'REVĪVŌ Wellness Resort',
  'Domo Industrias',
  'Maria Curau Salon',
  'Vitality Center',
  'Sunday Kitchen',
];

interface MarqueeRowProps {
  brands: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

function MarqueeRow({ brands, direction = 'left', speed = 40 }: MarqueeRowProps) {
  const doubled = [...brands, ...brands];
  const duration = (brands.length * speed) / 10;

  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        className="flex gap-3 flex-shrink-0"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="flex-shrink-0 px-4 py-2.5 rounded-full bg-carbon border border-border text-body-sm text-muted hover:border-teal/30 hover:text-snow transition-all duration-200 cursor-default whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    /* relative + overflow-hidden required for edge fades to work */
    <section className="relative section-divider py-16 md:py-20 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center px-5 md:px-10 mb-10 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="overline mb-3">Portfolio</p>
        <h2 className="text-[22px] sm:text-h3 md:text-[36px] font-bold text-snow max-w-3xl mx-auto leading-tight">
          Trusted by leading brands in hospitality,
          wellness, retail &amp; entertainment.
        </h2>
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <MarqueeRow brands={row1} direction="left" speed={45} />
        <MarqueeRow brands={row2} direction="right" speed={38} />
        <MarqueeRow brands={row3} direction="left" speed={50} />
      </motion.div>

      {/* Edge fades — work because section has relative + overflow-hidden */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />
    </section>
  );
}
