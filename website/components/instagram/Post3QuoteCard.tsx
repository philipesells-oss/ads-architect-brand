export function Post3QuoteCard() {
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 59px, #111111 59px, #111111 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, #111111 59px, #111111 60px)',
          opacity: 0.4,
        }}
      />

      {/* Corner accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 120, height: 4, background: '#00D4AA' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: 120, background: '#00D4AA' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 120, height: 4, background: '#00D4AA' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 4, height: 120, background: '#00D4AA' }} />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 100px' }}>
        {/* Opening quote mark */}
        <p style={{ color: 'rgba(0,212,170,0.2)', fontSize: 160, fontWeight: 700, margin: 0, lineHeight: 1, marginBottom: -40 }}>"</p>

        <h2 style={{ color: '#FAFAFA', fontSize: 56, fontWeight: 700, margin: 0, lineHeight: 1.15, marginBottom: 0 }}>
          Most agencies<br />deliver reports.
        </h2>

        {/* Divider */}
        <div style={{ width: 80, height: 3, background: '#00D4AA', margin: '40px auto' }} />

        <h2 style={{ color: '#00D4AA', fontSize: 56, fontWeight: 700, margin: 0, lineHeight: 1.15 }}>
          We deliver<br />reservations.
        </h2>
      </div>

      {/* Bottom badge */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: '#111111',
          border: '1px solid #1E1E1E',
          borderRadius: 100,
          padding: '12px 28px',
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00D4AA' }} />
        <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0, letterSpacing: 2, textTransform: 'uppercase' }}>
          14-Day Results Guarantee
        </p>
      </div>

      {/* Brand */}
      <p style={{ position: 'absolute', bottom: 28, right: 48, color: '#333', fontSize: 12, fontWeight: 600, letterSpacing: 2, margin: 0, textTransform: 'uppercase' }}>
        ADS ARCHITECT
      </p>
    </div>
  );
}
