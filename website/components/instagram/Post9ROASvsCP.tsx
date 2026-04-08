export function Post9ROASvsCPB() {
  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        background: '#0A0A0A',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        padding: '64px 80px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <p style={{ color: '#A1A1AA', fontSize: 13, fontWeight: 600, letterSpacing: 4, textTransform: 'uppercase', margin: 0, marginBottom: 12 }}>
          Metrics Breakdown
        </p>
        <h2 style={{ color: '#D43F3F', fontSize: 44, fontWeight: 700, margin: 0 }}>The Wrong Metric</h2>
      </div>

      {/* Wrong: ROAS */}
      <div
        style={{
          background: '#111111',
          border: '1px solid rgba(212,63,63,0.3)',
          borderRadius: 12,
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 36,
          marginBottom: 0,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            border: '3px solid #D43F3F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#D43F3F', fontSize: 36, fontWeight: 700, lineHeight: 1 }}>✗</span>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ color: '#D43F3F', fontSize: 36, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>ROAS</p>
          <p style={{ color: '#FAFAFA', fontSize: 17, fontWeight: 600, margin: 0, marginTop: 4 }}>Return on Ad Spend</p>
          <p style={{ color: '#A1A1AA', fontSize: 14, margin: 0, marginTop: 6 }}>
            Profit illusion — optimizing for revenue, not revenue after real cost.
          </p>
        </div>
      </div>

      {/* VS divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, margin: '32px 0' }}>
        <div style={{ flex: 1, height: 1, background: '#1E1E1E' }} />
        <div
          style={{
            background: '#111111',
            border: '1px solid #2A2A2A',
            borderRadius: 100,
            padding: '8px 24px',
          }}
        >
          <p style={{ color: '#A1A1AA', fontSize: 14, fontWeight: 700, margin: 0 }}>vs</p>
        </div>
        <div style={{ flex: 1, height: 1, background: '#1E1E1E' }} />
      </div>

      {/* Right: CPB */}
      <div
        style={{
          background: 'rgba(0,212,170,0.06)',
          border: '1.5px solid rgba(0,212,170,0.4)',
          borderRadius: 12,
          padding: '36px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 36,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            border: '3px solid #00D4AA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#00D4AA', fontSize: 36, fontWeight: 700, lineHeight: 1 }}>✓</span>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ color: '#00D4AA', fontSize: 36, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>CPB</p>
          <p style={{ color: '#FAFAFA', fontSize: 17, fontWeight: 600, margin: 0, marginTop: 4 }}>Cost Per Booking</p>
          <p style={{ color: '#A1A1AA', fontSize: 14, margin: 0, marginTop: 6 }}>
            Revenue truth — what each paying customer actually costs you.
          </p>
        </div>
      </div>

      {/* Explanation box */}
      <div
        style={{
          background: '#111111',
          border: '1px solid #1E1E1E',
          borderRadius: 12,
          padding: '28px 36px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <p style={{ color: '#A1A1AA', fontSize: 15, margin: 0, lineHeight: 1.6 }}>
          A 400% ROAS can still mean you&apos;re{' '}
          <span style={{ color: '#D43F3F', fontWeight: 600 }}>losing money</span>. A 180% ROAS can mean
          you&apos;re{' '}
          <span style={{ color: '#00D4AA', fontWeight: 600 }}>crushing it</span>. The number that
          actually tells the truth:{' '}
          <span style={{ color: '#FAFAFA', fontWeight: 600 }}>what did this booking cost you?</span>
        </p>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
        <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0 }}>adsarchitect.agency</p>
        <p style={{ color: '#333', fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', margin: 0 }}>ADS ARCHITECT</p>
      </div>
    </div>
  );
}
