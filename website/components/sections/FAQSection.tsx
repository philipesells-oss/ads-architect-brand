'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What makes ADS Architect different from a regular performance marketing agency?',
    a: 'Most agencies run ads. We build systems. The difference is that we connect every touchpoint — paid ads, landing pages, CRM, WhatsApp, and email — into a single acquisition engine. You don\'t get a report of clicks. You get a system engineered to produce predictable bookings.',
  },
  {
    q: 'Do you work with brands outside of Bali or Southeast Asia?',
    a: 'Yes. We work with hospitality and wellness brands internationally. Our systems are designed for premium brands in any location — boutique hotels in Europe, spas in the Middle East, wellness retreats in the Americas. If your brand fits our ICP, we can help.',
  },
  {
    q: 'What is the minimum ad budget required to work with you?',
    a: 'For The Acquisition Sprint™, we recommend a minimum of $500/month in ad spend. For The Revenue Pipeline™, $1,000–3,000/month. For The Acquisition Architecture Program™, $2,000+/month. These budgets go directly to the ad platforms — separate from our agency fee.',
  },
  {
    q: 'How long before we see results?',
    a: 'Most clients see measurable improvement in cost-per-booking within the first 30–60 days. The full system — including CRM, automations, and email flows — takes 30 days to build and then compounds over time. We set realistic expectations in your Acquisition Audit before you commit.',
  },
  {
    q: 'What does the Free Acquisition Audit include?',
    a: 'We audit your current ad accounts (read-only access), analyze your conversion gaps, review your competitive positioning, and build a custom Acquisition Stack recommendation for your brand. You receive a PDF report and a 30-minute video call with a specialist. No sales pressure.',
  },
  {
    q: 'Do I need to provide access to my existing ad accounts?',
    a: 'For the audit, we only need read-only access to your Meta Ads Manager and Google Analytics. For ongoing management, we work inside your existing accounts — we never own your data or your assets.',
  },
  {
    q: 'What happens if the results don\'t meet expectations?',
    a: 'We track cost-per-booking, ROAS, and conversion rates monthly. If we\'re not hitting agreed targets after 60 days, we run a full system diagnostic and adjust. Our Revenue Intelligence Brief™ keeps you informed of every change we make and why.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left hover:text-teal transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-body font-medium text-snow group-hover:text-teal">
          {question}
        </span>
        <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-muted">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-body text-muted pb-5 pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-divider py-24 px-5 md:px-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="overline mb-4">FAQ</p>
          <h2 className="text-h2 font-bold text-snow">Common Questions</h2>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          className="bg-carbon border border-border rounded-xl px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
