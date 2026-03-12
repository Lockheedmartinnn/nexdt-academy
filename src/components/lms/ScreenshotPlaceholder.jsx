import React from 'react';
import { ImageIcon } from 'lucide-react';

export default function ScreenshotPlaceholder({ label, annotations = [] }) {
  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{
        background: 'rgba(10,14,26,0.8)',
        border: '1px dashed rgba(55,65,81,0.7)',
      }}
    >
      {/* Fake browser chrome */}
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ background: 'rgba(17,24,39,0.9)', borderBottom: '1px solid rgba(55,65,81,0.4)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F59E0B' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#10B981' }} />
        <div
          className="flex-1 mx-2 rounded px-2 py-0.5 text-xs font-mono"
          style={{ background: 'rgba(30,41,59,0.6)', color: '#4B5563' }}
        >
          app.nexdt.sitesee.io
        </div>
      </div>

      {/* Placeholder content area */}
      <div className="flex flex-col items-center justify-center py-10 px-6 gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: 'rgba(55,65,81,0.3)', border: '1px solid rgba(55,65,81,0.5)' }}
        >
          <ImageIcon className="w-6 h-6" style={{ color: '#4B5563' }} />
        </div>

        <div className="text-center">
          <p
            className="text-xs font-mono font-medium tracking-widest mb-1"
            style={{ color: '#374151' }}
          >
            SCREENSHOT PLACEHOLDER
          </p>
          <p className="text-sm font-medium" style={{ color: '#6B7280' }}>
            {label}
          </p>
        </div>

        {/* Annotation badges */}
        {annotations.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mt-1">
            {annotations.map((ann, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                style={{
                  background: ann.color === 'red' ? 'rgba(239,68,68,0.15)' : 'rgba(245,158,11,0.15)',
                  color: ann.color === 'red' ? '#FCA5A5' : '#FCD34D',
                  border: `1px solid ${ann.color === 'red' ? 'rgba(239,68,68,0.3)' : 'rgba(245,158,11,0.3)'}`,
                }}
              >
                <span>{ann.color === 'red' ? '→' : '▶'}</span>
                {ann.label}
              </span>
            ))}
          </div>
        )}

        <p className="text-xs" style={{ color: '#1F2937' }}>
          Upload a real screenshot to replace this placeholder
        </p>
      </div>
    </div>
  );
}