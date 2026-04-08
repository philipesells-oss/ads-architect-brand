export function Post8ReelCPB() {
  const timeline = [
    { day: 'Day 1', action: 'Audit', detail: 'Mapped 14 leaks' },
    { day: 'Day 30', action: 'Implementation', detail: 'Stack rebuilt' },
    { day: 'Day 60', action: 'Results', detail: 'CPB optimized' },
  ];

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: '#0A0A0A',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top bar */}
      <div style={{ width: '100%', height: 6, background: '#00D4AA', flexShrink: 0 }} />

      {/* Case study badge */}
      <div
        style={{
          marginTop: 80,
          border: '1.5px solid rgba(0,212,170,0.3)',
          borderRadius: 100,
          padding: '12px 36px',
        }}
      >
        <p style={{ color: '#A1A1AA', fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>
          Case Study · 90-Room Bali Resort
        </p>
      </div>

      {/* Metrics */}
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <p style={{ color: '#FAFAFA', fontSize: 120, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0, lineHeight: 1 }}>
          $127
        </p>

        {/* Arrow down */}
        <div style={{ marginTop: 20, marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
          <svg width="48" height="64" viewBox="0 0 48 64">
            <line x1="24" y1="0" x2="24" y2="52" stroke="#D43F3F" strokeWidth="4" />
            <polyline points="8,40 24,56 40,40" fill="none" stroke="#D43F3F" strokeWidth="4" />
          </svg>
        </div>

        <p style={{ color: '#00D4AA', fontSize: 120, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0, lineHeight: 1 }}>
          $48
        </p>
      </div>

      {/* Percentage */}
      <div style={{ marginTop: 60, textAlign: 'center' }}>
        <p style={{ color: '#FAFAFA', fontSize: 36, fontWeight: 700, margin: 0 }}>
          62% Reduction in Cost Per Booking
        </p>
        <p style={{ color: '#A1A1AA', fontSize: 20, margin: 0, marginTop: 12 }}>in 60 days</p>
      </div>

      {/* Divider */}
      <div style={{ width: 600, height: 1, background: '#1E1E1E', marginTop: 80 }} />

      {/* Timeline */}
      <div style={{ marginTop: 80, padding: '0 80px', width: '100%', boxSizing: 'border-box' }}>
        {timeline.map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: i < timeline.length - 1 ? 0 : 0 }}>
            {/* Left: dot + line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 32, flexShrink: 0 }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#00D4AA', flexShrink: 0 }} />
              {i < timeline.length - 1 && (
                <div style={{ width: 2, height: 64, background: 'linear-gradient(to bottom, #00D4AA, rgba(0,212,170,0.2))' }} />
              )}
            </div>
            {/* Right: content */}
            <div style={{ paddingTop: 0 }}>
              <p style={{ color: '#00D4AA', fontSize: 16, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>
                {t.day}
              </p>
              <p style={{ color: '#FAFAFA', fontSize: 22, fontWeight: 600, margin: 0 }}>{t.action}</p>
              <p style={{ color: '#A1A1AA', fontSize: 16, margin: 0, marginBottom: i < timeline.length - 1 ? 48 : 0 }}>{t.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <div style={{ background: '#00D4AA', borderRadius: 12, padding: '28px 72px', display: 'inline-block' }}>
          <p style={{ color: '#0A0A0A', fontSize: 24, fontWeight: 700, margin: 0 }}>Get Your Audit (Free)</p>
        </div>
      </div>

      {/* Brand footer */}
      <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D4AA' }} />
        <p style={{ color: '#333', fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>ADS ARCHITECT</p>
      </div>
    </div>
  );
}
