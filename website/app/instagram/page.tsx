import { Post1BeforeAfter } from '@/components/instagram/Post1BeforeAfter';
import { Post2AcquisitionStack } from '@/components/instagram/Post2AcquisitionStack';
import { Post3QuoteCard } from '@/components/instagram/Post3QuoteCard';
import { Post4ReelWhyAds } from '@/components/instagram/Post4ReelWhyAds';
import { Post5GapAnalysis } from '@/components/instagram/Post5GapAnalysis';
import { Post6ReelSprint } from '@/components/instagram/Post6ReelSprint';
import { Post7WhatsApp } from '@/components/instagram/Post7WhatsApp';
import { Post8ReelCPB } from '@/components/instagram/Post8ReelCPB';
import { Post9ROASvsCPB } from '@/components/instagram/Post9ROASvsCP';
import { Post10ReelBali } from '@/components/instagram/Post10ReelBali';

const posts = [
  { id: 1, format: '1:1', pillar: 'Results', title: 'Before/After Metrics Card', component: Post1BeforeAfter, scale: 1080 },
  { id: 2, format: '1:1', pillar: 'Education', title: 'Acquisition Stack™ Diagram', component: Post2AcquisitionStack, scale: 1080 },
  { id: 3, format: '1:1', pillar: 'POV', title: 'Quote Card — Reports vs Reservations', component: Post3QuoteCard, scale: 1080 },
  { id: 4, format: '9:16', pillar: 'Education', title: 'Reel Cover — Why Your Ads Aren\'t Working', component: Post4ReelWhyAds, scale: 1920 },
  { id: 5, format: '1:1', pillar: 'Education', title: '3 Critical Gaps Analysis', component: Post5GapAnalysis, scale: 1080 },
  { id: 6, format: '9:16', pillar: 'Behind the Build', title: 'Reel Cover — Acquisition Sprint 14 Days', component: Post6ReelSprint, scale: 1920 },
  { id: 7, format: '1:1', pillar: 'Results', title: 'WhatsApp Automation — 200+ Reservations', component: Post7WhatsApp, scale: 1080 },
  { id: 8, format: '9:16', pillar: 'Results', title: 'Reel Cover — CPB $127 → $48', component: Post8ReelCPB, scale: 1920 },
  { id: 9, format: '1:1', pillar: 'Education', title: 'ROAS vs Cost Per Booking', component: Post9ROASvsCPB, scale: 1080 },
  { id: 10, format: '9:16', pillar: 'POV', title: 'Reel Cover — Built in Bali, Trusted Worldwide', component: Post10ReelBali, scale: 1920 },
];

const pillarColors: Record<string, string> = {
  Results: '#00D4AA',
  Education: '#6366F1',
  'POV': '#F59E0B',
  'Behind the Build': '#EC4899',
};

export default function InstagramPage() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div
        style={{
          borderBottom: '1px solid #1A1A1A',
          padding: '32px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          background: '#050505',
          zIndex: 100,
        }}
      >
        <div>
          <h1 style={{ color: '#FAFAFA', fontSize: 24, fontWeight: 700, margin: 0 }}>
            ADS ARCHITECT
          </h1>
          <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0, marginTop: 4 }}>
            Instagram Content — 10 Posts · 1:1 + 9:16
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          {['Results', 'Education', 'POV', 'Behind the Build'].map((pillar) => (
            <span
              key={pillar}
              style={{
                background: `${pillarColors[pillar]}15`,
                border: `1px solid ${pillarColors[pillar]}40`,
                color: pillarColors[pillar],
                borderRadius: 100,
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {pillar}
            </span>
          ))}
        </div>
      </div>

      {/* How to export */}
      <div
        style={{
          margin: '40px 60px',
          background: '#111111',
          border: '1px solid #1E1E1E',
          borderLeft: '4px solid #00D4AA',
          borderRadius: 10,
          padding: '20px 28px',
        }}
      >
        <p style={{ color: '#FAFAFA', fontSize: 14, fontWeight: 600, margin: 0, marginBottom: 8 }}>
          📸 How to export each post as an image
        </p>
        <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0, lineHeight: 1.6 }}>
          1. Click on any post to open it full-size (1080×1080 or 1080×1920). &nbsp;·&nbsp;
          2. Right-click → &quot;Save image&quot;, or use browser DevTools → Inspector → right-click element → &quot;Capture node screenshot&quot;. &nbsp;·&nbsp;
          3. For pixel-perfect export, use{' '}
          <code style={{ background: '#1A1A1A', padding: '2px 6px', borderRadius: 4, color: '#00D4AA' }}>
            ?download=1
          </code>{' '}
          on any individual post URL (e.g. <code style={{ background: '#1A1A1A', padding: '2px 6px', borderRadius: 4, color: '#00D4AA' }}>/instagram/post/1</code>).
        </p>
      </div>

      {/* Posts grid */}
      <div
        style={{
          padding: '0 60px 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 32,
        }}
      >
        {posts.map((post) => {
          const Component = post.component;
          const isReel = post.format === '9:16';
          const containerW = isReel ? 270 : 320;
          const containerH = isReel ? 480 : 320;
          const scaleX = containerW / 1080;
          const scaleY = containerH / (isReel ? 1920 : 1080);
          const scale = Math.min(scaleX, scaleY);

          return (
            <a
              key={post.id}
              href={`/instagram/post/${post.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: '#0D0D0D',
                  border: '1px solid #1A1A1A',
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Preview window */}
                <div
                  style={{
                    width: '100%',
                    height: isReel ? 420 : 320,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#080808',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      transformOrigin: 'top left',
                      transform: `scale(${scale})`,
                      position: 'absolute',
                      top: isReel ? '50%' : '50%',
                      left: '50%',
                      marginLeft: -(1080 * scale) / 2,
                      marginTop: -(isReel ? 1920 : 1080) * scale / 2,
                    }}
                  >
                    <Component />
                  </div>
                </div>

                {/* Meta */}
                <div style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span
                      style={{
                        background: `${pillarColors[post.pillar]}15`,
                        border: `1px solid ${pillarColors[post.pillar]}40`,
                        color: pillarColors[post.pillar],
                        borderRadius: 100,
                        padding: '3px 10px',
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {post.pillar}
                    </span>
                    <span
                      style={{
                        background: '#1A1A1A',
                        color: '#A1A1AA',
                        borderRadius: 100,
                        padding: '3px 10px',
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {post.format}
                    </span>
                  </div>
                  <p style={{ color: '#FAFAFA', fontSize: 13, fontWeight: 600, margin: 0 }}>
                    Post {post.id} — {post.title}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
