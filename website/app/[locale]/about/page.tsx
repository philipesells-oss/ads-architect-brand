'use client';

import { motion } from 'framer-motion';
import { Globe, Target, Shield, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { useT } from '@/lib/i18n/context';

const principleIcons = [Target, BarChart3, Shield, CheckCircle2];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function AboutPage() {
  const t = useT();
  const { about } = t;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 px-5 md:px-10 bg-gradient-to-b from-obsidian to-carbon">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="overline mb-4">{about.overline}</p>
              <h1 className="text-[32px] sm:text-h1 font-bold text-snow leading-tight mb-5">
                {about.headline}
              </h1>
              <p className="text-body text-muted max-w-2xl mx-auto">{about.sub}</p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-divider py-16 md:py-24 px-5 md:px-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
            >
              <motion.div variants={fadeUp} className="flex-shrink-0">
                <p className="overline mb-0">{about.missionLabel}</p>
              </motion.div>
              <motion.blockquote
                variants={fadeUp}
                className="text-[20px] md:text-[24px] font-medium text-snow leading-relaxed border-l-2 border-teal pl-6"
              >
                {about.missionText}
              </motion.blockquote>
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-divider py-16 md:py-24 px-5 md:px-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 md:mb-14"
            >
              <p className="overline mb-3">{about.principlesLabel}</p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {about.principles.map((principle, i) => {
                const Icon = principleIcons[i] ?? Target;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-carbon border border-border rounded-xl p-6 md:p-8"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-teal" />
                    </div>
                    <h3 className="text-h5 font-bold text-snow mb-2">{principle.title}</h3>
                    <p className="text-body text-muted">{principle.body}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="section-divider py-16 md:py-24 px-5 md:px-10 bg-carbon">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 md:mb-14"
            >
              <p className="overline mb-3">{about.globalLabel}</p>
              <h2 className="text-[26px] sm:text-h2 font-bold text-snow max-w-2xl">
                {about.globalHeadline}
              </h2>
              <p className="text-body text-muted mt-3 max-w-xl">{about.globalSub}</p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {about.regions.map((region, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-2 bg-obsidian border border-border rounded-full px-4 py-2"
                >
                  <Globe size={14} className="text-teal flex-shrink-0" />
                  <span className="text-body-sm text-snow">{region}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="section-divider py-16 md:py-24 px-5 md:px-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 md:mb-14"
            >
              <p className="overline mb-3">{about.processLabel}</p>
              <h2 className="text-[26px] sm:text-h2 font-bold text-snow">
                {about.processHeadline}
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />
              <motion.div
                className="flex flex-col gap-0"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {about.processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-5 sm:gap-8 pb-10 last:pb-0"
                  >
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-teal/10 border-2 border-teal flex items-center justify-center z-10">
                        <span className="text-caption font-bold text-teal">{i + 1}</span>
                      </div>
                    </div>
                    <div className="pt-2 pb-2">
                      <span className="text-caption text-teal font-semibold uppercase tracking-wider">
                        {step.label}
                      </span>
                      <h3 className="text-h5 font-bold text-snow mt-1 mb-2">{step.title}</h3>
                      <p className="text-body text-muted">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-divider py-16 md:py-24 px-5 md:px-10 bg-carbon">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[26px] sm:text-h2 font-bold text-snow mb-4">{about.ctaTitle}</h2>
            <p className="text-body text-muted mb-8">{about.ctaSub}</p>
            <Button as="a" href="/#audit" size="lg" className="inline-flex items-center gap-2">
              {about.ctaBtn}
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
