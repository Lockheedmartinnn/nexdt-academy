import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from 'framer-motion';

export default function InteractiveChecklist({ items, title }) {
  const [checked, setChecked] = useState({});

  const handleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allChecked = items.every(item => checked[item.id]);

  return (
    <Card className={`transition-all ${allChecked ? 'border-emerald-500 bg-emerald-50/30' : ''}`}>
      <CardContent className="p-4">
        {title && (
          <h4 className="font-semibold text-slate-900 mb-3">{title}</h4>
        )}
        <div className="space-y-2">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              <Checkbox
                id={item.id}
                checked={checked[item.id]}
                onCheckedChange={() => handleCheck(item.id)}
              />
              <label
                htmlFor={item.id}
                className={`text-sm cursor-pointer ${
                  checked[item.id] ? 'text-slate-500 line-through' : 'text-slate-700'
                }`}
              >
                {item.label}
              </label>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}