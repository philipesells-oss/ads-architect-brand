'use client';

import { useState, useEffect } from 'react';

const teal = '#00D4AA';
const obsidian = '#0A0A0A';
const carbon = '#111111';
const graphite = '#18181B';
const snow = '#FAFAFA';
const muted = '#A1A1AA';
const faint = '#52525B';
const border = '#27272A';

const sections = [
  { id: 'foundation', label: 'Brand Foundation' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'messaging', label: 'Messaging' },
  { id: 'services', label: 'Services' },
  { id: 'stack', label: 'Acquisition Stack™' },
  { id: 'visual', label: 'Visual Identity' },
  { id: 'voice', label: 'Brand Voice' },
  { id: 'icp', label: 'Ideal Client' },
];

const colors = [
  { name: 'Obsidian', hex: '#0A0A0A', usage: 'Primary background', light: false },
  { name: 'Carbon', hex: '#111111', usage: 'Cards, surfaces', light: false },
  { name: 'Signal Teal', hex: '#00D4AA', usage: 'CTAs, accent, highlights', light: true },
  { name: 'Teal Hover', hex: '#33DDBB', usage: 'Hover states', light: true },
  { name: 'Snow', hex: '#FAFAFA', usage: 'Primary text', light: false },
  { name: 'Muted', hex: '#A1A1AA', usage: 'Secondary text', light: false },
  { name: 'Border', hex: '#27272A', usage: 'Dividers, borders', light: false },
];

const services = [
  {
    tier: 'Flagship',
    name: 'The Acquisition Architecture Program™',
    tagline: 'Full acquisition infrastructure, design, build and ongoing management.',
    includes: ['Meta + Google + TikTok Ads', 'Landing pages & booking flow', 'CRM pipeline setup', 'WhatsApp automation', 'Email flows (nurture + retention)', 'Monthly Revenue Intelligence Brief™', 'Dedicated Acquisition Strategist'],
    ideal: 'Brands spending $2,000+/month on ads',
    duration: 'Ongoing retainer · min. 6 months',
    accent: true,
  },
  {
    tier: 'Most Popular',
    name: 'The Revenue Pipeline™',
    tagline: 'Paid ads connected to a capture system, CRM, and WhatsApp follow-up.',
    includes: ['Meta + Google Ads (2 platforms)', 'Landing page optimization', 'CRM pipeline setup', 'WhatsApp follow-up automation', 'Monthly Revenue Intelligence Brief™'],
    ideal: '$500–2,000/month ad budget',
    duration: 'Retainer · min. 3 months',
    accent: false,
  },
  {
    tier: 'Quick Start',
    name: 'The Acquisition Sprint™',
    tagline: 'Paid ads live, landing page optimized, lead capture automated — in 14 days.',
    includes: ['Paid ads on 1 platform', 'Landing page optimization', 'Basic lead capture automation', '30-day performance review call'],
    ideal: 'New brands or new markets',
    duration: 'One-time · optional retainer upgrade',
    accent: false,
  },
];

const stackLayers = [
  { phase: 'ATTRACT', tools: ['Meta Ads', 'Google Ads', 'TikTok Ads'], desc: 'Reach your ideal clients where they actually are — with creative engineered for your category.' },
  { phase: 'CAPTURE', tools: ['Landing Pages', 'Lead Forms', 'Booking System'], desc: 'Convert traffic into leads and reservations, not just clicks.' },
  { phase: 'CONVERT', tools: ['CRM System', 'WhatsApp', 'Follow-Up Sequences'], desc: 'Close the gap between "interested" and "booked."' },
  { phase: 'RETAIN', tools: ['Email Flows', 'Loyalty Sequences', 'Upsell Automations'], desc: 'Turn one-time visitors into lifetime customers.' },
];

const doList = [
  'Write like a premium strategic partner, not an ad vendor',
  'Use infrastructure metaphors: architecture, system, engine, stack',
  'Lead with outcomes: "predictable bookings", "lower cost per booking"',
  'Reference specific numbers and percentages',
  'Use the word "system" over "campaign"',
  'Use "we build" over "we manage"',
];

const dontList = [
  'Don\'t say "social media marketing" — say "paid acquisition"',
  'Don\'t use emojis in professional copy',
  'Don\'t lead with features — lead with the problem you solve',
  'Don\'t use buzzwords: "growth hacking", "viral", "crushing it"',
  'Don\'t use exclamation marks in headlines',
  'Don\'t be generic: no "results-driven" or "passionate team"',
];

export default function BrandbookPage() {
  const [active, setActive] = useState('foundation');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: obsidian, minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: snow }}>
      {/* Top bar */}
      <div style={{ borderBottom: `1px solid ${border}`, padding: '20px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: obsidian, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="/" style={{ color: muted, textDecoration: 'none', fontSize: 14 }}>← adsarchitect.agency</a>
          <span style={{ color: border }}>|</span>
          <span style={{ color: snow, fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>BRANDBOOK</span>
          <span style={{ background: `${teal}15`, border: `1px solid ${teal}40`, color: teal, borderRadius: 100, padding: '3px 12px', fontSize: 11, fontWeight: 600 }}>v1.0</span>
        </div>
        <span style={{ color: faint, fontSize: 12 }}>ADS Architect · Confidential</span>
      </div>

      <div style={{ display: 'flex', maxWidth: 1280, margin: '0 auto' }}>
        {/* Sidebar */}
        <aside style={{ width: 220, flexShrink: 0, padding: '48px 0', position: 'sticky', top: 61, height: 'calc(100vh - 61px)', overflowY: 'auto' }}>
          <nav>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  display: 'block',
                  padding: '10px 24px',
                  fontSize: 13,
                  fontWeight: active === s.id ? 600 : 400,
                  color: active === s.id ? teal : muted,
                  textDecoration: 'none',
                  borderLeft: `2px solid ${active === s.id ? teal : 'transparent'}`,
                  transition: 'all 0.15s',
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '60px 48px 120px', maxWidth: 900 }}>

          {/* ─── HERO ─── */}
          <div style={{ marginBottom: 100 }}>
            <p style={{ color: teal, fontSize: 12, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 20 }}>Brand Identity System</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, margin: 0, marginBottom: 24 }}>
              ADS<br /><span style={{ color: teal }}>Architect</span>
            </h1>
            <p style={{ color: muted, fontSize: 20, maxWidth: 560, lineHeight: 1.6, margin: 0, marginBottom: 32 }}>
              Acquisition Infrastructure for Premium Hospitality & Wellness Brands.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['Category: Acquisition Infrastructure', 'Market: B2B Premium', 'Base: Bali · Global'].map((t) => (
                <span key={t} style={{ background: graphite, border: `1px solid ${border}`, borderRadius: 100, padding: '6px 16px', fontSize: 13, color: muted }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ─── BRAND FOUNDATION ─── */}
          <section id="foundation" style={{ marginBottom: 100 }}>
            <SectionHeader label="01" title="Brand Foundation" />

            <Card>
              <Label>Tagline — Primary</Label>
              <blockquote style={{ margin: 0, borderLeft: `4px solid ${teal}`, paddingLeft: 24 }}>
                <p style={{ fontSize: 28, fontWeight: 700, color: snow, margin: 0, lineHeight: 1.3 }}>
                  "We Build the System.<br />You Fill the Calendar."
                </p>
              </blockquote>
            </Card>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              {[
                { label: 'Proposals / Executive', value: '"Acquisition Infrastructure for Premium Brands."' },
                { label: 'Outreach / Direct Response', value: '"More Bookings. Less Guesswork."' },
                { label: 'Category-defining', value: '"Beyond Ads. Built for Revenue."' },
                { label: 'Brand Promise', value: '"We don\'t deliver reports. We deliver reservations."' },
              ].map((t) => (
                <div key={t.label} style={{ background: graphite, border: `1px solid ${border}`, borderRadius: 10, padding: '20px 24px' }}>
                  <p style={{ color: faint, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', margin: 0, marginBottom: 8 }}>{t.label}</p>
                  <p style={{ color: snow, fontSize: 15, margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>{t.value}</p>
                </div>
              ))}
            </div>

            <Card>
              <Label>Onliness Statement (Marty Neumeier)</Label>
              <p style={{ color: muted, fontSize: 16, lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                "ADS Architect is the <span style={{ color: snow, fontWeight: 600 }}>only acquisition infrastructure firm</span> that transforms ad spend into predictable reservation systems for <span style={{ color: teal, fontWeight: 600 }}>premium hospitality and wellness brands</span> that want to dominate their local market."
              </p>
            </Card>
          </section>

          {/* ─── POSITIONING ─── */}
          <section id="positioning" style={{ marginBottom: 100 }}>
            <SectionHeader label="02" title="Positioning & Category" />

            <Card>
              <Label>Category Shift</Label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <div style={{ background: '#1A0A0A', border: '1px solid #3A1A1A', borderRadius: 8, padding: '12px 24px' }}>
                  <p style={{ color: '#EF4444', fontSize: 13, margin: 0, fontFamily: 'JetBrains Mono, monospace' }}>FROM</p>
                  <p style={{ color: snow, fontSize: 16, fontWeight: 600, margin: '4px 0 0' }}>"Performance Marketing Agency"</p>
                </div>
                <span style={{ color: teal, fontSize: 24 }}>→</span>
                <div style={{ background: `${teal}0D`, border: `1px solid ${teal}30`, borderRadius: 8, padding: '12px 24px' }}>
                  <p style={{ color: teal, fontSize: 13, margin: 0, fontFamily: 'JetBrains Mono, monospace' }}>TO</p>
                  <p style={{ color: snow, fontSize: 16, fontWeight: 600, margin: '4px 0 0' }}>"Acquisition Infrastructure for Hospitality & Wellness"</p>
                </div>
              </div>
            </Card>

            <Card>
              <Label>The Word We Own</Label>
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <p style={{ fontSize: 40, fontWeight: 700, color: teal, margin: 0, letterSpacing: -1 }}>ACQUISITION</p>
                <p style={{ fontSize: 40, fontWeight: 700, color: snow, margin: 0, letterSpacing: -1 }}>INFRASTRUCTURE</p>
              </div>
            </Card>

            <Card>
              <Label>Competitive Differentiation</Label>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Competitor Type', 'Their Position', 'ADS Architect'].map((h) => (
                      <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: faint, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', borderBottom: `1px solid ${border}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Freelance ad manager', '"I run your Meta Ads"', 'We architect full systems'],
                    ['Generic agency', '"Full-service marketing"', 'Specialized in Hospitality & Wellness only'],
                    ['In-house marketer', '"We manage everything"', "We build what in-house can't"],
                    ['Marketing consultant', '"Strategy and advice"', 'Strategy + implementation + optimization'],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: '12px', color: j === 2 ? teal : muted, fontSize: 14, borderBottom: `1px solid ${border}` }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </section>

          {/* ─── MESSAGING ─── */}
          <section id="messaging" style={{ marginBottom: 100 }}>
            <SectionHeader label="03" title="Messaging Architecture" />

            <Card>
              <Label>StoryBrand Framework</Label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { role: 'CHARACTER (Hero)', text: 'Owner of a boutique hotel or premium spa — excellent product, inconsistent bookings.' },
                  { role: 'PROBLEM', text: 'Ad budget wasted on clicks that don\'t convert into reservations. Frustration of not knowing what\'s failing.' },
                  { role: 'GUIDE (ADS Architect)', text: 'Empathy + Authority: $2M+ managed. 50+ active campaigns. Hospitality specialists.' },
                  { role: 'PLAN', text: '1. Acquisition Audit → 2. System Architecture → 3. Revenue Optimization' },
                  { role: 'SUCCESS', text: 'Predictable bookings. Lower cost per client. The system works while you run your business.' },
                  { role: 'FAILURE (if no action)', text: 'Keep paying ad managers who deliver reports, not revenue.' },
                ].map((item) => (
                  <div key={item.role} style={{ background: graphite, border: `1px solid ${border}`, borderRadius: 8, padding: '16px 20px' }}>
                    <p style={{ color: teal, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', margin: 0, marginBottom: 8 }}>{item.role}</p>
                    <p style={{ color: muted, fontSize: 14, margin: 0, lineHeight: 1.5 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <Label>Primary Headline</Label>
              <div style={{ padding: '24px 0', textAlign: 'center' }}>
                <p style={{ fontSize: 36, fontWeight: 700, color: snow, margin: 0, lineHeight: 1.2 }}>
                  "We Don't Run Ads.<br />
                  <span style={{ color: teal }}>We Build Acquisition Systems."</span>
                </p>
              </div>
            </Card>
          </section>

          {/* ─── SERVICES ─── */}
          <section id="services" style={{ marginBottom: 100 }}>
            <SectionHeader label="04" title="Service Portfolio" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {services.map((s) => (
                <div key={s.name} style={{ background: s.accent ? `${teal}08` : carbon, border: `1px solid ${s.accent ? teal + '40' : border}`, borderRadius: 14, padding: '28px 32px', boxShadow: s.accent ? `0 0 40px ${teal}0A` : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ background: s.accent ? `${teal}20` : graphite, color: s.accent ? teal : muted, border: `1px solid ${s.accent ? teal + '40' : border}`, borderRadius: 100, padding: '4px 14px', fontSize: 11, fontWeight: 700 }}>{s.tier}</span>
                  </div>
                  <h3 style={{ color: snow, fontSize: 20, fontWeight: 700, margin: 0, marginBottom: 8 }}>{s.name}</h3>
                  <p style={{ color: muted, fontSize: 15, margin: 0, marginBottom: 20 }}>{s.tagline}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                    {s.includes.map((item) => (
                      <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, background: graphite, border: `1px solid ${border}`, borderRadius: 6, padding: '5px 12px', fontSize: 12, color: muted }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: teal, display: 'inline-block' }} />
                        {item}
                      </span>
                    ))}
                  </div>
                  <div style={{ borderTop: `1px solid ${border}`, paddingTop: 16, display: 'flex', gap: 24 }}>
                    <p style={{ color: faint, fontSize: 12, margin: 0 }}><span style={{ color: muted }}>Ideal for:</span> {s.ideal}</p>
                    <p style={{ color: faint, fontSize: 12, margin: 0 }}>{s.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── ACQUISITION STACK ─── */}
          <section id="stack" style={{ marginBottom: 100 }}>
            <SectionHeader label="05" title="Acquisition Stack™" />
            <Card>
              <p style={{ textAlign: 'center', color: muted, fontSize: 15, marginBottom: 32 }}>
                "One System. Four Engines. One Goal: Fill Your Calendar."
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
                {stackLayers.map((layer, i) => (
                  <div key={layer.phase} style={{ background: graphite, border: `1px solid ${border}`, borderTop: `3px solid ${teal}`, borderRadius: 10, padding: '20px 16px' }}>
                    <p style={{ color: teal, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', margin: 0, marginBottom: 12 }}>{i + 1}. {layer.phase}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
                      {layer.tools.map((t) => (
                        <span key={t} style={{ background: carbon, border: `1px solid ${border}`, borderRadius: 4, padding: '3px 8px', fontSize: 11, color: snow }}>{t}</span>
                      ))}
                    </div>
                    <p style={{ color: muted, fontSize: 12, margin: 0, lineHeight: 1.5 }}>{layer.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: `${teal}08`, border: `1px solid ${teal}20`, borderRadius: 8, padding: '16px 24px', textAlign: 'center' }}>
                <p style={{ color: teal, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', margin: 0, marginBottom: 4 }}>INTELLIGENCE LAYER</p>
                <p style={{ color: muted, fontSize: 13, margin: 0 }}>Cost per Booking · ROAS · LTV · Conversion Rate — not likes and impressions</p>
              </div>
            </Card>
          </section>

          {/* ─── VISUAL IDENTITY ─── */}
          <section id="visual" style={{ marginBottom: 100 }}>
            <SectionHeader label="06" title="Visual Identity" />

            <Card>
              <Label>Color Palette</Label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                {colors.map((c) => (
                  <div key={c.name} style={{ borderRadius: 10, overflow: 'hidden', border: `1px solid ${border}` }}>
                    <div style={{ background: c.hex, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: c.light ? obsidian : snow, fontSize: 13, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>{c.hex}</span>
                    </div>
                    <div style={{ background: graphite, padding: '10px 12px' }}>
                      <p style={{ color: snow, fontSize: 13, fontWeight: 600, margin: 0 }}>{c.name}</p>
                      <p style={{ color: faint, fontSize: 11, margin: 0, marginTop: 2 }}>{c.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <Label>Typography</Label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <p style={{ color: faint, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Inter — Headlines & Body</p>
                  <p style={{ fontSize: 48, fontWeight: 700, color: snow, margin: 0, lineHeight: 1 }}>Aa Bb Cc</p>
                  <p style={{ fontSize: 20, fontWeight: 400, color: muted, margin: '8px 0 0' }}>We Build the System. You Fill the Calendar.</p>
                </div>
                <div style={{ borderTop: `1px solid ${border}`, paddingTop: 24 }}>
                  <p style={{ color: faint, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>JetBrains Mono — Metrics & Numbers</p>
                  <p style={{ fontSize: 48, fontWeight: 700, color: teal, margin: 0, lineHeight: 1, fontFamily: 'JetBrains Mono, monospace' }}>$127</p>
                  <p style={{ fontSize: 20, color: muted, margin: '8px 0 0', fontFamily: 'JetBrains Mono, monospace' }}>4.8x ROAS · -62% CPB · 200+ bookings</p>
                </div>
              </div>
            </Card>

            <Card>
              <Label>Logo — AA Monogram</Label>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
                {[{ bg: obsidian, size: 80 }, { bg: carbon, size: 80 }, { bg: teal, size: 80 }].map((v, i) => (
                  <div key={i} style={{ background: v.bg, width: v.size * 1.5, height: v.size * 1.5, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${border}` }}>
                    <span style={{ color: v.bg === teal ? obsidian : teal, fontSize: v.size * 0.5, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', letterSpacing: -2 }}>AA</span>
                  </div>
                ))}
                <div>
                  <p style={{ color: muted, fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                    Minimal monogram on dark backgrounds.<br />
                    Signal Teal on Obsidian — primary.<br />
                    Inverted (dark on teal) for contrast use.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* ─── BRAND VOICE ─── */}
          <section id="voice" style={{ marginBottom: 100 }}>
            <SectionHeader label="07" title="Brand Voice" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div style={{ background: `${teal}08`, border: `1px solid ${teal}30`, borderRadius: 12, padding: '24px' }}>
                <p style={{ color: teal, fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', margin: 0, marginBottom: 16 }}>✓ DO</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {doList.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: muted, fontSize: 14, lineHeight: 1.5 }}>
                      <span style={{ color: teal, flexShrink: 0, marginTop: 2 }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#1A0808', border: '1px solid #3A1010', borderRadius: 12, padding: '24px' }}>
                <p style={{ color: '#EF4444', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', margin: 0, marginBottom: 16 }}>✗ DON'T</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {dontList.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: muted, fontSize: 14, lineHeight: 1.5 }}>
                      <span style={{ color: '#EF4444', flexShrink: 0, marginTop: 2 }}>×</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Card>
              <Label>Voice Attributes</Label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {['Authoritative', 'Direct', 'Infrastructure-minded', 'Premium', 'Results-focused', 'No fluff'].map((attr) => (
                  <span key={attr} style={{ background: graphite, border: `1px solid ${border}`, borderRadius: 8, padding: '10px 20px', fontSize: 14, color: snow, fontWeight: 500 }}>{attr}</span>
                ))}
              </div>
            </Card>
          </section>

          {/* ─── ICP ─── */}
          <section id="icp" style={{ marginBottom: 100 }}>
            <SectionHeader label="08" title="Ideal Client Profile" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                {
                  title: 'Hospitality',
                  brands: ['Boutique hotels, resorts, glamping (10-50 rooms)', 'Integrated hotel/resort spas', 'Premium short-term rentals'],
                  green: ['Monthly revenue >$15K/month', 'Has spent on ads before', 'Uses online booking system', 'Meta / Google Ads account exists'],
                  red: ['Revenue <$5K/month', 'No website or booking system', 'Owner won\'t delegate'],
                },
                {
                  title: 'Wellness',
                  brands: ['Day spas, medical spas, premium salons', 'Yoga studios, wellness retreats', 'Premium fitness studios'],
                  green: ['300+ monthly appointments', '$20K+ monthly revenue', 'Has existing client base', 'Struggles with acquisition'],
                  red: ['Single therapist operation', 'No dedicated space', 'Expects results in 7 days'],
                },
              ].map((icp) => (
                <div key={icp.title} style={{ background: carbon, border: `1px solid ${border}`, borderRadius: 14, padding: '28px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <h3 style={{ color: snow, fontSize: 18, fontWeight: 700, margin: 0 }}>{icp.title}</h3>
                  <div>
                    <p style={{ color: faint, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', margin: 0, marginBottom: 8 }}>Brand Types</p>
                    {icp.brands.map((b) => <p key={b} style={{ color: muted, fontSize: 13, margin: 0, marginBottom: 4 }}>· {b}</p>)}
                  </div>
                  <div>
                    <p style={{ color: teal, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', margin: 0, marginBottom: 8 }}>✓ Green Flags</p>
                    {icp.green.map((g) => <p key={g} style={{ color: muted, fontSize: 13, margin: 0, marginBottom: 4 }}>✓ {g}</p>)}
                  </div>
                  <div>
                    <p style={{ color: '#EF4444', fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', margin: 0, marginBottom: 8 }}>✗ Red Flags</p>
                    {icp.red.map((r) => <p key={r} style={{ color: muted, fontSize: 13, margin: 0, marginBottom: 4 }}>✗ {r}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div style={{ borderTop: `1px solid ${border}`, paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ color: snow, fontWeight: 700, margin: 0 }}>ADS Architect</p>
              <p style={{ color: faint, fontSize: 13, margin: 0 }}>Brandbook v1.0 · Confidential</p>
            </div>
            <a href="/" style={{ color: teal, textDecoration: 'none', fontSize: 14 }}>adsarchitect.agency →</a>
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <span style={{ color: faint, fontSize: 11, fontWeight: 600, letterSpacing: 3, fontFamily: 'JetBrains Mono, monospace' }}>{label}</span>
      <h2 style={{ color: snow, fontSize: 36, fontWeight: 700, margin: 0, marginTop: 4 }}>{title}</h2>
      <div style={{ width: 40, height: 3, background: teal, marginTop: 12 }} />
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: carbon, border: `1px solid ${border}`, borderRadius: 14, padding: '28px 32px', marginBottom: 16 }}>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: faint, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', margin: 0, marginBottom: 16 }}>
      {children}
    </p>
  );
}
