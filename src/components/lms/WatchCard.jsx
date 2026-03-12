import React from 'react';
import { Film } from 'lucide-react';

export default function WatchCard({ section }) {
  const embedUrl = `https://www.youtube.com/embed/${section.videoId}?start=${section.startTime || 0}&rel=0&modestbranding=1`;

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      {/* Card Header */}
      <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(55,65,81,0.6)' }}>
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4" style={{ color: '#94A3B8' }} />
          <span className="text-xs font-mono font-medium tracking-wider" style={{ color: '#94A3B8' }}>
            🎥 {section.title || 'WATCH'}
          </span>
        </div>
        {section.timestampLabel && (
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(59,130,246,0.12)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.25)' }}
          >
            {section.timestampLabel}
          </span>
        )}
      </div>

      {/* Video Embed */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={section.title || 'Video'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Focus Text */}
      {section.focusText && (
        <div className="px-5 py-3" style={{ borderTop: '1px solid rgba(55,65,81,0.4)' }}>
          <p className="text-xs italic" style={{ color: '#6B7280' }}>{section.focusText}</p>
        </div>
      )}
    </div>
  );
}