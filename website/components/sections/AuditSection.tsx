'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, FileText, Loader2, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const deliverables = [
  { icon: FileText, label: 'Ad Spend Waste Report', desc: 'Where your budget is leaking and why' },
  { icon: FileText, label: 'Conversion Gaps Analysis', desc: "Why clicks aren't turning into bookings" },
  { icon: FileText, label: 'Competitive Positioning Brief', desc: 'How you compare to top 3 competitors' },
  { icon: CheckCircle2, label: 'Acquisition Stack Recommendation', desc: "The exact system we'd build for you" },
  { icon: Video, label: 'Private 30-Min Strategy Call', desc: 'Walkthrough with your dedicated specialist' },
];

const requirements = [
  'Spending $500+/month on paid ads',
  'Hotel, spa, or wellness brand with a team',
  'Ready to treat marketing as infrastructure',
  'Not looking for quick fixes or cheap solutions',
];

export function AuditSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      businessName: (form.elements.namedItem('businessName') as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
      challenge: (form.elements.namedItem('challenge') as HTMLSelectElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
    };

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Submission failed');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="audit" className="section-divider py-24 px-5 md:px-10 bg-carbon">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="overline mb-4">Free Acquisition Audit</p>
            <h2 className="text-h2 md:text-[40px] font-bold text-snow mb-4">
              Find Out Exactly Why Your Ads Aren&apos;t Filling Your Calendar.{' '}
              <span className="text-teal">Free, In 48 Hours.</span>
            </h2>
            <p className="text-body-lg text-muted mb-8">
              We&apos;ll audit your current ad accounts, identify the exact gaps in your acquisition
              system, and show you a clear path to predictable bookings. No fluff. No sales
              pressure. Just a real diagnosis.
            </p>

            {/* Deliverables */}
            <div className="space-y-3 mb-8">
              <p className="text-body-sm font-medium text-snow mb-3">What you receive:</p>
              {deliverables.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-teal-muted flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-snow">{d.label}</p>
                      <p className="text-caption text-faint">{d.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timing */}
            <div className="flex items-center gap-2 text-body-sm text-muted">
              <Clock size={14} className="text-teal" />
              <span>Delivered within 48 hours of intake submission</span>
            </div>

            {/* Who it's for */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-body-sm font-medium text-snow mb-3">Who this is for:</p>
              <ul className="space-y-2">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-body-sm text-muted">
                    <CheckCircle2 size={14} className="text-teal mt-0.5 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-body-sm text-faint italic">
                We review every application. We only take clients we can genuinely help.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-obsidian border border-border rounded-xl p-6 md:p-8"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-teal" />
                </div>
                <h3 className="text-h4 font-semibold text-snow mb-2">You&apos;re In</h3>
                <p className="text-body-sm text-muted max-w-xs">
                  Your audit request is confirmed. We&apos;ll reach out within 24 hours to schedule
                  your strategy call.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-h4 font-semibold text-snow mb-1">Claim Your Free Audit</h3>
                <p className="text-body-sm text-muted mb-6">
                  We&apos;ll reach out within 24 hours to schedule your strategy call.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-caption text-muted mb-1.5 block">First Name *</label>
                      <input
                        name="firstName"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-caption text-muted mb-1.5 block">Business Name *</label>
                      <input
                        name="businessName"
                        type="text"
                        required
                        placeholder="Your business"
                        className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">Business Website *</label>
                    <input
                      name="website"
                      type="url"
                      required
                      placeholder="https://yourbusiness.com"
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">Monthly Ad Budget *</label>
                    <select
                      name="budget"
                      required
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow focus:outline-none focus:border-teal/50 transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="$500–$1,000/month">$500 – $1,000/month</option>
                      <option value="$1,000–$2,000/month">$1,000 – $2,000/month</option>
                      <option value="$2,000–$5,000/month">$2,000 – $5,000/month</option>
                      <option value="$5,000+/month">$5,000+/month</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">Main Challenge *</label>
                    <select
                      name="challenge"
                      required
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow focus:outline-none focus:border-teal/50 transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select your challenge</option>
                      <option value="Inconsistent bookings / appointments">Inconsistent bookings / appointments</option>
                      <option value="High cost per acquisition">High cost per acquisition</option>
                      <option value="No system connecting ads to bookings">No system connecting ads to bookings</option>
                      <option value="Want to scale but don't know how">Want to scale but don&apos;t know how</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@yourbusiness.com"
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-caption text-red-400 bg-red-400/10 border border-red-400/20 rounded px-3 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Claim Your Free Audit
                        <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-caption text-faint text-center">
                    No sales pressure. Real diagnosis only. We respond within 24 hours.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
