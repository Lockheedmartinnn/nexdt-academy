import React, { useState, useEffect } from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  GraduationCap, 
  Trophy, 
  BookOpen, 
  Clock,
  ChevronRight,
  Award,
  Play
} from "lucide-react";
import CourseCard from "@/components/academy/CourseCard";
import { tracks } from "@/components/academy/courseData";

export default function Academy() {
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
  
  const totalModules = tracks.reduce((acc, t) => acc + (t.modules?.length || 0), 0);
  const completedModulesCount = progress.completed_modules?.length || 0;
  const overallProgress = totalModules > 0 ? (completedModulesCount / totalModules) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://www.sitesee.com.au/wp-content/uploads/2022/10/sitesee-logo.svg" 
              alt="SiteSee Logo" 
              className="h-8 brightness-0 invert"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            NexDT Academy
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Master the digital twin platform for telecommunications infrastructure. 
            Complete all courses to earn your NexDT Certified User certificate.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to={createPageUrl('Track?id=fundamentals')}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                <Play className="w-5 h-5" />
                Start Learning
              </Button>
            </Link>
            {progress.certificate_issued && (
              <Link to={createPageUrl('Certificate')}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2">
                  <Award className="w-5 h-5" />
                  View Certificate
                </Button>
              </Link>
            )}
          </div>

          {/* Progress Overview */}
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white/70 text-sm">Your Progress</p>
                  <p className="text-2xl font-bold text-white">{Math.round(overallProgress)}% Complete</p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{tracks.length}</p>
                    <p className="text-white/70">Tracks</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{totalModules}</p>
                    <p className="text-white/70">Modules</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-400">{completedModulesCount}</p>
                    <p className="text-white/70">Completed</p>
                  </div>
                </div>
              </div>
              <Progress value={overallProgress} className="h-2 bg-white/20" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Course Tracks */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Course Tracks</h2>
            <p className="text-slate-600 mt-1">Complete all tracks to unlock the final certification assessment</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <CourseCard key={track.id} track={track} progress={progress} />
          ))}
        </div>

        {/* Final Assessment Card */}
        <div className="mt-12">
          <Card className={`border-2 ${overallProgress >= 100 ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}>
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl ${overallProgress >= 100 ? 'bg-emerald-100' : 'bg-slate-200'}`}>
                    <Trophy className={`w-8 h-8 ${overallProgress >= 100 ? 'text-emerald-600' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Final Certification Assessment</h3>
                    <p className="text-slate-600 mt-1">
                      {overallProgress >= 100 
                        ? 'You\'ve completed all tracks! Take the final assessment to earn your certificate.'
                        : 'Complete all course tracks to unlock the certification assessment.'}
                    </p>
                  </div>
                </div>
                <Link to={createPageUrl('FinalAssessment')}>
                  <Button 
                    size="lg"
                    disabled={overallProgress < 100}
                    className={overallProgress >= 100 ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                  >
                    {progress.certificate_issued ? 'Retake Assessment' : 'Take Assessment'}
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">NexDT Academy</span>
              <span>by SiteSee</span>
            </div>
            <p>Official training for the NexDT digital twin platform</p>
          </div>
        </div>
      </div>
    </div>
  );
}