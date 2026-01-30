import React from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { User, LogOut, GraduationCap, Award, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function ProfileSidebar() {
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

  const handleLogout = () => {
    base44.auth.logout();
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen">
      {/* User Profile Section */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12 bg-blue-600">
            <AvatarFallback className="bg-blue-600 text-white font-semibold">
              {getInitials(user?.full_name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 truncate">{user?.full_name || 'User'}</p>
            <p className="text-xs text-slate-500 truncate">{user?.email}</p>
          </div>
        </div>
        {user?.role && (
          <div className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
            {user.role}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        <Link to={createPageUrl('Academy')}>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <GraduationCap className="w-4 h-4" />
            Academy
          </Button>
        </Link>
        
        {progress.certificate_issued && (
          <Link to={createPageUrl('Certificate')}>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Award className="w-4 h-4" />
              My Certificate
            </Button>
          </Link>
        )}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-200">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}