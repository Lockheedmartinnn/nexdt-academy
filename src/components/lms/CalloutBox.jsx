import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, Lightbulb, ChevronDown } from 'lucide-react';

const VARIANTS = {
  warning: {
    icon: AlertTriangle,
    bg: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.35)',
    iconColor: '#F59E0B',
    titleColor: '#FCD34D',
  },
  danger: {
    icon: AlertCircle,
    bg: 'rgba(239, 68, 68, 0.08)',
    border: 'rgba(239, 68, 68, 0.35)',
    iconColor: '#EF4444',
    titleColor: '#FCA5A5',
  },
  tip: {
    icon: Lightbulb,
    bg: 'rgba(59, 130, 246, 0.08)',
    border: 'rgba(59, 130, 246, 0.35)',
    iconColor: '#3B82F6',
    titleColor: '#93C5FD',
  },
  info: {
    icon: Info,
    bg: 'rgba(100, 116, 139, 0.12)',
    border: 'rgba(100, 116, 139, 0.3)',
    iconColor: '#94A3B8',
    titleColor: '#CBD5E1',
  },
};

export default function CalloutBox({ variant = 'info', title, body, isRiskBanner = false }) {
  const [open, setOpen] = useState(false);
  const config = VARIANTS[variant] || VARIANTS.info;
  const Icon = config.icon;
  const hasBody = !!body;

  return (
    <div
      className="rounded-xl p-4"
      style={{ background: config.bg, border: `1px solid ${config.border}` }}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: config.iconColor }} />
        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-semibold text-sm" style={{ color: config.titleColor }}>
              {title}
            </p>
          )}

          {hasBody && (
            <>
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 text-xs mt-1.5 transition-all"
                style={{ color: open ? config.iconColor : 'rgba(107,114,128,0.8)' }}
              >
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform"
                  style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
                {open ? 'Hide explanation' : 'Show explanation'}
              </button>

              {open && (
                <p className="text-sm mt-2 leading-relaxed" style={{ color: '#94A3B8' }}>
                  {body}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}