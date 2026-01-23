import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Clock, BookOpen, CheckCircle2, ChevronRight } from "lucide-react";

export default function CourseCard({ track, progress }) {
  const completedModules = progress?.completed_modules?.filter(m => m.startsWith(track.id))?.length || 0;
  const totalModules = track.modules?.length || 0;
  const progressPercent = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
  const isComplete = progressPercent === 100;

  return (
    <Link to={createPageUrl(`Track?id=${track.id}`)}>
      <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white overflow-hidden">
        <div className={`h-2 ${track.color || 'bg-blue-600'}`} />
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className={`p-3 rounded-xl ${track.bgColor || 'bg-blue-50'}`}>
              {track.icon}
            </div>
            {isComplete && (
              <Badge className="bg-emerald-100 text-emerald-700 border-0">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Complete
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl font-semibold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
            {track.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-600 text-sm leading-relaxed">
            {track.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>{totalModules} modules</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{track.duration}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Progress</span>
              <span className="font-medium text-slate-900">{Math.round(progressPercent)}%</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-blue-600">
              {isComplete ? 'Review Course' : 'Continue Learning'}
            </span>
            <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}