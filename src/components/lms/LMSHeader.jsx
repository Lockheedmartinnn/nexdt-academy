import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu } from 'lucide-react';

export default function LMSHeader({ user, moduleTitle, overallProgress = 0, onMenuToggle, onProfileClick }) {
  const initials = user?.full_name
    ? user.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  return (
    <div style={{ background: '#0A0E1A', borderBottom: '1px solid rgba(55,65,81,0.4)' }}>
      <div className="flex items-center h-12 px-4 gap-3">
        {onMenuToggle && (
          <button onClick={onMenuToggle} className="p-1.5 rounded-lg lg:hidden" style={{ color: '#6B7280' }}>
            <Menu className="w-5 h-5" />
          </button>
        )}

        {/* Logo */}
        <Link to={createPageUrl('Academy')} className="flex items-center gap-2 flex-shrink-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/253764dc9_image.png"
            alt="SiteSee"
            className="h-5"
          />
          <span className="text-xs font-semibold hidden sm:block" style={{ color: '#94A3B8' }}>
            NexDT Academy
          </span>
        </Link>

        {/* Divider + Module Name */}
        {moduleTitle && (
          <>
            <span className="text-xs hidden md:block" style={{ color: '#374151' }}>/</span>
            <span className="text-xs font-medium hidden md:block truncate max-w-xs" style={{ color: '#6B7280' }}>
              {moduleTitle}
            </span>
          </>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Progress + User */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-1.5 rounded-full" style={{ width: 80, background: 'rgba(55,65,81,0.5)' }}>
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${overallProgress}%`, background: '#3B82F6' }}
              />
            </div>
            <span className="text-xs" style={{ color: '#4B5563' }}>{Math.round(overallProgress)}%</span>
          </div>

          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{ background: '#3B82F6', color: '#fff' }}
          >
            {initials}
          </div>
        </div>
      </div>

      {/* Sub-progress bar */}
      {overallProgress > 0 && (
        <div
          className="h-0.5 transition-all duration-700"
          style={{ width: `${overallProgress}%`, background: 'linear-gradient(to right, #3B82F6, #8B5CF6)' }}
        />
      )}
    </div>
  );
}