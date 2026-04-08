export function Post7WhatsApp() {
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
      {/* Top teal accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#00D4AA' }} />

      {/* WhatsApp icon */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '3px solid #00D4AA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 48,
          position: 'relative',
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"
            fill="#00D4AA"
          />
        </svg>
        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: -8,
            right: -8,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: '#00D4AA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#0A0A0A', fontSize: 16, fontWeight: 700 }}>✓</span>
        </div>
      </div>

      {/* Main metric */}
      <p
        style={{
          color: '#00D4AA',
          fontSize: 120,
          fontWeight: 700,
          fontFamily: 'JetBrains Mono, monospace',
          margin: 0,
          lineHeight: 1,
        }}
      >
        200+
      </p>
      <p style={{ color: '#FAFAFA', fontSize: 28, fontWeight: 600, margin: 0, marginTop: 16 }}>
        Reservations Confirmed
      </p>
      <p style={{ color: '#A1A1AA', fontSize: 16, margin: 0, marginTop: 8 }}>Via WhatsApp Automation · Zero Manual Work</p>

      {/* Stats row */}
      <div
        style={{
          display: 'flex',
          gap: 24,
          marginTop: 64,
        }}
      >
        {[
          { value: '87%', label: 'Open Rate', accent: false },
          { value: '94%', label: 'Confirmation Rate', accent: true },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: '#111111',
              border: `1px solid ${stat.accent ? 'rgba(0,212,170,0.3)' : '#1E1E1E'}`,
              borderRadius: 12,
              padding: '28px 48px',
              textAlign: 'center',
              minWidth: 200,
            }}
          >
            <p
              style={{
                color: stat.accent ? '#00D4AA' : '#FAFAFA',
                fontSize: 56,
                fontWeight: 700,
                fontFamily: 'JetBrains Mono, monospace',
                margin: 0,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </p>
            <p style={{ color: '#A1A1AA', fontSize: 14, margin: 0, marginTop: 8 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 48,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 64px',
        }}
      >
        <p style={{ color: '#A1A1AA', fontSize: 14, margin: 0 }}>No-code automation. Real results.</p>
        <p style={{ color: '#333', fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', margin: 0 }}>ADS ARCHITECT</p>
      </div>
    </div>
  );
}
