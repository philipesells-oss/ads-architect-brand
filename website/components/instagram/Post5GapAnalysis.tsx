export function Post5GapAnalysis() {
  const gaps = [
    {
      num: '1',
      title: 'Ad Stack Fragmentation',
      desc: "Your ads, pixels, and CRM aren't connected.",
    },
    {
      num: '2',
      title: 'No Booking Automations',
      desc: 'Lost leads because no follow-up sequence exists.',
    },
    {
      num: '3',
      title: 'Wrong Metrics',
      desc: "You're optimizing for clicks instead of bookings.",
    },
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
        padding: '72px 80px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 60 }}>
        <p style={{ color: '#A1A1AA', fontSize: 13, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', margin: 0, marginBottom: 14 }}>
          Acquisition Audit
        </p>
        <h2 style={{ color: '#00D4AA', fontSize: 48, fontWeight: 700, margin: 0 }}>3 Critical Gaps</h2>
        <p style={{ color: '#A1A1AA', fontSize: 16, margin: 0, marginTop: 8 }}>
          Sabotaging your acquisition system right now
        </p>
      </div>

      {/* Gap cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
        {gaps.map((gap, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                background: '#111111',
                border: '1px solid #1E1E1E',
                borderLeft: '6px solid #00D4AA',
                borderRadius: 12,
                padding: '28px 36px',
                display: 'flex',
                alignItems: 'center',
                gap: 32,
              }}
            >
              <span
                style={{
                  color: '#00D4AA',
                  fontSize: 64,
                  fontWeight: 700,
                  fontFamily: 'JetBrains Mono, monospace',
                  lineHeight: 1,
                  flexShrink: 0,
                  width: 56,
                }}
              >
                {gap.num}
              </span>
              <div>
                <p style={{ color: '#FAFAFA', fontSize: 22, fontWeight: 700, margin: 0, marginBottom: 6 }}>
                  {gap.title}
                </p>
                <p style={{ color: '#A1A1AA', fontSize: 15, margin: 0 }}>{gap.desc}</p>
              </div>
            </div>
            {i < gaps.length - 1 && (
              <div style={{ width: 3, height: 28, background: 'linear-gradient(to bottom, #00D4AA, rgba(0,212,170,0.1))', marginLeft: 79 }} />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 48,
          paddingTop: 32,
          borderTop: '1px solid #1A1A1A',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ color: '#00D4AA', fontSize: 18, fontWeight: 600, margin: 0 }}>
          We close all three. Together.
        </p>
        <p style={{ color: '#333', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', margin: 0 }}>
          ADS ARCHITECT
        </p>
      </div>
    </div>
  );
}
