import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WorkflowCard({ section }) {
  const steps = section.steps || [];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.5)' }}>
        <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#94A3B8' }}>
          🗺️ WORKFLOW POSITION
        </p>
        {section.title && (
          <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>
        )}
        {section.description && (
          <p className="text-sm mt-2" style={{ color: '#6B7280' }}>{section.description}</p>
        )}
      </div>

      <div className="px-5 py-6">
        <div className="flex items-stretch gap-2">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div
                className="flex-1 rounded-xl p-4 flex flex-col items-center text-center"
                style={{
                  background: step.active ? 'rgba(59,130,246,0.1)' : 'rgba(30,41,59,0.4)',
                  border: `1px solid ${step.active ? 'rgba(59,130,246,0.4)' : 'rgba(55,65,81,0.5)'}`,
                  boxShadow: step.active ? '0 0 20px rgba(59,130,246,0.1)' : 'none',
                }}
              >
                <span className="text-2xl mb-2">{step.icon}</span>
                <p className="text-sm font-bold mb-1" style={{ color: step.active ? '#93C5FD' : '#94A3B8' }}>
                  {step.label}
                </p>
                <p className="text-xs mb-2" style={{ color: '#4B5563', lineHeight: 1.5 }}>
                  {step.description}
                </p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-mono"
                  style={{
                    background: step.active ? 'rgba(59,130,246,0.2)' : 'rgba(55,65,81,0.4)',
                    color: step.active ? '#60A5FA' : '#6B7280',
                    border: `1px solid ${step.active ? 'rgba(59,130,246,0.3)' : 'rgba(55,65,81,0.4)'}`,
                  }}
                >
                  {step.role}
                </span>
                {step.active && (
                  <div
                    className="mt-3 px-2 py-1 rounded-lg text-xs font-semibold"
                    style={{ background: 'rgba(59,130,246,0.2)', color: '#60A5FA' }}
                  >
                    ← You are here
                  </div>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center flex-shrink-0">
                  <ArrowRight className="w-5 h-5" style={{ color: '#374151' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}