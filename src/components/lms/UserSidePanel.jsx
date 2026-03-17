import React, { useState } from 'react';
import { X, Award, CheckCircle2, Download, BarChart2, BookOpen, LogOut } from 'lucide-react';
import { PATHS, MODULES, getModulesForPath } from '@/components/lms/lmsData';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

function ModuleCertModal({ module, path, user, onClose }) {
  const date = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full rounded-2xl p-8 text-center"
        style={{ background: '#0D1117', border: '1px solid rgba(251,191,36,0.3)', boxShadow: '0 0 60px rgba(251,191,36,0.1)' }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-1" style={{ color: '#4B5563' }}>
          <X className="w-5 h-5" />
        </button>

        {/* SiteSee Logo + Branding */}
        <div className="flex flex-col items-center mb-5">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/253764dc9_image.png"
            alt="SiteSee"
            className="h-7 mb-3"
            style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }}
          />
          <div className="w-full h-px mb-4" style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.4), transparent)' }} />
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(251,191,36,0.12)', border: '2px solid rgba(251,191,36,0.4)' }}>
            <Award className="w-7 h-7" style={{ color: '#FBBF24' }} />
          </div>
        </div>

        <p className="text-xs font-mono mb-1" style={{ color: '#FBBF24' }}>CERTIFICATE OF COMPLETION</p>
        <p className="text-xs mb-4" style={{ color: '#4B5563' }}>This certifies that</p>

        <h2 className="text-2xl font-bold mb-1" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {user?.full_name || 'Learner'}
        </h2>
        <p className="text-sm mb-5" style={{ color: '#6B7280' }}>has successfully completed</p>

        <div className="rounded-xl px-5 py-3 mb-5" style={{ background: 'rgba(55,65,81,0.3)', border: '1px solid rgba(55,65,81,0.5)' }}>
          <p className="text-xs mb-1" style={{ color: '#6B7280' }}>{path?.title}</p>
          <p className="text-lg font-bold" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {module.icon} {module.title}
          </p>
        </div>

        <p className="text-xs mb-6" style={{ color: '#4B5563' }}>Issued {date}</p>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px flex-1" style={{ background: 'rgba(55,65,81,0.4)' }} />
          <span className="text-xs" style={{ color: '#374151' }}>NexDT Academy · SiteSee</span>
          <div className="h-px flex-1" style={{ background: 'rgba(55,65,81,0.4)' }} />
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl text-sm font-semibold"
          style={{ background: 'rgba(251,191,36,0.12)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.3)' }}
        >
          <Download className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}

export default function UserSidePanel({ user, progress, onClose }) {
  const [certModal, setCertModal] = useState(null); // module object

  const selectedPathId = progress?.track_id;
  const completedSections = progress?.completed_lessons || [];
  const selectedPath = selectedPathId ? PATHS[selectedPathId] : null;
  const modules = selectedPathId ? getModulesForPath(selectedPathId) : [];

  const initials = user?.full_name
    ? user.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  // Overall progress
  const allIds = modules.flatMap(m => (m.sections || []).filter(s => s.type !== 'callout').map(s => s.id));
  const overallPct = allIds.length > 0
    ? Math.round((allIds.filter(id => completedSections.includes(id)).length / allIds.length) * 100)
    : 0;

  // Per-module completion
  const moduleStats = modules.map(m => {
    const navSections = (m.sections || []).filter(s => s.type !== 'callout');
    const done = navSections.filter(s => completedSections.includes(s.id)).length;
    const isComplete = navSections.length > 0 && done === navSections.length;
    return { module: m, done, total: navSections.length, isComplete, pct: navSections.length > 0 ? Math.round((done / navSections.length) * 100) : 0 };
  });

  const earnedCerts = moduleStats.filter(s => s.isComplete);

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-[100]" style={{ background: 'rgba(0,0,0,0.5)' }} onClick={onClose} />

      {/* Panel */}
      <div
        className="fixed right-0 top-0 h-full z-[110] flex flex-col overflow-y-auto"
        style={{ width: 320, background: '#0D1117', borderLeft: '1px solid rgba(55,65,81,0.5)' }}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-5 py-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(55,65,81,0.4)' }}>
          <span className="text-sm font-semibold" style={{ color: '#F9FAFB' }}>My Progress</span>
          <button onClick={onClose} className="p-1.5 rounded-lg" style={{ color: '#4B5563' }}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 px-5 py-5 space-y-6">
          {/* User Info */}
          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(55,65,81,0.4)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0" style={{ background: '#3B82F6', color: '#fff' }}>
              {initials}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold truncate" style={{ color: '#F9FAFB' }}>{user?.full_name || 'Learner'}</p>
              <p className="text-xs truncate" style={{ color: '#6B7280' }}>{user?.email}</p>
              <p className="text-xs mt-0.5" style={{ color: '#4B5563' }}>NexDT Academy</p>
            </div>
          </div>

          {/* Overall Progress */}
          {selectedPath && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BarChart2 className="w-4 h-4" style={{ color: '#4B5563' }} />
                <span className="text-xs font-mono" style={{ color: '#4B5563' }}>OVERALL PROGRESS</span>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(55,65,81,0.4)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: '#F9FAFB' }}>{selectedPath.title}</span>
                  <span className="text-sm font-bold" style={{ color: selectedPath.color }}>{overallPct}%</span>
                </div>
                <div className="h-2 rounded-full mb-2" style={{ background: 'rgba(55,65,81,0.5)' }}>
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${overallPct}%`, background: selectedPath.color }} />
                </div>
                <div className="flex justify-between text-xs" style={{ color: '#4B5563' }}>
                  <span>{allIds.filter(id => completedSections.includes(id)).length} of {allIds.length} sections</span>
                  <span>{earnedCerts.length}/{modules.length} modules done</span>
                </div>
              </div>
            </div>
          )}

          {/* Module Progress */}
          {modules.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4" style={{ color: '#4B5563' }} />
                <span className="text-xs font-mono" style={{ color: '#4B5563' }}>MODULES</span>
              </div>
              <div className="space-y-2">
                {moduleStats.map(({ module: m, done, total, isComplete, pct }) => (
                  <Link
                    key={m.id}
                    to={createPageUrl(`LMSLesson?path=${selectedPathId}&module=${m.id}&section=0`)}
                    onClick={onClose}
                  >
                    <div
                      className="flex items-center gap-3 p-3 rounded-xl transition-all"
                      style={{
                        background: isComplete ? 'rgba(16,185,129,0.08)' : 'rgba(30,41,59,0.4)',
                        border: `1px solid ${isComplete ? 'rgba(16,185,129,0.25)' : 'rgba(55,65,81,0.4)'}`,
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                        style={{ background: isComplete ? 'rgba(16,185,129,0.15)' : 'rgba(55,65,81,0.4)' }}>
                        {isComplete ? '✅' : m.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate mb-1" style={{ color: '#F9FAFB' }}>{m.title}</p>
                        <div className="h-1 rounded-full w-full" style={{ background: 'rgba(55,65,81,0.5)' }}>
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: isComplete ? '#10B981' : '#3B82F6' }} />
                        </div>
                      </div>
                      <span className="text-xs flex-shrink-0" style={{ color: isComplete ? '#10B981' : '#4B5563' }}>
                        {done}/{total}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4" style={{ color: '#FBBF24' }} />
              <span className="text-xs font-mono" style={{ color: '#4B5563' }}>CERTIFICATES EARNED</span>
              {earnedCerts.length > 0 && (
                <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(251,191,36,0.12)', color: '#FBBF24' }}>
                  {earnedCerts.length}
                </span>
              )}
            </div>

            {earnedCerts.length === 0 ? (
              <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(30,41,59,0.3)', border: '1px dashed rgba(55,65,81,0.4)' }}>
                <Award className="w-8 h-8 mx-auto mb-2" style={{ color: '#1F2937' }} />
                <p className="text-xs" style={{ color: '#4B5563' }}>Complete a module to earn your first certificate</p>
              </div>
            ) : (
              <div className="space-y-2">
                {earnedCerts.map(({ module: m }) => (
                  <button
                    key={m.id}
                    onClick={() => setCertModal(m)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left"
                    style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)' }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(251,191,36,0.12)' }}>
                      <Award className="w-4 h-4" style={{ color: '#FBBF24' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate" style={{ color: '#F9FAFB' }}>{m.title}</p>
                      <p className="text-xs" style={{ color: '#FBBF24' }}>View Certificate →</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 flex-shrink-0" style={{ borderTop: '1px solid rgba(55,65,81,0.4)' }}>
          <button
            onClick={() => base44.auth.logout()}
            className="flex items-center gap-2 text-sm w-full px-3 py-2 rounded-lg"
            style={{ color: '#4B5563' }}
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </div>

      {/* Certificate Modal */}
      {certModal && (
        <ModuleCertModal
          module={certModal}
          path={selectedPath}
          user={user}
          onClose={() => setCertModal(null)}
        />
      )}
    </>
  );
}