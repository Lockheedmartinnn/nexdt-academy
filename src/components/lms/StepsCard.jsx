import React, { useState } from 'react';
import { AlertTriangle, ChevronDown } from 'lucide-react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

function CollapsibleDetail({ description, warning }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs transition-all"
        style={{ color: open ? '#93C5FD' : '#4B5563' }}
      >
        <ChevronDown
          className="w-3.5 h-3.5 transition-transform"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
        {open ? 'Hide explanation' : 'Show explanation'}
      </button>

      {open && (
        <div className="mt-3 space-y-3">
          <p className="text-sm leading-relaxed" style={{ color: '#94A3B8', lineHeight: 1.7 }}>
            {description}
          </p>
          {warning && (
            <div
              className="flex items-start gap-2.5 p-3 rounded-lg"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)' }}
            >
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
              <p className="text-xs" style={{ color: '#FCA5A5' }}>{warning}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Auto-generate screenshot annotations from step content
function getAnnotations(step) {
  const title = step.title.toLowerCase();
  const annotations = [];
  if (title.includes('click') || title.includes('button')) {
    annotations.push({ label: 'Click here', color: 'red' });
  }
  if (title.includes('filter') || title.includes('toggle')) {
    annotations.push({ label: 'Toggle switch', color: 'yellow' });
  }
  if (title.includes('bar') || title.includes('progress')) {
    annotations.push({ label: 'Wait for this', color: 'yellow' });
  }
  if (title.includes('layer')) {
    annotations.push({ label: 'Add Layer dialog', color: 'red' });
  }
  if (title.includes('catalog') || title.includes('search')) {
    annotations.push({ label: 'Search field', color: 'red' });
  }
  if (title.includes('save') || title.includes('submit') || title.includes('confirm')) {
    annotations.push({ label: 'Confirm button', color: 'red' });
  }
  return annotations;
}

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

      {/* Step tab navigator */}
      <div
        className="flex gap-1 px-5 py-3"
        style={{ borderBottom: '1px solid rgba(55,65,81,0.4)', background: 'rgba(15,23,42,0.4)', overflowX: 'auto' }}
      >
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
              className="w-4 h-4 rounded-full flex items-center justify-center font-bold flex-shrink-0"
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

      {/* Active step */}
      {steps[activeStep] && (
        <div className="px-5 py-5 space-y-4">
          {/* Caption */}
          <div className="flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
              style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.25)' }}
            >
              {activeStep + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: '#F9FAFB' }}>
                {steps[activeStep].title}
              </p>
              {/* Collapsed detail */}
              <CollapsibleDetail
                description={steps[activeStep].description}
                warning={steps[activeStep].warning}
              />
            </div>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(55,65,81,0.3)' }}>
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{ color: activeStep === 0 ? '#374151' : '#6B7280', cursor: activeStep === 0 ? 'not-allowed' : 'pointer' }}
            >
              ← Previous
            </button>
            <span className="text-xs" style={{ color: '#4B5563' }}>
              {activeStep + 1} / {steps.length}
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