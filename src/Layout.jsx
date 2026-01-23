import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { GraduationCap, Award, BookOpen, Home } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  // Hide layout for certificate page (print-friendly)
  if (currentPageName === 'Certificate') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Minimal top bar for branding */}
      {currentPageName !== 'Academy' && (
        <div className="bg-white border-b border-slate-200 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              to={createPageUrl('Academy')} 
              className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors"
            >
              <img 
                src="https://www.sitesee.com.au/wp-content/uploads/2022/10/sitesee-logo.svg" 
                alt="SiteSee Logo" 
                className="h-6"
              />
              <span className="font-semibold text-sm">NexDT Academy</span>
            </Link>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}