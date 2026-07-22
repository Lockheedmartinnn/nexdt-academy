import React from 'react';

const IMG1 = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/e7ff53d15_unnamed-2.png';
const IMG2 = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/ad7a723ac_unnamed-3.png';
const IMG3 = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/2092558be_unnamed.png';

export { IMG1, IMG2, IMG3 };

/**
 * Renders a cropped region of an infographic inside a browser-chrome frame.
 *
 * crop: { imageWidth: '150%', marginTop: -80, marginLeft: -200 }
 * containerHeight: number (px)
 */
export default function InfographicCard({ section }) {
  const { imageUrl, crop, containerHeight = 260, caption, label } = section;

  return (
    <div className="rounded-xl overflow-hidden w-full" style={{ background: '#0A0E1A', border: '1px solid rgba(55,65,81,0.5)' }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: 'rgba(17,24,39,0.95)', borderBottom: '1px solid rgba(55,65,81,0.35)' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F59E0B' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#10B981' }} />
        <div className="flex-1 mx-2 rounded px-2 py-0.5 text-xs font-mono" style={{ background: 'rgba(30,41,59,0.6)', color: '#4B5563' }}>
          {label || 'NexDT — Platform Reference'}
        </div>
      </div>

      {/* Image (or a clean labelled frame until a screenshot URL is provided) */}
      {imageUrl ? (
        <div style={{ background: '#fff', padding: '0' }}>
          <img
            src={imageUrl}
            alt={`${label ? label + ' — ' : ''}${caption || 'NexDT reference diagram'}`}
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1.5" style={{ minHeight: 150, background: 'rgba(17,24,39,0.6)' }}>
          <span className="text-xs font-mono tracking-widest" style={{ color: '#60A5FA' }}>NexDT SCREEN</span>
          <span className="text-sm" style={{ color: '#CBD5E1' }}>{label || caption || 'Screenshot'}</span>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className="px-4 py-2.5" style={{ borderTop: '1px solid rgba(55,65,81,0.3)', background: 'rgba(17,24,39,0.7)' }}>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            <span className="font-mono text-xs mr-1.5" style={{ color: '#374151' }}>▶</span>
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}