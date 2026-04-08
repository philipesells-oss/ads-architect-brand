'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

interface DownloadButtonProps {
  postId: string;
  format: '1:1' | '9:16';
}

export function DownloadButton({ postId, format }: DownloadButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  async function handleDownload() {
    setStatus('loading');
    try {
      const html2canvas = (await import('html2canvas')).default;
      const el = document.getElementById('post-export');
      if (!el) return;

      const canvas = await html2canvas(el, {
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0A0A0A',
        width: format === '9:16' ? 1080 : 1080,
        height: format === '9:16' ? 1920 : 1080,
      });

      const link = document.createElement('a');
      link.download = `ads-architect-post-${postId}-${format.replace(':', 'x')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setStatus('idle');
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={status === 'loading'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: '#00D4AA',
        color: '#0A0A0A',
        border: 'none',
        borderRadius: 10,
        padding: '14px 32px',
        fontSize: 15,
        fontWeight: 700,
        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        opacity: status === 'loading' ? 0.7 : 1,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {status === 'loading' ? (
        <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
      ) : (
        <Download size={18} />
      )}
      {status === 'loading' ? 'Generating...' : `Download PNG (${format})`}
    </button>
  );
}
