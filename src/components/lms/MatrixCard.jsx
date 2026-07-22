import React from 'react';

// Colour-codes a permission cell value: R (read), W (write), R/W, or — (none)
function cellStyle(v) {
  const t = (v || '').trim();
  if (t === '' || t === '—' || t === '-') return { bg: 'transparent', color: '#4B5563', border: '1px solid rgba(55,65,81,0.35)' };
  if (t.startsWith('R/W')) return { bg: 'rgba(139,92,246,0.16)', color: '#C4B5FD', border: '1px solid rgba(139,92,246,0.35)' };
  if (t.startsWith('W')) return { bg: 'rgba(59,130,246,0.16)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.35)' };
  if (t.startsWith('R')) return { bg: 'rgba(16,185,129,0.14)', color: '#6EE7B7', border: '1px solid rgba(16,185,129,0.3)' };
  return { bg: 'rgba(30,41,59,0.5)', color: '#CBD5E1', border: '1px solid rgba(55,65,81,0.4)' };
}

export default function MatrixCard({ section }) {
  const cols = section.columns || [];
  const rows = section.rows || [];
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.5)' }}>
        <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#94A3B8' }}>🔑 PERMISSION MATRIX</p>
        {section.title && <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>}
        {section.legend && <p className="text-xs mt-2" style={{ color: '#6B7280' }}>{section.legend}</p>}
      </div>
      <div className="px-3 py-3 overflow-x-auto">
        <table className="w-full text-xs" style={{ borderCollapse: 'separate', borderSpacing: '3px' }}>
          <thead>
            <tr>
              {cols.map((c, i) => (
                <th
                  key={i}
                  className="px-2 py-2 whitespace-nowrap"
                  style={{
                    textAlign: i === 0 ? 'left' : 'center',
                    color: i === 0 ? '#94A3B8' : '#F9FAFB',
                    fontWeight: 600,
                    position: i === 0 ? 'sticky' : 'static',
                    left: 0,
                    background: '#111827',
                  }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>
                {r.map((v, ci) => {
                  if (ci === 0) {
                    return (
                      <td
                        key={ci}
                        className="px-2 py-1.5 whitespace-nowrap"
                        style={{ color: '#E2E8F0', fontWeight: 500, position: 'sticky', left: 0, background: '#111827' }}
                      >
                        {v}
                      </td>
                    );
                  }
                  const s = cellStyle(v);
                  return (
                    <td
                      key={ci}
                      className="px-2 py-1.5 text-center rounded-md"
                      style={{ background: s.bg, color: s.color, border: s.border, fontWeight: 600, whiteSpace: 'nowrap' }}
                    >
                      {v}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
