import React from 'react';
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export default function VideoPlayer({ videoUrl, title }) {
  // Extract YouTube video ID from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return (
      <Card className="aspect-video bg-slate-900 flex items-center justify-center">
        <div className="text-center text-slate-400">
          <PlayCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Video not available</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-slate-900">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}