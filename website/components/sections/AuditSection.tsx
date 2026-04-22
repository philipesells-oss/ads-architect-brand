'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, FileText, Loader2, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PhoneInput } from '@/components/ui/PhoneInput';
import { useT } from '@/lib/i18n/context';

const deliverableIcons = [FileText, FileText, FileText, CheckCircle2, Video];

export function AuditSection() {
  const t = useT();
  const { audit } = t;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [phone, setPhone] = useState('');

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
      phone,
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
            <p className="overline mb-4">{audit.overline}</p>
            <h2 className="text-h2 md:text-[40px] font-bold text-snow mb-4">
              {audit.h2part1}{' '}
              <span className="text-teal">{audit.h2part2}</span>
            </h2>
            <p className="text-body-lg text-muted mb-8">{audit.sub}</p>

            <div className="space-y-3 mb-8">
              <p className="text-body-sm font-medium text-snow mb-3">{audit.whatTitle}</p>
              {audit.deliverables.map((d, i) => {
                const Icon = deliverableIcons[i];
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

            <div className="flex items-center gap-2 text-body-sm text-muted">
              <Clock size={14} className="text-teal" />
              <span>{audit.timing}</span>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-body-sm font-medium text-snow mb-3">{audit.whoTitle}</p>
              <ul className="space-y-2">
                {audit.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-body-sm text-muted">
                    <CheckCircle2 size={14} className="text-teal mt-0.5 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-body-sm text-faint italic">{audit.footnote}</p>
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
                <h3 className="text-h4 font-semibold text-snow mb-2">{audit.successTitle}</h3>
                <p className="text-body-sm text-muted max-w-xs">{audit.successMsg}</p>
              </div>
            ) : (
              <>
                <h3 className="text-h4 font-semibold text-snow mb-1">{audit.formTitle}</h3>
                <p className="text-body-sm text-muted mb-6">{audit.formSub}</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-caption text-muted mb-1.5 block">{audit.labels.firstName}</label>
                      <input name="firstName" type="text" required placeholder={audit.placeholders.firstName}
                        className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200" />
                    </div>
                    <div>
                      <label className="text-caption text-muted mb-1.5 block">{audit.labels.businessName}</label>
                      <input name="businessName" type="text" required placeholder={audit.placeholders.businessName}
                        className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200" />
                    </div>
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">{audit.labels.website}</label>
                    <input name="website" type="url" required placeholder={audit.placeholders.website}
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200" />
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">{audit.labels.budget}</label>
                    <select name="budget" required
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow focus:outline-none focus:border-teal/50 transition-colors duration-200 appearance-none">
                      {audit.budgetOptions.map((opt, i) => (
                        <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">{audit.labels.challenge}</label>
                    <select name="challenge" required
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow focus:outline-none focus:border-teal/50 transition-colors duration-200 appearance-none">
                      {audit.challengeOptions.map((opt, i) => (
                        <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">{audit.labels.email}</label>
                    <input name="email" type="email" required placeholder={audit.placeholders.email}
                      className="w-full bg-carbon border border-border rounded px-4 py-3 text-body text-snow placeholder-faint focus:outline-none focus:border-teal/50 transition-colors duration-200" />
                  </div>

                  <div>
                    <label className="text-caption text-muted mb-1.5 block">Phone Number *</label>
                    <PhoneInput
                      value={phone}
                      onChange={setPhone}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-caption text-red-400 bg-red-400/10 border border-red-400/20 rounded px-3 py-2">
                      {errorMsg}
                    </p>
                  )}

                  <Button type="submit" size="lg" className="w-full mt-2" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <><Loader2 size={18} className="mr-2 animate-spin" />{audit.loadingBtn}</>
                    ) : (
                      <>{audit.submitBtn}<ArrowRight size={18} className="ml-2" /></>
                    )}
                  </Button>

                  <p className="text-caption text-faint text-center">{audit.formFootnote}</p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
