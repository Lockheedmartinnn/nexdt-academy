import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CalloutBox from './CalloutBox';

function BulletText({ text }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <span>{children}</span>,
        strong: ({ children }) => (
          <strong style={{ color: '#F9FAFB', fontWeight: 600 }}>{children}</strong>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

function SplitComparisonCard({ section }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)', borderLeft: '4px solid #3B82F6' }}>
      <div className="px-5 py-5">
        <p className="text-xs font-mono font-medium tracking-wider mb-4" style={{ color: '#3B82F6' }}>
          📘 {section.title}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {section.columns?.map((col, i) => (
            <div key={i} className="rounded-lg p-4" style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(55,65,81,0.6)' }}>
              <h4 className="font-bold text-lg mb-1" style={{ color: col.color }}>{col.header}</h4>
              <p className="text-xs italic mb-3" style={{ color: '#94A3B8' }}>{col.question}</p>
              <ul className="space-y-2">
                {col.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#94A3B8' }}>
                    <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: '#4B5563' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpecTableCard({ section }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)', borderLeft: '4px solid #3B82F6' }}>
      <div className="px-5 py-5">
        <p className="text-xs font-mono font-medium tracking-wider mb-4" style={{ color: '#3B82F6' }}>
          📘 {section.title}
        </p>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(55,65,81,0.6)' }}>
              <th className="text-left font-medium py-2 pr-4 w-1/3" style={{ color: '#6B7280' }}>Property</th>
              <th className="text-left font-medium py-2" style={{ color: '#6B7280' }}>Required Value</th>
            </tr>
          </thead>
          <tbody>
            {section.specRows?.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(31,41,55,0.8)' }}>
                <td className="py-2.5 pr-4 font-mono text-xs" style={{ color: '#6B7280' }}>{row.property}</td>
                <td className="py-2.5 font-medium" style={{ color: '#F9FAFB' }}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ResultGuideCard({ section }) {
  const statusStyles = {
    pass: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)' },
    borderline: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
    fail: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.25)' },
  };
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)', borderLeft: '4px solid #3B82F6' }}>
      <div className="px-5 py-5">
        <p className="text-xs font-mono font-medium tracking-wider mb-4" style={{ color: '#3B82F6' }}>
          📘 {section.title}
        </p>
        <div className="space-y-3">
          {section.results?.map((r, i) => (
            <div key={i} className="rounded-lg p-4" style={{ background: statusStyles[r.status]?.bg, border: `1px solid ${statusStyles[r.status]?.border}` }}>
              <div className="flex items-start gap-3">
                <span className="text-xl">{r.icon}</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#F9FAFB' }}>{r.label}</p>
                  <p className="text-sm mt-0.5" style={{ color: '#94A3B8' }}>{r.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabsCard({ section }) {
  const [active, setActive] = useState(0);
  const importanceLabel = { normal: null, high: { text: 'Verify before calculating', color: '#F59E0B' }, critical: { text: '← Most influential section', color: '#EF4444' } };
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)', borderLeft: '4px solid #3B82F6' }}>
      <div className="px-5 py-5">
        <p className="text-xs font-mono font-medium tracking-wider mb-4" style={{ color: '#3B82F6' }}>
          📘 {section.title}
        </p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {section.tabs?.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                background: active === i ? '#3B82F6' : 'rgba(30,41,59,0.6)',
                color: active === i ? '#fff' : '#94A3B8',
                border: `1px solid ${active === i ? '#3B82F6' : 'rgba(55,65,81,0.5)'}`,
              }}
            >
              {tab.name}
              {tab.importance === 'critical' && <span className="ml-1.5" style={{ color: '#EF4444' }}>●</span>}
              {tab.importance === 'high' && <span className="ml-1.5" style={{ color: '#F59E0B' }}>●</span>}
            </button>
          ))}
        </div>
        {section.tabs?.[active] && (
          <div className="p-4 rounded-lg" style={{ background: 'rgba(30,41,59,0.5)' }}>
            <p className="text-sm" style={{ color: '#CBD5E1' }}>{section.tabs[active].description}</p>
            {importanceLabel[section.tabs[active].importance] && (
              <p className="text-xs mt-2 font-semibold" style={{ color: importanceLabel[section.tabs[active].importance].color }}>
                {importanceLabel[section.tabs[active].importance].text}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReadCard({ section }) {
  if (section.isSplitCard) return <SplitComparisonCard section={section} />;
  if (section.isSpecTable) return <SpecTableCard section={section} />;
  if (section.isResultGuide) return <ResultGuideCard section={section} />;
  if (section.isTabs) return <TabsCard section={section} />;

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)', borderLeft: '4px solid #3B82F6' }}>
      <div className="px-5 py-5">
        {section.title && (
          <p className="text-xs font-mono font-medium tracking-wider mb-3" style={{ color: '#3B82F6' }}>
            📘 {section.title}
          </p>
        )}
        {section.intro && (
          <p className="text-sm mb-4" style={{ color: '#94A3B8' }}>{section.intro}</p>
        )}
        <ul className="space-y-3">
          {section.bullets?.map((bullet, i) => {
            const text = typeof bullet === 'string' ? bullet : bullet.text;
            const icon = typeof bullet === 'object' ? bullet.icon : null;
            return (
              <li key={i} className="flex items-start gap-3">
                {icon ? (
                  <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#3B82F6' }} />
                )}
                <span className="text-sm leading-relaxed" style={{ color: '#CBD5E1' }}>
                  <BulletText text={text} />
                </span>
              </li>
            );
          })}
        </ul>
        {section.callout && (
          <div className="mt-4">
            <CalloutBox {...section.callout} />
          </div>
        )}
      </div>
    </div>
  );
}