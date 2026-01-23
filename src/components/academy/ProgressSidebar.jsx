import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { CheckCircle2, Circle, PlayCircle, FileText, Lock } from "lucide-react";

export default function ProgressSidebar({ 
  track, 
  currentModuleId, 
  currentLessonId, 
  completedLessons = [],
  completedModules = [] 
}) {
  return (
    <div className="bg-white border-r border-slate-200 w-80 h-full overflow-y-auto">
      <div className="p-4 border-b border-slate-200">
        <Link to={createPageUrl('Academy')} className="text-sm text-blue-600 hover:underline">
          ← Back to Academy
        </Link>
        <h2 className="font-semibold text-slate-900 mt-2">{track.title}</h2>
      </div>

      <div className="p-4 space-y-6">
        {track.modules?.map((module, moduleIndex) => {
          const isModuleComplete = completedModules.includes(`${track.id}-${module.id}`);
          const isCurrentModule = currentModuleId === module.id;
          
          return (
            <div key={module.id}>
              <div className={`flex items-center gap-2 mb-3 ${
                isCurrentModule ? 'text-blue-600' : 'text-slate-700'
              }`}>
                {isModuleComplete ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Circle className="w-5 h-5" />
                )}
                <span className="font-medium text-sm">
                  Module {moduleIndex + 1}: {module.title}
                </span>
              </div>

              <div className="ml-7 space-y-1">
                {module.lessons?.map((lesson, lessonIndex) => {
                  const lessonFullId = `${track.id}-${module.id}-${lesson.id}`;
                  const isComplete = completedLessons.includes(lessonFullId);
                  const isCurrent = currentLessonId === lesson.id && isCurrentModule;
                  
                  return (
                    <Link
                      key={lesson.id}
                      to={createPageUrl(`Lesson?track=${track.id}&module=${module.id}&lesson=${lesson.id}`)}
                      className={`flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors ${
                        isCurrent 
                          ? 'bg-blue-50 text-blue-700' 
                          : isComplete
                            ? 'text-emerald-600 hover:bg-slate-50'
                            : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {isComplete ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : lesson.videoUrl ? (
                        <PlayCircle className="w-4 h-4" />
                      ) : (
                        <FileText className="w-4 h-4" />
                      )}
                      <span className="truncate">{lesson.title}</span>
                    </Link>
                  );
                })}
                
                {module.quiz && (
                  <Link
                    to={createPageUrl(`Quiz?track=${track.id}&module=${module.id}`)}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Module Quiz</span>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}