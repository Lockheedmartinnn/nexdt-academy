import React, { useRef } from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowLeft,
  Download,
  Share2,
  Award,
  CheckCircle2
} from "lucide-react";
import { format } from "date-fns";

export default function Certificate() {
  const certificateRef = useRef(null);

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => base44.auth.me(),
  });

  const { data: progressData } = useQuery({
    queryKey: ['progress', user?.id],
    queryFn: () => base44.entities.CourseProgress.filter({ created_by: user?.email }),
    enabled: !!user?.email,
  });

  const progress = progressData?.[0];

  if (!progress?.certificate_issued) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <Award className="w-16 h-16 mx-auto text-slate-300 mb-4" />
            <h2 className="text-xl font-bold mb-2">No Certificate Yet</h2>
            <p className="text-slate-600 mb-6">
              Complete all courses and pass the final assessment to earn your NextDT Certified User certificate.
            </p>
            <Link to={createPageUrl('Academy')}>
              <Button>Continue Learning</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const certificateDate = progress.certificate_date 
    ? format(new Date(progress.certificate_date), 'MMMM d, yyyy')
    : format(new Date(), 'MMMM d, yyyy');

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <Link to={createPageUrl('Academy')} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Onboarding
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={() => window.print()}>
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Certificate */}
      <div className="max-w-4xl mx-auto">
        <div 
          ref={certificateRef}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none"
        >
          {/* Certificate Design */}
          <div className="relative p-12 md:p-16">
            {/* Border Pattern */}
            <div className="absolute inset-4 border-4 border-slate-200 rounded-xl" />
            <div className="absolute inset-6 border border-slate-100 rounded-lg" />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative text-center">
              {/* Logo & Header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6972e5e40a5362b66fb3a35c/253764dc9_image.png" 
                  alt="SiteSee Logo" 
                  className="h-10"
                />
                <div className="text-left">
                  <h2 className="text-xl font-bold text-slate-900">NextDT Onboarding</h2>
                </div>
              </div>

              {/* Certificate Title */}
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-medium mb-2">
                  Certificate of Completion
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  NextDT Certified User
                </h1>
              </div>

              {/* Recipient */}
              <div className="mb-10">
                <p className="text-slate-500 mb-2">This certifies that</p>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 border-b-2 border-slate-200 pb-2 inline-block px-8">
                  {user?.full_name || 'Certificate Holder'}
                </p>
              </div>

              {/* Description */}
              <div className="max-w-2xl mx-auto mb-10">
                <p className="text-slate-600 leading-relaxed">
                  has successfully completed the NextDT Onboarding certification program, 
                  demonstrating comprehensive knowledge of the NextDT digital twin platform 
                  for telecommunications infrastructure management.
                </p>
              </div>

              {/* Completion Details */}
              <div className="flex justify-center gap-12 mb-10">
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Date Issued</p>
                  <p className="font-semibold text-slate-900">{certificateDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Score</p>
                  <p className="font-semibold text-slate-900">{progress.final_assessment_score}%</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Certificate ID</p>
                  <p className="font-mono text-sm text-slate-900">{progress.certificate_id}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-10">
                <p className="text-sm text-slate-500 mb-4">Demonstrated Proficiency In:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'NextDT Fundamentals',
                    'Colocation Workflows',
                    'Data & CSV Management',
                    'BIM Administration',
                    'Advanced Configuration'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-sm text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature Area */}
              <div className="flex justify-center gap-16">
                <div className="text-center">
                  <div className="w-40 border-b border-slate-300 mb-2" />
                  <p className="text-sm text-slate-500">SiteSee Training</p>
                </div>
                <div className="text-center">
                  <div className="w-40 border-b border-slate-300 mb-2" />
                  <p className="text-sm text-slate-500">NextDT Onboarding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-12 py-4 flex items-center justify-between text-sm text-slate-500 border-t border-slate-100">
            <span>Verify at: nexdt.sitesee.io/verify/{progress.certificate_id}</span>
            <span>© {new Date().getFullYear()} SiteSee. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}