export function Post2AcquisitionStack() {
  const layers = [
    { label: 'Paid Traffic Channels', sub: 'Meta · Google · TikTok' },
    { label: 'Conversion Tracking', sub: 'Pixel · CRM · Events' },
    { label: 'Booking Automation', sub: 'Sequences · WhatsApp · Reminders' },
    { label: 'Predictable Revenue', sub: 'Cost Per Booking Optimized', highlight: true },
  ];

  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        background: '#0A0A0A',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 120px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div style={{ alignSelf: 'flex-start', marginBottom: 64 }}>
        <p style={{ color: '#A1A1AA', fontSize: 13, fontWeight: 600, letterSpacing: 4, margin: 0, marginBottom: 12, textTransform: 'uppercase' }}>
          The Framework
        </p>
        <h2 style={{ color: '#FAFAFA', fontSize: 44, fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
          Your Acquisition<br />Stack™
        </h2>
      </div>

      {/* Stack */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        {layers.map((layer, i) => (
          <div key={i} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '100%',
                background: layer.highlight ? 'rgba(0,212,170,0.08)' : '#111111',
                border: layer.highlight ? '1.5px solid #00D4AA' : '1px solid #1E1E1E',
                borderRadius: 12,
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: layer.highlight ? '0 0 40px rgba(0,212,170,0.12)' : 'none',
              }}
            >
              <div>
                <p style={{ color: layer.highlight ? '#00D4AA' : '#FAFAFA', fontSize: 20, fontWeight: 700, margin: 0, marginBottom: 4 }}>
                  {layer.label}
                </p>
                <p style={{ color: '#A1A1AA', fontSize: 14, margin: 0 }}>{layer.sub}</p>
              </div>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: layer.highlight ? '#00D4AA' : 'rgba(0,212,170,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: layer.highlight ? '#0A0A0A' : '#00D4AA', fontSize: 16, fontWeight: 700 }}>{i + 1}</span>
              </div>
            </div>
            {i < layers.length - 1 && (
              <div style={{ width: 2, height: 24, background: 'linear-gradient(to bottom, #00D4AA, rgba(0,212,170,0.2))' }} />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p style={{ color: '#A1A1AA', fontSize: 14, margin: 0, marginTop: 48, alignSelf: 'center', textAlign: 'center' }}>
        Most agencies stop at layer 1. We build all four. —{' '}
        <span style={{ color: '#FAFAFA', fontWeight: 600 }}>ADS ARCHITECT</span>
      </p>
    </div>
  );
}
