import React, { useState, useEffect } from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ReactMarkdown from 'react-markdown';
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Clock
} from "lucide-react";
import VideoPlayer from "@/components/academy/VideoPlayer";
import { tracks } from "@/components/academy/courseData";

export default function Lesson() {
  const [urlParams, setUrlParams] = useState(() => new URLSearchParams(window.location.search));
  const trackId = urlParams.get('track');
  const moduleId = urlParams.get('module');
  const lessonId = urlParams.get('lesson');
  
  const queryClient = useQueryClient();

  // Update URL params when location changes
  useEffect(() => {
    const handleLocationChange = () => {
      setUrlParams(new URLSearchParams(window.location.search));
    };
    
    window.addEventListener('popstate', handleLocationChange);
    
    // Listen to custom navigation events
    const observer = new MutationObserver(handleLocationChange);
    observer.observe(document.querySelector('title') || document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      observer.disconnect();
    };
  }, []);

  // Force update when URL search params change
  useEffect(() => {
    setUrlParams(new URLSearchParams(window.location.search));
  }, [window.location.search]);

  const track = tracks.find(t => t.id === trackId);
  const module = track?.modules?.find(m => m.id === moduleId);
  const lesson = module?.lessons?.find(l => l.id === lessonId);

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => base44.auth.me(),
  });

  const { data: progressData, refetch: refetchProgress } = useQuery({
    queryKey: ['progress', user?.id],
    queryFn: () => base44.entities.CourseProgress.filter({ created_by: user?.email }),
    enabled: !!user?.email,
  });

  const progress = progressData?.[0];
  const completedLessons = progress?.completed_lessons || [];
  const lessonFullId = `${trackId}-${moduleId}-${lessonId}`;
  const isComplete = completedLessons.includes(lessonFullId);

  const markCompleteMutation = useMutation({
    mutationFn: async () => {
      if (!user?.email) return;
      
      const newCompletedLessons = [...completedLessons];
      const isFirstCompletion = !newCompletedLessons.includes(lessonFullId);
      
      if (isFirstCompletion) {
        newCompletedLessons.push(lessonFullId);
      }

      // Check if all lessons in module are complete
      const allModuleLessons = module?.lessons?.map(l => `${trackId}-${moduleId}-${l.id}`) || [];
      const moduleComplete = allModuleLessons.every(id => newCompletedLessons.includes(id));
      
      let newCompletedModules = progress?.completed_modules || [];
      const moduleFullId = `${trackId}-${moduleId}`;
      const isFirstModuleCompletion = moduleComplete && !newCompletedModules.includes(moduleFullId);
      
      if (isFirstModuleCompletion) {
        newCompletedModules = [...newCompletedModules, moduleFullId];
      }

      // Calculate points
      let pointsToAdd = 0;
      if (isFirstCompletion) pointsToAdd += 10; // 10 points per lesson
      if (isFirstModuleCompletion) pointsToAdd += 50; // 50 bonus points for module

      const currentPoints = progress?.points || 0;
      const newPoints = currentPoints + pointsToAdd;

      // Check for badges
      const badges = [...(progress?.badges || [])];
      if (isFirstModuleCompletion && badges.length === 0) {
        badges.push({ id: 'first_module', earned_date: new Date().toISOString() });
      }

      // Fast learner badge - check if 5 lessons completed today
      const today = new Date().toDateString();
      const lessonsCompletedToday = newCompletedLessons.filter(l => {
        // This is simplified - in production you'd track completion dates
        return true;
      }).length;
      if (lessonsCompletedToday >= 5 && !badges.find(b => b.id === 'fast_learner')) {
        badges.push({ id: 'fast_learner', earned_date: new Date().toISOString() });
      }

      const data = {
        track_id: trackId,
        completed_lessons: newCompletedLessons,
        completed_modules: newCompletedModules,
        points: newPoints,
        badges: badges,
      };

      if (progress?.id) {
        await base44.entities.CourseProgress.update(progress.id, data);
      } else {
        await base44.entities.CourseProgress.create(data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress'] });
    }
  });

  // Get navigation info
  const getNavigation = () => {
    if (!track || !module) return { prev: null, next: null };

    const allLessons = [];
    track.modules?.forEach(m => {
      m.lessons?.forEach(l => {
        allLessons.push({ track: track.id, module: m.id, lesson: l.id, title: l.title, moduleTitle: m.title });
      });
    });

    const currentIndex = allLessons.findIndex(l => l.lesson === lessonId && l.module === moduleId);
    
    return {
      prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
      next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
      currentIndex,
      total: allLessons.length
    };
  };

  const nav = getNavigation();

  if (!track || !module || !lesson) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Lesson Not Found</h2>
            <p className="text-slate-600 mb-4">The requested lesson could not be found.</p>
            <Link to={createPageUrl('Academy')}>
              <Button>Return to Academy</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to={createPageUrl(`Track?id=${trackId}`)} 
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <p className="text-sm text-slate-500">{track.title} • {module.title}</p>
                <h1 className="font-semibold text-slate-900">{lesson.title}</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/253764dc9_image.png" 
                alt="SiteSee Logo" 
                className="h-5"
              />
              <div className="flex items-center gap-3">
              <span className="text-sm text-slate-500">
                {nav.currentIndex + 1} of {nav.total}
              </span>
              {isComplete ? (
                <Badge className="bg-emerald-100 text-emerald-700 border-0 gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Completed
                </Badge>
              ) : (
                <Badge variant="secondary" className="gap-1">
                  <Clock className="w-3 h-3" />
                  {lesson.duration}
                </Badge>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Video */}
        {lesson.videoUrl && (
          <div className="mb-8">
            <VideoPlayer videoUrl={lesson.videoUrl} title={lesson.title} />
          </div>
        )}

        {/* Main Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h2:border-b prose-h2:pb-2 prose-h2:mb-4 prose-h3:text-lg prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-pre:bg-slate-900 prose-pre:text-slate-100">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3">Key Takeaways</h3>
                  <ul className="space-y-2">
                    {lesson.keyTakeaways.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-blue-800">
                        <CheckCircle2 className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Warnings */}
        {lesson.warnings && lesson.warnings.length > 0 && (
          <Card className="mb-8 border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-3">Important Warnings</h3>
                  <ul className="space-y-2">
                    {lesson.warnings.map((warning, i) => (
                      <li key={i} className="flex items-start gap-2 text-amber-800">
                        <AlertTriangle className="w-4 h-4 mt-1 text-amber-600 flex-shrink-0" />
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <div>
            {nav.prev ? (
              <Link to={createPageUrl(`Lesson?track=${nav.prev.track}&module=${nav.prev.module}&lesson=${nav.prev.lesson}`)}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="flex items-center gap-3">
            {!isComplete && (
              <Button 
                onClick={() => markCompleteMutation.mutate()}
                className="bg-emerald-600 hover:bg-emerald-700 gap-2"
                disabled={markCompleteMutation.isPending}
              >
                <CheckCircle2 className="w-4 h-4" />
                Mark as Complete
              </Button>
            )}

            {nav.next ? (
              <Link to={createPageUrl(`Lesson?track=${nav.next.track}&module=${nav.next.module}&lesson=${nav.next.lesson}`)}>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Next Lesson
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : module.quiz ? (
              <Link to={createPageUrl(`Quiz?track=${trackId}&module=${moduleId}`)}>
                <Button className="gap-2 bg-amber-600 hover:bg-amber-700">
                  Take Quiz
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to={createPageUrl(`Track?id=${trackId}`)}>
                <Button className="gap-2">
                  Back to Track
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}