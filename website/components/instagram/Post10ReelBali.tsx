export function Post10ReelBali() {
  const stats = ['16+ Years Ad Infrastructure', '50+ Active Campaigns', '$2M+ Annual Ad Spend Managed'];

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
      {/* Background geometric pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(0,212,170,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,212,170,0.03) 0%, transparent 50%)',
        }}
      />

      {/* Top bar */}
      <div style={{ width: '100%', height: 6, background: '#00D4AA', flexShrink: 0 }} />

      {/* Location badge */}
      <div
        style={{
          marginTop: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#111111',
          border: '1px solid #1E1E1E',
          borderRadius: 100,
          padding: '12px 32px',
        }}
      >
        <span style={{ fontSize: 18 }}>📍</span>
        <p style={{ color: '#A1A1AA', fontSize: 16, fontWeight: 600, letterSpacing: 2, margin: 0 }}>BALI, INDONESIA</p>
      </div>

      {/* Main headline */}
      <div style={{ marginTop: 80, textAlign: 'center', padding: '0 80px' }}>
        <h1 style={{ color: '#FAFAFA', fontSize: 84, fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
          Built in<br />Bali.
        </h1>
        <h1 style={{ color: '#00D4AA', fontSize: 84, fontWeight: 700, margin: 0, marginTop: 8, lineHeight: 1.05 }}>
          Trusted<br />Worldwide.
        </h1>
      </div>

      {/* Subheader */}
      <p style={{ color: '#A1A1AA', fontSize: 22, textAlign: 'center', marginTop: 40, padding: '0 80px' }}>
        Acquisition Infrastructure for Premium Brands
      </p>

      {/* Geometric visual element */}
      <div style={{ position: 'relative', marginTop: 80, width: 320, height: 320 }}>
        {/* Outer circle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid rgba(0,212,170,0.2)',
          }}
        />
        {/* Inner circle */}
        <div
          style={{
            position: 'absolute',
            inset: 40,
            borderRadius: '50%',
            border: '1px solid rgba(0,212,170,0.1)',
          }}
        />
        {/* Center dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#00D4AA',
          }}
        />
        {/* Dot matrix corners */}
        {[0, 1, 2, 3, 4, 5].map(col =>
          [0, 1, 2, 3, 4, 5].map(row => (
            <div
              key={`${col}-${row}`}
              style={{
                position: 'absolute',
                left: 20 + col * 24,
                top: 20 + row * 24,
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: '#111111',
                opacity: 0.8,
              }}
            />
          ))
        )}
        {/* AA monogram */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: '#00D4AA',
              fontSize: 72,
              fontWeight: 700,
              fontFamily: 'JetBrains Mono, monospace',
              margin: 0,
              letterSpacing: -4,
            }}
          >
            AA
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ marginTop: 80, padding: '0 80px', width: '100%', boxSizing: 'border-box' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: i < stats.length - 1 ? 36 : 0 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#D43F3F', flexShrink: 0 }} />
            <p style={{ color: '#FAFAFA', fontSize: 24, margin: 0, fontWeight: 500 }}>{s}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <div style={{ background: '#00D4AA', borderRadius: 12, padding: '28px 72px', display: 'inline-block' }}>
          <p style={{ color: '#0A0A0A', fontSize: 24, fontWeight: 700, margin: 0 }}>Meet the Team</p>
        </div>
        <p style={{ color: '#A1A1AA', fontSize: 16, marginTop: 20 }}>DM for free audit booking</p>
      </div>

      {/* Brand footer */}
      <div style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D4AA' }} />
        <p style={{ color: '#333', fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>ADS ARCHITECT</p>
      </div>
    </div>
  );
}
