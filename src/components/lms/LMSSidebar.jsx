import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { CheckCircle2, Circle, Lock, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { getModulesForPath, getSectionLabel, PATHS, MODULES } from './lmsData';

function SidebarSection({ sectionIdx, section, isActive, isComplete, isLocked, pathId, moduleId, onClick }) {
  const label = getSectionLabel(section);
  if (!label) return null;

  return (
    <button
      onClick={() => !isLocked && onClick()}
      className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-left transition-all group"
      style={{
        background: isActive ? 'rgba(59,130,246,0.12)' : 'transparent',
        cursor: isLocked ? 'not-allowed' : 'pointer',
        opacity: isLocked ? 0.5 : 1,
      }}
    >
      <span className="flex-shrink-0">
        {isComplete ? (
          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#10B981' }} />
        ) : isLocked ? (
          <Lock className="w-3.5 h-3.5" style={{ color: '#4B5563' }} />
        ) : isActive ? (
          <Circle className="w-3.5 h-3.5" style={{ color: '#3B82F6' }} />
        ) : (
          <Circle className="w-3.5 h-3.5" style={{ color: '#4B5563' }} />
        )}
      </span>
      <span
        className="text-xs leading-snug"
        style={{ color: isActive ? '#93C5FD' : isComplete ? '#6EE7B7' : '#6B7280' }}
      >
        {label}
      </span>
    </button>
  );
}

function ModuleItem({ module, pathId, activeModuleId, activeSectionIdx, completedSections, onNavigate }) {
  const isActiveModule = module.id === activeModuleId;
  const [expanded, setExpanded] = useState(isActiveModule);

  const navSections = (module.sections || []).filter(s => getSectionLabel(s));
  const completedCount = navSections.filter(s => completedSections.includes(s.id)).length;
  const isModuleComplete = completedCount === navSections.length && navSections.length > 0;

  return (
    <div className="mb-1">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all"
        style={{ background: isActiveModule ? 'rgba(255,255,255,0.05)' : 'transparent' }}
      >
        <span className="flex-shrink-0">
          {isModuleComplete ? (
            <CheckCircle2 className="w-4 h-4" style={{ color: '#10B981' }} />
          ) : (
            <BookOpen className="w-4 h-4" style={{ color: isActiveModule ? '#3B82F6' : '#4B5563' }} />
          )}
        </span>
        <span className="flex-1 text-xs font-medium leading-snug" style={{ color: isActiveModule ? '#F9FAFB' : '#94A3B8' }}>
          {module.title}
        </span>
        <span className="flex-shrink-0">
          {expanded ? (
            <ChevronDown className="w-3 h-3" style={{ color: '#4B5563' }} />
          ) : (
            <ChevronRight className="w-3 h-3" style={{ color: '#4B5563' }} />
          )}
        </span>
      </button>

      {expanded && (
        <div className="ml-4 mt-0.5 space-y-0.5 pl-3" style={{ borderLeft: '1px solid rgba(55,65,81,0.4)' }}>
          {navSections.map((section, sIdx) => {
            const isComplete = completedSections.includes(section.id);
            const isActive = isActiveModule && sIdx === activeSectionIdx;
            // Find actual index in all sections
            const actualIdx = module.sections.indexOf(section);

            return (
              <SidebarSection
                key={section.id}
                sectionIdx={actualIdx}
                section={section}
                isActive={isActive}
                isComplete={isComplete}
                isLocked={false}
                pathId={pathId}
                moduleId={module.id}
                onClick={() => onNavigate(module.id, actualIdx)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function LMSSidebar({ pathId, activeModuleId, activeSectionIdx, completedSections = [], onNavigate }) {
  const path = PATHS[pathId];
  const modules = getModulesForPath(pathId);

  if (!path) return null;

  return (
    <div
      className="flex flex-col h-full overflow-hidden"
      style={{ width: 240, background: '#0D1117', borderRight: '1px solid rgba(55,65,81,0.4)' }}
    >
      {/* Path Header */}
      <div className="px-4 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.4)' }}>
        <div className="flex items-center gap-2">
          <span className="text-lg">{path.emoji}</span>
          <div>
            <p className="text-xs font-semibold" style={{ color: '#F9FAFB' }}>{path.title}</p>
            <p className="text-xs" style={{ color: '#4B5563' }}>{path.durationText}</p>
          </div>
        </div>
      </div>

      {/* Module List */}
      <div className="flex-1 overflow-y-auto px-2 py-3">
        {modules.map((module) => (
          <ModuleItem
            key={module.id}
            module={module}
            pathId={pathId}
            activeModuleId={activeModuleId}
            activeSectionIdx={activeSectionIdx}
            completedSections={completedSections}
            onNavigate={onNavigate}
          />
        ))}
      </div>

      {/* Bottom link */}
      <div className="px-4 py-3" style={{ borderTop: '1px solid rgba(55,65,81,0.4)' }}>
        <Link to={createPageUrl('Academy')}>
          <p className="text-xs" style={{ color: '#4B5563' }}>← All Paths</p>
        </Link>
      </div>
    </div>
  );
}