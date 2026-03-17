import React, { useState, useEffect, useMemo } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';
import LMSHeader from '@/components/lms/LMSHeader';
import LMSSidebar from '@/components/lms/LMSSidebar';
import SectionRenderer from '@/components/lms/SectionRenderer';
import UserSidePanel from '@/components/lms/UserSidePanel';
import { MODULES, PATHS, getModulesForPath } from '@/components/lms/lmsData';

function PhaseTracker({ phases, currentPhase }) {
  if (!phases || phases.length === 0) return null;
  return (
    <div className="flex items-center gap-1 mb-6 p-4 rounded-xl" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(55,65,81,0.4)' }}>
      {phases.map((phase, i) => {
        const isCurrent = i === currentPhase;
        const isPast = i < currentPhase;
        return (
          <React.Fragment key={i}>
            <div className="flex items-center gap-1.5">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: isPast ? 'rgba(16,185,129,0.2)' : isCurrent ? '#3B82F6' : 'rgba(55,65,81,0.5)',
                  color: isPast ? '#10B981' : isCurrent ? '#fff' : '#4B5563',
                  border: `1px solid ${isPast ? 'rgba(16,185,129,0.4)' : isCurrent ? '#3B82F6' : 'rgba(55,65,81,0.4)'}`,
                }}
              >
                {isPast ? <Check className="w-3 h-3" /> : i + 1}
              </div>
              <span className="text-xs hidden sm:block" style={{ color: isCurrent ? '#F9FAFB' : isPast ? '#10B981' : '#4B5563' }}>
                {phase}
              </span>
            </div>
            {i < phases.length - 1 && (
              <div className="flex-1 h-px mx-1" style={{ background: isPast ? 'rgba(16,185,129,0.3)' : 'rgba(55,65,81,0.4)' }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function LMSLesson() {
  const params = new URLSearchParams(window.location.search);
  const pathId = params.get('path') || 'colo';
  const moduleId = params.get('module') || 'm0';
  const initialSection = parseInt(params.get('section') || '0', 10);

  const [sectionIdx, setSectionIdx] = useState(initialSection);
  const [unlockedSections, setUnlockedSections] = useState(new Set());
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [profilePanelOpen, setProfilePanelOpen] = useState(false);
  const queryClient = useQueryClient();

  const module = MODULES[moduleId];
  const sections = module?.sections || [];
  const currentSection = sections[sectionIdx];

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap';
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

  const progress = progressData?.[0] || {};
  const completedSections = progress.completed_lessons || [];

  const saveMutation = useMutation({
    mutationFn: async (newCompletedSections) => {
      const data = { completed_lessons: newCompletedSections };
      if (progress?.id) {
        return base44.entities.CourseProgress.update(progress.id, data);
      } else {
        return base44.entities.CourseProgress.create({ ...data, track_id: pathId });
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['progress'] }),
  });

  const markSectionComplete = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      saveMutation.mutate([...completedSections, sectionId]);
    }
  };

  // Compute overall progress
  const overallProgress = useMemo(() => {
    const modules = getModulesForPath(pathId);
    const allSectionIds = modules.flatMap(m => (m.sections || []).filter(s => s.type !== 'callout').map(s => s.id));
    if (allSectionIds.length === 0) return 0;
    const done = allSectionIds.filter(id => completedSections.includes(id)).length;
    return Math.round((done / allSectionIds.length) * 100);
  }, [pathId, completedSections]);

  const navigateTo = (newModuleId, newSectionIdx) => {
    const url = createPageUrl(`LMSLesson?path=${pathId}&module=${newModuleId}&section=${newSectionIdx}`);
    window.history.pushState({}, '', url.replace('/LMSLesson', '/LMSLesson'));
    window.location.href = url;
  };

  const goNext = () => {
    if (currentSection) markSectionComplete(currentSection.id);

    if (sectionIdx < sections.length - 1) {
      setSectionIdx(sectionIdx + 1);
      window.scrollTo(0, 0);
    } else {
      // Go to next module
      const modules = getModulesForPath(pathId);
      const currentModuleIdx = modules.findIndex(m => m.id === moduleId);
      if (currentModuleIdx < modules.length - 1) {
        const nextModule = modules[currentModuleIdx + 1];
        navigateTo(nextModule.id, 0);
      } else {
        // All done
        window.location.href = createPageUrl('Academy');
      }
    }
  };

  const goPrev = () => {
    if (sectionIdx > 0) {
      setSectionIdx(sectionIdx - 1);
      window.scrollTo(0, 0);
    } else {
      const modules = getModulesForPath(pathId);
      const currentModuleIdx = modules.findIndex(m => m.id === moduleId);
      if (currentModuleIdx > 0) {
        const prevModule = modules[currentModuleIdx - 1];
        const prevSections = prevModule.sections || [];
        navigateTo(prevModule.id, prevSections.length - 1);
      }
    }
  };

  const handleCheckCorrect = () => {
    if (currentSection) markSectionComplete(currentSection.id);
  };

  const handleThinkContinue = () => {
    if (currentSection) markSectionComplete(currentSection.id);
  };

  const handleQuizPass = (score) => {
    if (currentSection) markSectionComplete(currentSection.id);
  };

  const isCheckSection = currentSection?.type === 'check';
  const isQuizSection = currentSection?.type === 'quiz';
  const isThinkSection = currentSection?.type === 'think';
  const canAutoNext = !isCheckSection && !isQuizSection;
  const currentPhase = currentSection?.phase;

  const readSectionLabel = (s) => {
    switch (s?.type) {
      case 'read': return s.title || 'Read';
      case 'watch': return s.title || 'Watch';
      case 'think': return 'Reflect';
      case 'check': return 'Knowledge Check';
      case 'quiz': return 'Module Quiz';
      default: return s?.title || null;
    }
  };

  // Count nav sections
  const navSectionCount = sections.filter(s => readSectionLabel(s)).length;
  const currentNavIdx = sections.slice(0, sectionIdx + 1).filter(s => readSectionLabel(s)).length;

  return (
    <div style={{ background: '#0A0E1A', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <LMSHeader
        user={user}
        moduleTitle={module?.title}
        overallProgress={overallProgress}
        onMenuToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        onProfileClick={() => setProfilePanelOpen(true)}
      />

      <div className="flex" style={{ height: 'calc(100vh - 49px)' }}>
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col flex-shrink-0" style={{ width: 240 }}>
          <LMSSidebar
            pathId={pathId}
            activeModuleId={moduleId}
            activeSectionIdx={sectionIdx}
            completedSections={completedSections}
            onNavigate={(mId, sIdx) => navigateTo(mId, sIdx)}
          />
        </div>

        {/* Mobile sidebar overlay */}
        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50" style={{ background: 'rgba(0,0,0,0.7)' }} onClick={() => setMobileSidebarOpen(false)}>
            <div className="h-full" style={{ width: 260 }} onClick={e => e.stopPropagation()}>
              <LMSSidebar
                pathId={pathId}
                activeModuleId={moduleId}
                activeSectionIdx={sectionIdx}
                completedSections={completedSections}
                onNavigate={(mId, sIdx) => { navigateTo(mId, sIdx); setMobileSidebarOpen(false); }}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
            {/* Module Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{module?.icon}</span>
                <div>
                  <p className="text-xs font-mono" style={{ color: '#4B5563' }}>
                    {PATHS[pathId]?.title} · {module?.duration}
                  </p>
                  <h1 className="text-xl font-bold" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {module?.title}
                  </h1>
                </div>
              </div>
              {module?.subtitle && (
                <p className="text-sm" style={{ color: '#6B7280' }}>{module.subtitle}</p>
              )}
            </div>

            {/* Phase Tracker (for C2 Rip & Replace) */}
            {module?.phases && currentPhase !== undefined && (
              <PhaseTracker phases={module.phases} currentPhase={currentPhase} />
            )}

            {/* Section Counter */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-mono" style={{ color: '#4B5563' }}>
                Section {currentNavIdx} of {navSectionCount}
              </p>
              <div className="flex gap-1">
                {sections.filter(s => readSectionLabel(s)).map((s, i) => (
                  <div
                    key={s.id}
                    className="h-1 rounded-full"
                    style={{
                      width: 20,
                      background: completedSections.includes(s.id) ? '#10B981' : i === currentNavIdx - 1 ? '#3B82F6' : 'rgba(55,65,81,0.5)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Section Content */}
            <div className="space-y-4">
              <SectionRenderer
                section={currentSection}
                onCheckCorrect={handleCheckCorrect}
                onThinkContinue={handleThinkContinue}
                onQuizPass={handleQuizPass}
                onQuizFail={() => {}}
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: '1px solid rgba(55,65,81,0.3)' }}>
              <button
                onClick={goPrev}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ background: 'rgba(30,41,59,0.5)', color: '#6B7280', border: '1px solid rgba(55,65,81,0.4)' }}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {canAutoNext && (
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{ background: '#3B82F6', color: '#fff' }}
                >
                  {sectionIdx < sections.length - 1 ? 'Continue' : 'Next Module'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {(isCheckSection || isThinkSection) && (
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{ background: 'rgba(59,130,246,0.15)', color: '#6B7280', border: '1px solid rgba(55,65,81,0.3)' }}
                >
                  {sectionIdx < sections.length - 1 ? 'Continue' : 'Finish'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Side Panel */}
      {profilePanelOpen && (
        <UserSidePanel
          user={user}
          progress={progress}
          onClose={() => setProfilePanelOpen(false)}
        />
      )}
    </div>
  );
}