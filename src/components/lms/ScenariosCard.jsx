import React, { useState } from 'react';

export default function ScenariosCard({ section }) {
  const [active, setActive] = useState(null);
  const scenarios = section.scenarios || [];

  const statusColors = {
    pass: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.3)', activeBg: 'rgba(16,185,129,0.12)', text: '#34D399' },
    warn: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.3)', activeBg: 'rgba(245,158,11,0.12)', text: '#FCD34D' },
    fail: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.3)', activeBg: 'rgba(239,68,68,0.12)', text: '#FCA5A5' },
  };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.5)' }}>
        <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#F59E0B' }}>
          🔀 SCENARIOS
        </p>
        {section.title && (
          <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>
        )}
        {section.intro && (
          <p className="text-sm mt-1" style={{ color: '#6B7280' }}>{section.intro}</p>
        )}
      </div>

      <div className="p-5 space-y-3">
        {scenarios.map((s, i) => {
          const colors = statusColors[s.status] || statusColors.pass;
          const isActive = active === i;
          return (
            <div key={i}>
              <button
                onClick={() => setActive(isActive ? null : i)}
                className="w-full text-left rounded-xl p-4 transition-all"
                style={{
                  background: isActive ? colors.activeBg : colors.bg,
                  border: `1px solid ${isActive ? colors.text + '50' : colors.border}`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: colors.text }}>{s.condition}</p>
                    {!isActive && (
                      <p className="text-xs mt-0.5" style={{ color: '#6B7280' }}>Click to see what it means and what to do</p>
                    )}
                  </div>
                  <span className="text-xs" style={{ color: '#4B5563' }}>{isActive ? '▲' : '▼'}</span>
                </div>

                {isActive && (
                  <div className="mt-4 pt-4 space-y-3" style={{ borderTop: `1px solid ${colors.border}` }}>
                    <div>
                      <p className="text-xs font-semibold mb-1" style={{ color: '#6B7280' }}>WHAT THIS MEANS</p>
                      <p className="text-sm" style={{ color: '#CBD5E1' }}>{s.meaning}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-1" style={{ color: '#6B7280' }}>WHAT TO DO</p>
                      <p className="text-sm font-medium" style={{ color: colors.text }}>{s.action}</p>
                    </div>
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}