import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ConceptsCard({ section }) {
  const [expanded, setExpanded] = useState(null);
  const concepts = section.concepts || [];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.5)' }}>
        <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#8B5CF6' }}>
          💡 KEY CONCEPTS
        </p>
        {section.title && (
          <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>
        )}
        {section.intro && (
          <p className="text-sm mt-1" style={{ color: '#6B7280' }}>{section.intro}</p>
        )}
      </div>

      <div className="divide-y" style={{ borderColor: 'rgba(55,65,81,0.3)' }}>
        {concepts.map((concept, i) => (
          <div key={i}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-4 px-5 py-4 text-left transition-all"
              style={{ background: expanded === i ? 'rgba(30,41,59,0.4)' : 'transparent' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: `${concept.color}15`, border: `1px solid ${concept.color}30` }}
              >
                {concept.icon}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-semibold" style={{ color: '#F9FAFB' }}>{concept.term}</p>
                {expanded !== i && (
                  <p className="text-xs mt-0.5 truncate" style={{ color: '#6B7280' }}>
                    {concept.definition.slice(0, 80)}...
                  </p>
                )}
              </div>
              <ChevronDown
                className="w-4 h-4 flex-shrink-0 transition-transform"
                style={{ color: '#4B5563', transform: expanded === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {expanded === i && (
              <div className="px-5 pb-5 ml-13" style={{ marginLeft: '3.5rem' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#CBD5E1', lineHeight: 1.7 }}>
                  {concept.definition}
                </p>
                {concept.example && (
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono"
                    style={{ background: `${concept.color}10`, color: concept.color, border: `1px solid ${concept.color}25` }}
                  >
                    {concept.example}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}