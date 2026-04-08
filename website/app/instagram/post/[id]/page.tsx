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
import { DownloadButton } from '@/components/instagram/DownloadButton';

const posts: Record<string, { component: React.ComponentType; format: '1:1' | '9:16'; title: string }> = {
  '1':  { component: Post1BeforeAfter,    format: '1:1',  title: 'Before/After Metrics Card' },
  '2':  { component: Post2AcquisitionStack, format: '1:1', title: 'Acquisition Stack™ Diagram' },
  '3':  { component: Post3QuoteCard,      format: '1:1',  title: 'Quote Card — Reports vs Reservations' },
  '4':  { component: Post4ReelWhyAds,     format: '9:16', title: 'Reel — Why Your Ads Aren\'t Working' },
  '5':  { component: Post5GapAnalysis,    format: '1:1',  title: '3 Critical Gaps Analysis' },
  '6':  { component: Post6ReelSprint,     format: '9:16', title: 'Reel — Acquisition Sprint 14 Days' },
  '7':  { component: Post7WhatsApp,       format: '1:1',  title: 'WhatsApp Automation — 200+ Reservations' },
  '8':  { component: Post8ReelCPB,        format: '9:16', title: 'Reel — CPB $127→$48 Case Study' },
  '9':  { component: Post9ROASvsCPB,      format: '1:1',  title: 'ROAS vs Cost Per Booking' },
  '10': { component: Post10ReelBali,      format: '9:16', title: 'Reel — Built in Bali, Trusted Worldwide' },
};

export function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts[params.id];
  if (!post) return <div>Post not found</div>;
  const Component = post.component;

  return (
    <div style={{ background: '#050505', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: 60 }}>
      {/* Nav bar */}
      <div style={{
        padding: '20px 40px',
        borderBottom: '1px solid #1A1A1A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#050505',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <a href="/instagram" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          ← Gallery
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: '#A1A1AA', fontSize: 13 }}>Post {params.id} · {post.format} · {post.title}</span>
          <DownloadButton postId={params.id} format={post.format} />
        </div>
      </div>

      {/* Post rendered at full resolution */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 48, paddingBottom: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <div id="post-export" style={{ display: 'inline-block', lineHeight: 0, boxShadow: '0 0 80px rgba(0,212,170,0.08)' }}>
            <Component />
          </div>
          {/* Download button below post too */}
          <DownloadButton postId={params.id} format={post.format} />
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
