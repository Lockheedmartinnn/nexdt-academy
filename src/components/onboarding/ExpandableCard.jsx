import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircle2,
  info: Info
};

const colorMap = {
  warning: 'text-amber-600 bg-amber-50',
  success: 'text-emerald-600 bg-emerald-50',
  info: 'text-blue-600 bg-blue-50',
  default: 'text-slate-600 bg-slate-50'
};

export default function ExpandableCard({ title, content, type = 'default', defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const Icon = iconMap[type] || Info;
  const colorClass = colorMap[type] || colorMap.default;

  return (
    <Card className="overflow-hidden">
      <CardHeader 
        className="cursor-pointer hover:bg-slate-50 transition-colors p-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${colorClass}`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </div>
      </CardHeader>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CardContent className="pt-0 pb-4 px-4">
              <div className="prose prose-sm max-w-none text-slate-700">
                {typeof content === 'string' ? (
                  <ReactMarkdown>{content}</ReactMarkdown>
                ) : (
                  content
                )}
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}