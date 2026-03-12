import React from 'react';
import { Target } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ObjectiveCard({ section }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.2)' }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(59,130,246,0.15)' }}
        >
          <Target className="w-4 h-4" style={{ color: '#60A5FA' }} />
        </div>
        <div className="flex-1">
          <p className="text-xs font-mono font-medium tracking-wider mb-2" style={{ color: '#60A5FA' }}>
            🎯 LEARNING OBJECTIVE
          </p>
          <p className="text-sm mb-3" style={{ color: '#94A3B8' }}>{section.intro}</p>
          {section.outcomes && (
            <ul className="space-y-2">
              {section.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#CBD5E1' }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3B82F6' }} />
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <span>{children}</span>,
                      strong: ({ children }) => <strong style={{ color: '#F9FAFB', fontWeight: 600 }}>{children}</strong>,
                    }}
                  >
                    {outcome}
                  </ReactMarkdown>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}