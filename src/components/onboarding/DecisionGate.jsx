import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DecisionGate({ question, options, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh] px-6"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center max-w-2xl">
        {question}
      </h2>
      
      <div className="grid gap-4 w-full max-w-2xl">
        {options.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-lg transition-all hover:border-blue-500 group"
              onClick={() => onSelect(option.value)}
            >
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {option.label}
                  </h3>
                  {option.description && (
                    <p className="text-sm text-slate-600">{option.description}</p>
                  )}
                </div>
                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}