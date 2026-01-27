import React from 'react';
import { motion } from 'framer-motion';
import ExpandableCard from './ExpandableCard';
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from 'lucide-react';

export default function ToolFocus({ 
  mainQuestion, 
  sections, 
  onComplete, 
  completionText = "I understand when to use this" 
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-6 py-8"
    >
      {/* Main Question */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          {mainQuestion}
        </h2>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-3 mb-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ExpandableCard
              title={section.title}
              content={section.content}
              type={section.type || 'default'}
              defaultExpanded={section.defaultExpanded}
            />
          </motion.div>
        ))}
      </div>

      {/* Completion Button */}
      <div className="flex justify-center pt-4">
        <Button
          size="lg"
          onClick={onComplete}
          className="bg-blue-600 hover:bg-blue-700 gap-2"
        >
          <CheckCircle2 className="w-5 h-5" />
          {completionText}
        </Button>
      </div>
    </motion.div>
  );
}