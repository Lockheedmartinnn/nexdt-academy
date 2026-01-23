import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { PlayCircle, FileText, CheckCircle2, Lock, Clock } from "lucide-react";

export default function LessonCard({ lesson, moduleId, trackId, isCompleted, isLocked, index }) {
  const hasVideo = lesson.videoUrl;
  
  if (isLocked) {
    return (
      <Card className="opacity-60 bg-slate-50 border-slate-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <Lock className="w-5 h-5 text-slate-400" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-slate-500">{lesson.title}</h4>
              <p className="text-sm text-slate-400">Complete previous lessons to unlock</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Link to={createPageUrl(`Lesson?track=${trackId}&module=${moduleId}&lesson=${lesson.id}`)}>
      <Card className="group hover:shadow-lg transition-all duration-200 hover:border-blue-200 bg-white">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isCompleted 
                ? 'bg-emerald-100 text-emerald-600' 
                : hasVideo 
                  ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' 
                  : 'bg-slate-100 text-slate-600'
            } transition-colors`}>
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : hasVideo ? (
                <PlayCircle className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-400">LESSON {index + 1}</span>
                {hasVideo && (
                  <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600 border-0">
                    Video
                  </Badge>
                )}
              </div>
              <h4 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                {lesson.title}
              </h4>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{lesson.duration || '5 min'}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}