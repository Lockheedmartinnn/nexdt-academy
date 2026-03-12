import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle } from 'lucide-react';

export default function StepsCard({ section }) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = section.steps || [];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.5)' }}>
        <p className="text-xs font-mono font-medium tracking-wider" style={{ color: '#6B7280' }}>
          🔢 STEP-BY-STEP
        </p>
        {section.title && (
          <p className="text-base font-semibold mt-1" style={{ color: '#F9FAFB' }}>{section.title}</p>
        )}
      </div>

      {/* Step navigator */}
      <div className="flex gap-1 px-5 py-3" style={{ borderBottom: '1px solid rgba(55,65,81,0.4)', background: 'rgba(15,23,42,0.4)', overflowX: 'auto' }}>
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap flex-shrink-0 transition-all"
            style={{
              background: activeStep === i ? 'rgba(59,130,246,0.15)' : 'transparent',
              color: activeStep === i ? '#93C5FD' : '#4B5563',
              border: `1px solid ${activeStep === i ? 'rgba(59,130,246,0.35)' : 'transparent'}`,
            }}
          >
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: activeStep === i ? '#3B82F6' : 'rgba(55,65,81,0.5)',
                color: activeStep === i ? '#fff' : '#6B7280',
                fontSize: '9px',
              }}
            >
              {i + 1}
            </span>
            {step.title.split(' ').slice(0, 3).join(' ')}
          </button>
        ))}
      </div>

      {/* Active Step Content */}
      {steps[activeStep] && (
        <div className="px-5 py-5">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
              style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.25)' }}
            >
              {activeStep + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold mb-2" style={{ color: '#F9FAFB' }}>
                {steps[activeStep].title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
                {steps[activeStep].description}
              </p>

              {steps[activeStep].warning && (
                <div
                  className="flex items-start gap-2.5 mt-4 p-3 rounded-lg"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}
                >
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                  <p className="text-xs" style={{ color: '#FCA5A5' }}>{steps[activeStep].warning}</p>
                </div>
              )}
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid rgba(55,65,81,0.3)' }}>
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{
                color: activeStep === 0 ? '#374151' : '#6B7280',
                background: 'transparent',
                cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              ← Previous
            </button>
            <span className="text-xs" style={{ color: '#4B5563' }}>
              Step {activeStep + 1} of {steps.length}
            </span>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{
                color: activeStep === steps.length - 1 ? '#374151' : '#93C5FD',
                background: activeStep === steps.length - 1 ? 'transparent' : 'rgba(59,130,246,0.1)',
                border: activeStep === steps.length - 1 ? '1px solid transparent' : '1px solid rgba(59,130,246,0.2)',
                cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}