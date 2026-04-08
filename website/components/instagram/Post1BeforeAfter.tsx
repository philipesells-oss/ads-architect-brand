export function Post1BeforeAfter() {
  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        background: '#0A0A0A',
        position: 'relative',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Top teal accent */}
      <div style={{ width: '100%', height: 4, background: '#00D4AA' }} />

      {/* BEFORE half */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <p style={{ color: '#A1A1AA', fontSize: 28, fontWeight: 700, letterSpacing: 6, marginBottom: 24, marginTop: 0 }}>
          BEFORE
        </p>
        <div
          style={{
            background: '#111111',
            width: 320,
            height: 160,
            borderRadius: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 8, height: '100%', background: '#D43F3F' }} />
          <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0, marginBottom: 8 }}>Cost Per Booking</p>
          <p style={{ color: '#FAFAFA', fontSize: 80, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0, lineHeight: 1 }}>
            $347
          </p>
        </div>
      </div>

      {/* Center dashed divider */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 40,
          bottom: 80,
          width: 2,
          borderLeft: '2px dashed #00D4AA',
          transform: 'translateX(-50%)',
          opacity: 0.5,
        }}
      />

      {/* Horizontal divider */}
      <div style={{ width: '100%', height: 1, background: '#1A1A1A' }} />

      {/* AFTER half */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: '#111111',
            width: 320,
            height: 160,
            borderRadius: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(0,212,170,0.3)',
          }}
        >
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 8, height: '100%', background: '#00D4AA' }} />
          <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0, marginBottom: 8 }}>Cost Per Booking</p>
          <p style={{ color: '#00D4AA', fontSize: 80, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', margin: 0, lineHeight: 1 }}>
            $127
          </p>
        </div>
        <p style={{ color: '#00D4AA', fontSize: 28, fontWeight: 700, letterSpacing: 6, marginTop: 24, marginBottom: 0 }}>
          AFTER
        </p>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 48,
          paddingRight: 48,
          borderTop: '1px solid #1A1A1A',
        }}
      >
        <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0 }}>63% reduction in 90 days · Bali Resort</p>
        <p style={{ color: '#FAFAFA', fontSize: 14, fontWeight: 700, margin: 0, letterSpacing: 1 }}>ADS ARCHITECT</p>
      </div>
    </div>
  );
}
