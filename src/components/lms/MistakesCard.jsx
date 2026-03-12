import React, { useState } from 'react';
import { XCircle, ChevronDown } from 'lucide-react';

export default function MistakesCard({ section }) {
  const [expanded, setExpanded] = useState(null);
  const items = section.items || [];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(239,68,68,0.25)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(239,68,68,0.2)' }}>
        <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#EF4444' }}>
          🚫 COMMON MISTAKES
        </p>
        {section.title && (
          <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>
        )}
      </div>

      <div className="divide-y" style={{ borderColor: 'rgba(239,68,68,0.15)' }}>
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-start gap-3 px-5 py-4 text-left transition-all"
              style={{ background: expanded === i ? 'rgba(239,68,68,0.05)' : 'transparent' }}
            >
              <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium" style={{ color: '#FCA5A5' }}>{item.mistake}</p>
              </div>
              <ChevronDown
                className="w-4 h-4 flex-shrink-0 transition-transform"
                style={{ color: '#4B5563', transform: expanded === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            {expanded === i && (
              <div
                className="px-5 pb-4 ml-7"
                style={{ background: 'rgba(239,68,68,0.04)' }}
              >
                <p className="text-xs font-semibold mb-1" style={{ color: '#6B7280' }}>CONSEQUENCE</p>
                <p className="text-sm" style={{ color: '#94A3B8' }}>{item.consequence}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}