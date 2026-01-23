import React from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle2,
  PlayCircle,
  FileText,
  ChevronRight,
  Lock
} from "lucide-react";
import { tracks } from "@/components/academy/courseData";

export default function Track() {
  const urlParams = new URLSearchParams(window.location.search);
  const trackId = urlParams.get('id');
  
  const track = tracks.find(t => t.id === trackId);

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => base44.auth.me(),
  });

  const { data: progressData } = useQuery({
    queryKey: ['progress', user?.id],
    queryFn: () => base44.entities.CourseProgress.filter({ created_by: user?.email }),
    enabled: !!user?.email,
  });

  const progress = progressData?.[0] || {};
  const completedLessons = progress.completed_lessons || [];
  const completedModules = progress.completed_modules || [];

  if (!track) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Track Not Found</h2>
            <p className="text-slate-600 mb-4">The requested course track could not be found.</p>
            <Link to={createPageUrl('Academy')}>
              <Button>Return to Academy</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getModuleProgress = (module) => {
    const totalLessons = module.lessons?.length || 0;
    const completed = module.lessons?.filter(l => 
      completedLessons.includes(`${track.id}-${module.id}-${l.id}`)
    ).length || 0;
    return { completed, total: totalLessons, percent: totalLessons > 0 ? (completed / totalLessons) * 100 : 0 };
  };

  const getFirstIncompleteLessonUrl = () => {
    for (const module of track.modules || []) {
      for (const lesson of module.lessons || []) {
        const lessonId = `${track.id}-${module.id}-${lesson.id}`;
        if (!completedLessons.includes(lessonId)) {
          return createPageUrl(`Lesson?track=${track.id}&module=${module.id}&lesson=${lesson.id}`);
        }
      }
    }
    // All complete, return first lesson
    const firstModule = track.modules?.[0];
    const firstLesson = firstModule?.lessons?.[0];
    if (firstModule && firstLesson) {
      return createPageUrl(`Lesson?track=${track.id}&module=${firstModule.id}&lesson=${firstLesson.id}`);
    }
    return createPageUrl('Academy');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className={`${track.color || 'bg-blue-600'} text-white`}>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link to={createPageUrl('Academy')} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Academy
            </Link>
            <img 
              src="https://www.sitesee.com.au/wp-content/uploads/2022/10/sitesee-logo.svg" 
              alt="SiteSee Logo" 
              className="h-6 brightness-0 invert"
            />
          </div>

          <div className="flex items-start justify-between">
            <div>
              <Badge className="bg-white/20 text-white border-0 mb-4">Course Track</Badge>
              <h1 className="text-3xl font-bold mb-3">{track.title}</h1>
              <p className="text-white/80 max-w-2xl">{track.description}</p>
              
              <div className="flex items-center gap-6 mt-6 text-white/90">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span>{track.modules?.length || 0} modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{track.duration}</span>
                </div>
              </div>
            </div>

            <Link to={getFirstIncompleteLessonUrl()}>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 gap-2">
                <PlayCircle className="w-5 h-5" />
                Continue Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {track.modules?.map((module, moduleIndex) => {
            const moduleProgress = getModuleProgress(module);
            const isModuleComplete = completedModules.includes(`${track.id}-${module.id}`);

            return (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        isModuleComplete 
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {isModuleComplete ? <CheckCircle2 className="w-5 h-5" /> : moduleIndex + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg">Module {moduleIndex + 1}: {module.title}</CardTitle>
                        <p className="text-sm text-slate-500 mt-1">
                          {moduleProgress.completed} of {moduleProgress.total} lessons complete
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-slate-600">
                        {Math.round(moduleProgress.percent)}%
                      </span>
                      <Progress value={moduleProgress.percent} className="w-32 h-2 mt-1" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100">
                    {module.lessons?.map((lesson, lessonIndex) => {
                      const lessonFullId = `${track.id}-${module.id}-${lesson.id}`;
                      const isComplete = completedLessons.includes(lessonFullId);
                      const hasVideo = !!lesson.videoUrl;

                      return (
                        <Link
                          key={lesson.id}
                          to={createPageUrl(`Lesson?track=${track.id}&module=${module.id}&lesson=${lesson.id}`)}
                          className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors group"
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isComplete 
                              ? 'bg-emerald-100 text-emerald-600'
                              : hasVideo
                                ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                                : 'bg-slate-100 text-slate-500'
                          } transition-colors`}>
                            {isComplete ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : hasVideo ? (
                              <PlayCircle className="w-5 h-5" />
                            ) : (
                              <FileText className="w-5 h-5" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-slate-400 uppercase">
                                Lesson {lessonIndex + 1}
                              </span>
                              {hasVideo && (
                                <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600 border-0">
                                  Video
                                </Badge>
                              )}
                            </div>
                            <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                              {lesson.title}
                            </h4>
                          </div>

                          <div className="flex items-center gap-3 text-slate-400">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{lesson.duration}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}

                    {/* Quiz Link */}
                    {module.quiz && (
                      <Link
                        to={createPageUrl(`Quiz?track=${track.id}&module=${module.id}`)}
                        className="flex items-center gap-4 p-4 bg-amber-50 hover:bg-amber-100 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100 text-amber-600">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-medium text-amber-600 uppercase">Assessment</span>
                          <h4 className="font-medium text-slate-900">Module Quiz</h4>
                        </div>
                        <div className="flex items-center gap-3 text-amber-600">
                          <span className="text-sm">{module.quiz.questions?.length || 0} questions</span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}