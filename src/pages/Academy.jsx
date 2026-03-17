import React, { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronRight, Award, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { PATHS, MODULES, getModulesForPath } from '@/components/lms/lmsData';
import UserSidePanel from '@/components/lms/UserSidePanel';

const INTRO_MODULE = MODULES['m0'];
const INTRO_MODULE_ID = 'm0';

function getIntroProgress(completedSections) {
  const navSections = (INTRO_MODULE?.sections || []).filter(s => s.type !== 'callout');
  const done = navSections.filter(s => completedSections.includes(s.id)).length;
  const pct = navSections.length > 0 ? Math.round((done / navSections.length) * 100) : 0;
  const isComplete = navSections.length > 0 && done === navSections.length;
  return { done, total: navSections.length, pct, isComplete };
}

function PathCard({ path, progress, completedSections, onSelect, unlocked }) {
  const modules = getModulesForPath(path.id);
  const allSectionIds = modules.flatMap(m => (m.sections || []).filter(s => s.type !== 'callout').map(s => s.id));
  const done = allSectionIds.filter(id => completedSections.includes(id)).length;
  const total = allSectionIds.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const isSelected = progress?.track_id === path.id;
  const firstNonIntroModule = modules.find(m => m.id !== INTRO_MODULE_ID) || modules[0];
  const resumeUrl = firstNonIntroModule ? createPageUrl(`LMSLesson?path=${path.id}&module=${firstNonIntroModule.id}&section=0`) : null;

  let borderColor;
  if (!unlocked) borderColor = 'rgba(55,65,81,0.4)';
  else if (isSelected) borderColor = path.color + '60';
  else borderColor = 'rgba(55,65,81,0.6)';

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-200"
      style={{
        background: '#111827',
        border: `1px solid ${borderColor}`,
        boxShadow: isSelected ? `0 0 0 2px ${path.color}30` : 'none',
        position: 'relative',
      }}
    >
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{path.emoji}</span>
          {isSelected && pct === 100
            ? <Award className="w-5 h-5" style={{ color: '#F59E0B' }} />
            : isSelected
            ? <CheckCircle2 className="w-5 h-5" style={{ color: path.color }} />
            : null
          }
        </div>
        <h3 className="text-base font-bold mb-1" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {path.title}
        </h3>
        <p className="text-sm mb-3" style={{ color: '#6B7280' }}>{path.description}</p>
        <p className="text-xs" style={{ color: '#6B7280' }}>{path.durationText}</p>

        {isSelected && total > 0 && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs" style={{ color: '#6B7280' }}>{done}/{total} sections complete</span>
              <span className="text-xs font-semibold" style={{ color: path.color }}>{pct}%</span>
            </div>
            <div className="h-1.5 rounded-full w-full" style={{ background: 'rgba(55,65,81,0.5)' }}>
              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: path.color }} />
            </div>
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        {isSelected ? (
          <Link to={resumeUrl}>
            <button
              className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all"
              style={{ background: path.color, color: '#fff' }}
            >
              {pct > 0 ? 'Continue Path' : 'Start Path'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        ) : (
          <button
            onClick={() => unlocked && onSelect(path.id)}
            disabled={!unlocked}
            className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all"
            style={{
              background: unlocked ? path.color + '18' : 'rgba(55,65,81,0.25)',
              color: unlocked ? path.color : '#4B5563',
              border: `1px solid ${unlocked ? path.color + '40' : 'rgba(55,65,81,0.3)'}`,
              cursor: unlocked ? 'pointer' : 'not-allowed',
            }}
          >
            {unlocked ? 'Select This Path' : <><Lock className="w-3.5 h-3.5" /> Complete intro first</>}
            {unlocked && <ChevronRight className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Academy() {
  const queryClient = useQueryClient();
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch (e) {} };
  }, []);

  const { data: user } = useQuery({ queryKey: ['user'], queryFn: () => base44.auth.me() });

  const { data: progressData } = useQuery({
    queryKey: ['progress', user?.email],
    queryFn: () => base44.entities.CourseProgress.filter({ created_by: user?.email }),
    enabled: !!user?.email,
  });

  const progress = progressData?.[0] || null;
  const selectedPathId = progress?.track_id;
  const completedSections = progress?.completed_lessons || [];

  const introProgress = useMemo(() => getIntroProgress(completedSections), [completedSections]);
  const pathsUnlocked = introProgress.isComplete;

  const selectPathMutation = useMutation({
    mutationFn: async (pathId) => {
      const data = { track_id: pathId, completed_lessons: completedSections };
      if (progress?.id) {
        return base44.entities.CourseProgress.update(progress.id, data);
      }
      return base44.entities.CourseProgress.create({ track_id: pathId, completed_lessons: [] });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['progress'] }),
  });

  const selectedPath = selectedPathId ? PATHS[selectedPathId] : null;
  const selectedModules = selectedPathId ? getModulesForPath(selectedPathId).filter(m => m.id !== INTRO_MODULE_ID) : [];

  const overallProgress = useMemo(() => {
    if (!selectedPathId) return 0;
    const modules = getModulesForPath(selectedPathId);
    const allIds = modules.flatMap(m => (m.sections || []).filter(s => s.type !== 'callout').map(s => s.id));
    if (allIds.length === 0) return 0;
    return Math.round((allIds.filter(id => completedSections.includes(id)).length / allIds.length) * 100);
  }, [selectedPathId, completedSections]);

  const initials = user?.full_name ? user.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U';

  const introResumeUrl = createPageUrl(`LMSLesson?path=${selectedPathId || 'colo'}&module=${INTRO_MODULE_ID}&section=0`);

  return (
    <div style={{ background: '#0A0E1A', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Top Bar */}
      <div style={{ background: '#0A0E1A', borderBottom: '1px solid rgba(55,65,81,0.4)' }}>
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/253764dc9_image.png"
              alt="SiteSee"
              className="h-6"
            />
            <span className="text-sm font-semibold" style={{ color: '#94A3B8' }}>NexDT Academy</span>
          </div>
          {user && (
            <button
              onClick={() => setSidePanelOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all"
              style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(55,65,81,0.5)', color: '#94A3B8' }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: '#3B82F6', color: '#fff' }}>
                {initials}
              </div>
              <span className="text-sm hidden sm:block">{user.full_name}</span>
              {overallProgress > 0 && (
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-full hidden sm:block" style={{ background: selectedPath ? selectedPath.color + '22' : 'rgba(59,130,246,0.15)', color: selectedPath?.color || '#93C5FD' }}>
                  {overallProgress}%
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-mono" style={{ background: 'rgba(59,130,246,0.1)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.2)' }}>
            SITESEE · NEXDT ONBOARDING
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.2 }}>
            NexDT Academy
          </h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Professional training for the NexDT digital twin platform.
          </p>
        </div>

        {/* ── STEP 1: Intro Module ── */}
        <div className="mb-4 flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: introProgress.isComplete ? '#10B981' : '#3B82F6', color: '#fff' }}
          >
            {introProgress.isComplete ? '✓' : '1'}
          </div>
          <span className="text-sm font-semibold" style={{ color: '#F9FAFB' }}>
            Start Here — Platform Overview <span className="text-xs font-normal ml-1" style={{ color: '#4B5563' }}>Required for all users</span>
          </span>
        </div>

        <div
          className="rounded-2xl p-6 mb-4"
          style={{
            background: '#111827',
            border: `1px solid ${introProgress.isComplete ? 'rgba(16,185,129,0.3)' : 'rgba(59,130,246,0.35)'}`,
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: introProgress.isComplete ? 'rgba(16,185,129,0.12)' : 'rgba(59,130,246,0.12)' }}
            >
              {introProgress.isComplete
                ? <CheckCircle2 className="w-6 h-6" style={{ color: '#10B981' }} />
                : <span className="text-2xl">{INTRO_MODULE.icon}</span>
              }
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold mb-1" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {INTRO_MODULE.title}
              </h3>
              <p className="text-sm mb-3" style={{ color: '#6B7280' }}>{INTRO_MODULE.subtitle}</p>
              {introProgress.total > 0 && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span style={{ color: '#6B7280' }}>{introProgress.done}/{introProgress.total} sections</span>
                    <span style={{ color: introProgress.isComplete ? '#10B981' : '#93C5FD' }}>{introProgress.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(55,65,81,0.5)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${introProgress.pct}%`, background: introProgress.isComplete ? '#10B981' : '#3B82F6' }}
                    />
                  </div>
                </div>
              )}
            </div>
            <Link to={introResumeUrl} className="flex-shrink-0">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: introProgress.isComplete ? 'rgba(16,185,129,0.12)' : '#3B82F6',
                  color: introProgress.isComplete ? '#10B981' : '#fff',
                  border: introProgress.isComplete ? '1px solid rgba(16,185,129,0.3)' : 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {introProgress.isComplete ? 'Review' : introProgress.pct > 0 ? 'Continue' : 'Start'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Connector arrow */}
        <div className="flex flex-col items-center my-2 mb-4">
          <div className="w-px h-6" style={{ background: pathsUnlocked ? 'rgba(55,65,81,0.6)' : 'rgba(55,65,81,0.3)' }} />
          <ArrowRight
            className="w-4 h-4 rotate-90"
            style={{ color: pathsUnlocked ? '#4B5563' : 'rgba(55,65,81,0.3)' }}
          />
        </div>

        {/* ── STEP 2: Select Role / Path ── */}
        <div className="mb-4 flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{
              background: pathsUnlocked ? (selectedPath ? '#10B981' : '#3B82F6') : 'rgba(55,65,81,0.4)',
              color: pathsUnlocked ? '#fff' : '#4B5563',
            }}
          >
            {selectedPath ? '✓' : '2'}
          </div>
          <span className="text-sm font-semibold" style={{ color: pathsUnlocked ? '#F9FAFB' : '#4B5563' }}>
            Select Your Role
            {!pathsUnlocked && <span className="text-xs font-normal ml-2" style={{ color: '#374151' }}>— complete the intro to unlock</span>}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.values(PATHS).map((path) => (
            <PathCard
              key={path.id}
              path={path}
              progress={progress}
              completedSections={completedSections}
              onSelect={(id) => selectPathMutation.mutate(id)}
              unlocked={pathsUnlocked}
            />
          ))}
        </div>

        {/* ── STEP 3: Role-specific modules (shown after path selected) ── */}
        {selectedPath && selectedModules.length > 0 && (
          <>
            {/* Connector arrow */}
            <div className="flex flex-col items-center my-2 mb-4">
              <div className="w-px h-6" style={{ background: 'rgba(55,65,81,0.6)' }} />
              <ArrowRight className="w-4 h-4 rotate-90" style={{ color: '#4B5563' }} />
            </div>

            <div className="mb-4 flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: '#3B82F6', color: '#fff' }}
              >
                3
              </div>
              <span className="text-sm font-semibold" style={{ color: '#F9FAFB' }}>
                {selectedPath.title} — Modules
              </span>
            </div>

            <div
              className="rounded-2xl p-5"
              style={{ background: '#111827', border: `1px solid ${selectedPath.color}25` }}
            >
              <div className="space-y-2">
                {selectedModules.map((module, idx) => {
                  const navSections = (module.sections || []).filter(s => s.type !== 'callout');
                  const done = navSections.filter(s => completedSections.includes(s.id)).length;
                  const isComplete = done === navSections.length && navSections.length > 0;
                  return (
                    <Link
                      key={module.id}
                      to={createPageUrl(`LMSLesson?path=${selectedPathId}&module=${module.id}&section=0`)}
                    >
                      <div
                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/5"
                        style={{ background: 'rgba(17,24,39,0.4)', border: '1px solid rgba(55,65,81,0.4)' }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                          style={{ background: isComplete ? 'rgba(16,185,129,0.12)' : 'rgba(55,65,81,0.4)' }}
                        >
                          {isComplete
                            ? <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} />
                            : <span className="text-lg">{module.icon}</span>
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate" style={{ color: '#F9FAFB' }}>{module.title}</p>
                          <p className="text-xs mb-1.5" style={{ color: '#4B5563' }}>
                            {done}/{navSections.length} sections · {module.duration}
                          </p>
                          <div className="h-1 rounded-full w-full" style={{ background: 'rgba(55,65,81,0.5)' }}>
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${navSections.length > 0 ? Math.round((done / navSections.length) * 100) : 0}%`,
                                background: isComplete ? '#10B981' : selectedPath.color,
                              }}
                            />
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: '#4B5563' }} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 text-center" style={{ borderTop: '1px solid rgba(55,65,81,0.3)' }}>
          <p className="text-xs" style={{ color: '#374151' }}>
            NexDT Academy by SiteSee · Professional platform training
          </p>
        </div>
      </div>

      {sidePanelOpen && (
        <UserSidePanel
          user={user}
          progress={progress}
          onClose={() => setSidePanelOpen(false)}
        />
      )}
    </div>
  );
}