import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown } from 'lucide-react';
import CalloutBox from './CalloutBox';

export default function ChecklistCard({ section }) {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const items = section.items || [];

  const toggle = (i) => {
    setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const allChecked = checked.length === items.length;

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.5)' }}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#10B981' }}>
            ☑ CHECKLIST
          </p>
          <span className="text-xs" style={{ color: allChecked ? '#10B981' : '#6B7280' }}>
            {checked.length}/{items.length} checked
          </span>
        </div>
        {section.title && (
          <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>
        )}
        {section.intro && (
          <p className="text-sm mt-1" style={{ color: '#6B7280' }}>{section.intro}</p>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-1" style={{ background: 'rgba(55,65,81,0.4)' }}>
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${(checked.length / items.length) * 100}%`, background: '#10B981' }}
        />
      </div>

      <div className="divide-y" style={{ borderColor: 'rgba(55,65,81,0.3)' }}>
        {items.map((item, i) => {
          const isChecked = checked.includes(i);
          const isExpanded = expanded === i;
          return (
            <div key={i} style={{ background: isChecked ? 'rgba(16,185,129,0.04)' : 'transparent' }}>
              <div className="flex items-start gap-3 px-5 py-3.5">
                <button onClick={() => toggle(i)} className="flex-shrink-0 mt-0.5">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} />
                  ) : (
                    <Circle className="w-5 h-5" style={{ color: '#4B5563' }} />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: isChecked ? '#6EE7B7' : '#CBD5E1',
                      textDecoration: isChecked ? 'line-through' : 'none',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
                {item.detail && (
                  <button
                    onClick={() => setExpanded(isExpanded ? null : i)}
                    className="flex-shrink-0 p-1"
                  >
                    <ChevronDown
                      className="w-4 h-4 transition-transform"
                      style={{ color: '#4B5563', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}
                    />
                  </button>
                )}
              </div>
              {isExpanded && item.detail && (
                <div className="px-5 pb-4 ml-8">
                  <p className="text-sm" style={{ color: '#6B7280' }}>{item.detail}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {section.callout && (
        <div className="p-4" style={{ borderTop: '1px solid rgba(55,65,81,0.3)' }}>
          <CalloutBox {...section.callout} />
        </div>
      )}
    </div>
  );
}