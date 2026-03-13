import React, { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronRight, CheckCircle2, Circle, Award, LogOut, BookOpen, User } from 'lucide-react';
import { PATHS, MODULES, getModulesForPath } from '@/components/lms/lmsData';
import UserSidePanel from '@/components/lms/UserSidePanel';

function PathCard({ path, progress, completedSections, onSelect }) {
  const modules = getModulesForPath(path.id);
  const allSectionIds = modules.flatMap(m => (m.sections || []).filter(s => s.type !== 'callout').map(s => s.id));
  const done = allSectionIds.filter(id => completedSections.includes(id)).length;
  const total = allSectionIds.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const isSelected = progress?.track_id === path.id;
  const firstModule = modules[0];
  const resumeUrl = firstModule ? createPageUrl(`LMSLesson?path=${path.id}&module=${firstModule.id}&section=0`) : null;

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:translate-y-[-2px]"
      style={{
        background: '#111827',
        border: `1px solid ${isSelected ? path.color + '40' : 'rgba(55,65,81,0.6)'}`,
        boxShadow: isSelected ? `0 0 0 1px ${path.color}20` : 'none',
      }}
    >
      {/* Card Top */}
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <span className="text-3xl">{path.emoji}</span>
          {isSelected && pct === 100 && <Award className="w-5 h-5" style={{ color: '#F59E0B' }} />}
        </div>
        <h3 className="text-base font-bold mb-1" style={{ color: '#F9FAFB', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {path.title}
        </h3>
        <p className="text-sm mb-3" style={{ color: '#6B7280' }}>{path.description}</p>
        <p className="text-xs" style={{ color: '#4B5563' }}>{path.durationText}</p>

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

      {/* Card Action */}
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
            onClick={() => onSelect(path.id)}
            className="w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all"
            style={{ background: 'rgba(55,65,81,0.4)', color: '#94A3B8', border: '1px solid rgba(55,65,81,0.5)' }}
          >
            Select This Path
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function ModuleProgressItem({ module, completedSections, pathId }) {
  const navSections = (module.sections || []).filter(s => s.type !== 'callout');
  const done = navSections.filter(s => completedSections.includes(s.id)).length;
  const isComplete = done === navSections.length && navSections.length > 0;
  const firstSection = 0;

  return (
    <Link to={createPageUrl(`LMSLesson?path=${pathId}&module=${module.id}&section=${firstSection}`)}>
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/5"
        style={{ background: 'rgba(17,24,39,0.4)', border: '1px solid rgba(55,65,81,0.4)' }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
          style={{ background: isComplete ? 'rgba(16,185,129,0.12)' : 'rgba(55,65,81,0.4)' }}
        >
          {isComplete ? '✅' : module.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate" style={{ color: '#F9FAFB' }}>{module.title}</p>
          <p className="text-xs" style={{ color: '#4B5563' }}>
            {done}/{navSections.length} sections · {module.duration}
          </p>
        </div>
        <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: '#4B5563' }} />
      </div>
    </Link>
  );
}

export default function Academy() {
  const queryClient = useQueryClient();

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
  const selectedModules = selectedPathId ? getModulesForPath(selectedPathId) : [];

  const overallProgress = useMemo(() => {
    if (!selectedPathId) return 0;
    const allIds = selectedModules.flatMap(m => (m.sections || []).filter(s => s.type !== 'callout').map(s => s.id));
    if (allIds.length === 0) return 0;
    return Math.round((allIds.filter(id => completedSections.includes(id)).length / allIds.length) * 100);
  }, [selectedPathId, selectedModules, completedSections]);

  const initials = user?.full_name ? user.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U';

  return (
    <div style={{ background: '#0A0E1A', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      {/* Top Bar */}
      <div style={{ background: '#0A0E1A', borderBottom: '1px solid rgba(55,65,81,0.4)' }}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/253764dc9_image.png"
              alt="SiteSee"
              className="h-6"
            />
            <span className="text-sm font-semibold" style={{ color: '#94A3B8' }}>NexDT Academy</span>
          </div>
          <div className="flex items-center gap-3">
            {user && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: '#3B82F6', color: '#fff' }}>
                  {initials}
                </div>
                <span className="text-sm hidden sm:block" style={{ color: '#6B7280' }}>{user.full_name}</span>
              </div>
            )}
            <button
              onClick={() => base44.auth.logout()}
              className="p-1.5 rounded-lg transition-all"
              style={{ color: '#4B5563' }}
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
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
            {selectedPath ? '' : ' Select your role to get started.'}
          </p>
        </div>

        {/* Path Cards */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-mono font-medium" style={{ color: '#4B5563' }}>
              {selectedPath ? 'YOUR LEARNING PATHS' : 'SELECT YOUR ROLE'}
            </h2>
            {selectedPath && (
              <div className="flex items-center gap-2">
                <div className="h-1.5 rounded-full" style={{ width: 80, background: 'rgba(55,65,81,0.5)' }}>
                  <div className="h-full rounded-full" style={{ width: `${overallProgress}%`, background: selectedPath.color }} />
                </div>
                <span className="text-xs" style={{ color: '#6B7280' }}>{overallProgress}% complete</span>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {Object.values(PATHS).map((path) => (
              <PathCard
                key={path.id}
                path={path}
                progress={progress}
                completedSections={completedSections}
                onSelect={(id) => selectPathMutation.mutate(id)}
              />
            ))}
          </div>
        </div>

        {/* Module Overview for selected path */}
        {selectedPath && selectedModules.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-4 h-4" style={{ color: '#4B5563' }} />
              <h2 className="text-sm font-mono font-medium" style={{ color: '#4B5563' }}>
                {selectedPath.title.toUpperCase()} — MODULES
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {selectedModules.map((module) => (
                <ModuleProgressItem
                  key={module.id}
                  module={module}
                  completedSections={completedSections}
                  pathId={selectedPathId}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 text-center" style={{ borderTop: '1px solid rgba(55,65,81,0.3)' }}>
          <p className="text-xs" style={{ color: '#374151' }}>
            NexDT Academy by SiteSee · Professional platform training
          </p>
        </div>
      </div>
    </div>
  );
}