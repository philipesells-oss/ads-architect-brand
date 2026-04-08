export function Post6ReelSprint() {
  const deliverables = [
    'Complete Stack Built',
    'Ad Campaigns Live',
    'Tracking & Automations',
    'Hand-off & Training',
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
      {/* Top teal bar */}
      <div style={{ width: '100%', height: 6, background: '#00D4AA', flexShrink: 0 }} />

      {/* Day counters */}
      <div style={{ display: 'flex', gap: 20, marginTop: 100 }}>
        {['Day 1', 'Day 7', 'Day 14'].map((d, i) => (
          <div
            key={i}
            style={{
              background: '#111111',
              border: '1px solid #1E1E1E',
              borderBottom: `4px solid ${i === 2 ? '#00D4AA' : '#D43F3F'}`,
              borderRadius: 10,
              padding: '16px 32px',
              textAlign: 'center',
            }}
          >
            <p style={{ color: i === 2 ? '#00D4AA' : '#FAFAFA', fontSize: 24, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>
              {d}
            </p>
          </div>
        ))}
      </div>

      {/* Main headline */}
      <div style={{ marginTop: 100, textAlign: 'center', padding: '0 80px' }}>
        <h1 style={{ color: '#FAFAFA', fontSize: 80, fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
          From Zero<br />to Full Stack<br />in 14 Days
        </h1>
      </div>

      {/* Badge */}
      <div
        style={{
          marginTop: 60,
          background: 'rgba(0,212,170,0.1)',
          border: '1.5px solid rgba(0,212,170,0.4)',
          borderRadius: 100,
          padding: '16px 48px',
        }}
      >
        <p style={{ color: '#00D4AA', fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: 1 }}>
          Acquisition Sprint™
        </p>
      </div>

      {/* Divider */}
      <div style={{ width: 600, height: 2, background: '#00D4AA', marginTop: 80 }} />

      {/* Deliverables */}
      <div style={{ marginTop: 80, padding: '0 100px', width: '100%', boxSizing: 'border-box' }}>
        {deliverables.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: i < deliverables.length - 1 ? 48 : 0 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(0,212,170,0.15)',
                border: '1.5px solid #00D4AA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ color: '#00D4AA', fontSize: 16, fontWeight: 700 }}>✓</span>
            </div>
            <p style={{ color: '#FAFAFA', fontSize: 26, margin: 0, fontWeight: 500 }}>{d}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 120, textAlign: 'center' }}>
        <div style={{ background: '#00D4AA', borderRadius: 12, padding: '28px 72px', display: 'inline-block' }}>
          <p style={{ color: '#0A0A0A', fontSize: 24, fontWeight: 700, margin: 0 }}>Claim Your Sprint Slot</p>
        </div>
        <p style={{ color: '#A1A1AA', fontSize: 16, marginTop: 20 }}>Limited slots · Next cohort starts soon</p>
      </div>

      {/* Brand footer */}
      <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D4AA' }} />
        <p style={{ color: '#333', fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>ADS ARCHITECT</p>
      </div>
    </div>
  );
}
