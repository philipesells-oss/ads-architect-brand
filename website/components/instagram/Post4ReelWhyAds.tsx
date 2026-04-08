export function Post4ReelWhyAds() {
  const problems = [
    'High CPM, Low Conversions',
    'Clicks But No Bookings',
    'No Follow-up System',
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
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Top teal bar */}
      <div style={{ width: '100%', height: 6, background: '#00D4AA', flexShrink: 0 }} />

      {/* Headline */}
      <div style={{ marginTop: 140, textAlign: 'center', padding: '0 80px' }}>
        <p style={{ color: '#A1A1AA', fontSize: 16, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', margin: 0, marginBottom: 32 }}>
          The Real Problem
        </p>
        <h1
          style={{
            color: '#FAFAFA',
            fontSize: 76,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Why Your<br />Ads Aren&apos;t<br />Filling Your<br />Calendar
        </h1>
      </div>

      {/* Large teal question mark */}
      <div
        style={{
          marginTop: 100,
          width: 240,
          height: 240,
          borderRadius: '50%',
          border: '3px solid rgba(0,212,170,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#00D4AA', fontSize: 140, fontWeight: 700, lineHeight: 1, marginTop: -10 }}>?</span>
      </div>

      {/* Problem list */}
      <div style={{ marginTop: 100, padding: '0 100px', width: '100%', boxSizing: 'border-box' }}>
        {problems.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: i < problems.length - 1 ? 44 : 0 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#D43F3F', flexShrink: 0 }} />
            <p style={{ color: '#FAFAFA', fontSize: 28, margin: 0, fontWeight: 500 }}>{p}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ width: 600, height: 1, background: '#1E1E1E', marginTop: 100 }} />

      {/* CTA */}
      <div style={{ marginTop: 80, textAlign: 'center' }}>
        <div
          style={{
            background: '#00D4AA',
            borderRadius: 12,
            padding: '24px 60px',
            display: 'inline-block',
          }}
        >
          <p style={{ color: '#0A0A0A', fontSize: 22, fontWeight: 700, margin: 0 }}>
            Watch the Full Breakdown →
          </p>
        </div>
        <p style={{ color: '#A1A1AA', fontSize: 16, marginTop: 24 }}>
          Free audit · No commitment · adsarchitect.agency
        </p>
      </div>

      {/* Brand footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00D4AA' }} />
        <p style={{ color: '#333', fontSize: 14, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>
          ADS ARCHITECT
        </p>
      </div>
    </div>
  );
}
