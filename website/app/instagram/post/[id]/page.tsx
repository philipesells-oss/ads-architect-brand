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

const posts: Record<string, React.ComponentType> = {
  '1': Post1BeforeAfter,
  '2': Post2AcquisitionStack,
  '3': Post3QuoteCard,
  '4': Post4ReelWhyAds,
  '5': Post5GapAnalysis,
  '6': Post6ReelSprint,
  '7': Post7WhatsApp,
  '8': Post8ReelCPB,
  '9': Post9ROASvsCPB,
  '10': Post10ReelBali,
};

export function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const Component = posts[params.id];
  if (!Component) return <div>Post not found</div>;

  return (
    <div
      style={{
        background: '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '40px 20px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Nav */}
      <div style={{ width: '100%', maxWidth: 1200, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
        <a href="/instagram" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          ← Back to gallery
        </a>
        <p style={{ color: '#A1A1AA', fontSize: 13, margin: 0 }}>
          Post {params.id} · Right-click image → Save / DevTools → Capture node screenshot
        </p>
      </div>

      {/* Full-size post — rendered at actual Instagram resolution */}
      <div id="post-export" style={{ display: 'inline-block', lineHeight: 0 }}>
        <Component />
      </div>
    </div>
  );
}
