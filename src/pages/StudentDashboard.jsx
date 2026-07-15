import React, { useState, useMemo } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Award, CheckCircle2, BookOpen, BarChart2, ChevronRight,
  ArrowLeft, LogOut, Clock, Target, TrendingUp, Download, X
} from 'lucide-react';
import { PATHS, MODULES, getModulesForPath } from '@/components/lms/lmsData';

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
        <div className="flex flex-col items-center mb-5">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/253764dc9_image.png"
            alt="SiteSee" className="h-7 mb-3"
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

export default function StudentDashboard() {
  const [certModal, setCertModal] = useState(null);

  const { data: user } = useQuery({ queryKey: ['user'], queryFn: () => base44.auth.me() });

  const { data: progressData } = useQuery({
    queryKey: ['progress', user?.email],
    queryFn: () => base44.entities.CourseProgress.filter({ created_by: user?.email }),
    enabled: !!user?.email,
  });

  const progress = progressData?.[0] || null;
  const selectedPathId = progress?.track_id;
  const completedSections = progress?.completed_lessons || [];
  const selectedPath = selectedPathId ? PATHS[selectedPathId] : null;
  const modules = selectedPathId ? getModulesForPath(selectedPathId) : [];

  const initials = user?.full_name
    ? user.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  const allIds = useMemo(() =>
    modules.flatMap(m => (m.sections || []).filter(s => s.type !== 'callout').map(s => s.id)),
    [modules]
  );

  const overallPct = allIds.length > 0
    ? Math.round((allIds.filter(id => completedSections.includes(id)).length / allIds.length) * 100)
    : 0;

  const moduleStats = modules.map(m => {
    const navSections = (m.sections || []).filter(s => s.type !== 'callout');
    const done = navSections.filter(s => completedSections.includes(s.id)).length;
    const isComplete = navSections.length > 0 && done === navSections.length;
    const pct = navSections.length > 0 ? Math.round((done / navSections.length) * 100) : 0;
    return { module: m, done, total: navSections.length, isComplete, pct };
  });

  const completedModules = moduleStats.filter(s => s.isComplete).length;
  const inProgressModules = moduleStats.filter(s => s.pct > 0 && !s.isComplete).length;
  const earnedCerts = moduleStats.filter(s => s.isComplete);

  // Intro progress
  const introModule = MODULES['m0'];
  const introSections = (introModule?.sections || []).filter(s => s.type !== 'callout');
  const introDone = introSections.filter(s => completedSections.includes(s.id)).length;
  const introComplete = introDone === introSections.length && introSections.length > 0;

  return (
    <div style={{ background: '#0A0E1A', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Top Bar */}
      <div style={{ background: '#0A0E1A', borderBottom: '1px solid rgba(55,65,81,0.4)' }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to={createPageUrl('Academy')} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:block">Back to Academy</span>
            </Link>
            <div className="w-px h-4" style={{ background: 'rgba(55,65,81,0.5)' }} />
            <span className="text-sm font-semibold" style={{ color: '#94A3B8' }}>My Dashboard</span>
          </div>
          <button
            onClick={() => base44.auth.logout()}
            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg"
            style={{ color: '#4B5563', border: '1px solid rgba(55,65,81,0.4)' }}
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:block">Sign out</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">

        {/* Profile Card */}
        <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.5)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
            style={{ background: '#3B82F6', color: '#fff' }}>
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold mb-0.5" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {user?.full_name || 'Learner'}
            </h1>
            <p className="text-sm mb-2" style={{ color: '#6B7280' }}>{user?.email}</p>
            <div className="flex flex-wrap gap-2">
              {selectedPath && (
                <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: selectedPath.color + '18', color: selectedPath.color, border: `1px solid ${selectedPath.color}30` }}>
                  {selectedPath.emoji} {selectedPath.title}
                </span>
              )}
              {introComplete && (
                <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)' }}>
                  ✓ Platform Overview Complete
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <TrendingUp className="w-5 h-5" />, label: 'Overall Progress', value: `${overallPct}%`, color: selectedPath?.color || '#3B82F6' },
            { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Modules Completed', value: completedModules, color: '#10B981' },
            { icon: <Clock className="w-5 h-5" />, label: 'In Progress', value: inProgressModules, color: '#F59E0B' },
            { icon: <Award className="w-5 h-5" />, label: 'Certificates Earned', value: earnedCerts.length, color: '#FBBF24' },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl p-4 flex flex-col gap-2"
              style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.4)' }}>
              <div style={{ color: stat.color }}>{stat.icon}</div>
              <div className="text-2xl font-bold" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{stat.value}</div>
              <div className="text-xs" style={{ color: '#4B5563' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Overall Progress Bar */}
        {selectedPath && (
          <div className="rounded-2xl p-5" style={{ background: '#111827', border: `1px solid ${selectedPath.color}25` }}>
            <div className="flex items-center gap-2 mb-4">
              <BarChart2 className="w-4 h-4" style={{ color: '#4B5563' }} />
              <span className="text-xs font-mono" style={{ color: '#4B5563' }}>PATH PROGRESS</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold" style={{ color: '#F9FAFB' }}>{selectedPath.title}</span>
              <span className="text-sm font-bold" style={{ color: selectedPath.color }}>{overallPct}%</span>
            </div>
            <div className="h-3 rounded-full mb-2" style={{ background: 'rgba(55,65,81,0.5)' }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${overallPct}%`, background: selectedPath.color }} />
            </div>
            <p className="text-xs" style={{ color: '#4B5563' }}>
              {allIds.filter(id => completedSections.includes(id)).length} of {allIds.length} sections · {completedModules} of {modules.length} modules
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Module Progress */}
          <div className="rounded-2xl p-5" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.4)' }}>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4" style={{ color: '#4B5563' }} />
              <span className="text-xs font-mono" style={{ color: '#4B5563' }}>MODULE BREAKDOWN</span>
            </div>

            {modules.length === 0 ? (
              <div className="text-center py-6">
                <Target className="w-8 h-8 mx-auto mb-2" style={{ color: '#1F2937' }} />
                <p className="text-sm" style={{ color: '#4B5563' }}>Select a learning path to see modules</p>
                <Link to={createPageUrl('Academy')}>
                  <button className="mt-3 text-xs px-3 py-1.5 rounded-lg" style={{ background: 'rgba(59,130,246,0.12)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.2)' }}>
                    Go to Academy →
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                {moduleStats.map(({ module: m, done, total, isComplete, pct }) => (
                  <Link
                    key={m.id}
                    to={createPageUrl(`LMSLesson?path=${selectedPathId}&module=${m.id}&section=0`)}
                  >
                    <div className="flex items-center gap-3 p-3 rounded-xl transition-all hover:bg-white/5"
                      style={{
                        background: isComplete ? 'rgba(16,185,129,0.08)' : 'rgba(30,41,59,0.4)',
                        border: `1px solid ${isComplete ? 'rgba(16,185,129,0.25)' : 'rgba(55,65,81,0.4)'}`,
                      }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                        style={{ background: isComplete ? 'rgba(16,185,129,0.15)' : 'rgba(55,65,81,0.4)' }}>
                        {isComplete ? <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} /> : <span>{m.icon}</span>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate mb-1" style={{ color: '#F9FAFB' }}>{m.title}</p>
                        <div className="h-1.5 rounded-full w-full" style={{ background: 'rgba(55,65,81,0.5)' }}>
                          <div className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${pct}%`, background: isComplete ? '#10B981' : (selectedPath?.color || '#3B82F6') }} />
                        </div>
                      </div>
                      <span className="text-xs flex-shrink-0" style={{ color: isComplete ? '#10B981' : '#4B5563' }}>
                        {done}/{total}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4B5563' }} />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Certificates */}
          <div className="rounded-2xl p-5" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.4)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4" style={{ color: '#FBBF24' }} />
              <span className="text-xs font-mono" style={{ color: '#4B5563' }}>CERTIFICATES EARNED</span>
              {earnedCerts.length > 0 && (
                <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(251,191,36,0.12)', color: '#FBBF24' }}>
                  {earnedCerts.length}
                </span>
              )}
            </div>

            {earnedCerts.length === 0 ? (
              <div className="p-6 rounded-xl text-center" style={{ background: 'rgba(30,41,59,0.3)', border: '1px dashed rgba(55,65,81,0.4)' }}>
                <Award className="w-8 h-8 mx-auto mb-2" style={{ color: '#1F2937' }} />
                <p className="text-sm mb-1" style={{ color: '#4B5563' }}>No certificates yet</p>
                <p className="text-xs" style={{ color: '#374151' }}>Complete a module to earn your first certificate</p>
              </div>
            ) : (
              <div className="space-y-2">
                {earnedCerts.map(({ module: m }) => (
                  <button
                    key={m.id}
                    onClick={() => setCertModal(m)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left hover:bg-yellow-500/10"
                    style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.2)' }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(251,191,36,0.12)' }}>
                      <Award className="w-5 h-5" style={{ color: '#FBBF24' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate" style={{ color: '#F9FAFB' }}>{m.title}</p>
                      <p className="text-xs flex items-center gap-1" style={{ color: '#FBBF24' }}>
                        View Certificate <ChevronRight className="w-3 h-3" />
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {certModal && (
        <ModuleCertModal
          module={certModal}
          path={selectedPath}
          user={user}
          onClose={() => setCertModal(null)}
        />
      )}
    </div>
  );
}