import React, { useState } from 'react';
import { Brain } from 'lucide-react';

export default function ThinkCard({ section, onContinue }) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  const handleContinue = () => {
    setDone(true);
    if (onContinue) onContinue();
  };

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: 'rgba(109,40,217,0.08)', border: '1px solid rgba(139,92,246,0.25)' }}
    >
      <div className="px-5 py-5">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-4 h-4" style={{ color: '#A78BFA' }} />
          <span className="text-xs font-mono font-medium tracking-wider" style={{ color: '#A78BFA' }}>
            🧠 REFLECT BEFORE CONTINUING
          </span>
        </div>

        <p className="text-base font-medium mb-4" style={{ color: '#E9D5FF' }}>
          {section.question}
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Your thoughts (optional — not graded)"
          rows={3}
          className="w-full rounded-lg text-sm resize-none outline-none px-4 py-3"
          style={{
            background: 'rgba(0,0,0,0.25)',
            border: '1px solid rgba(139,92,246,0.2)',
            color: '#CBD5E1',
            lineHeight: '1.5',
          }}
        />

        <button
          onClick={handleContinue}
          disabled={done}
          className="mt-3 px-5 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: done ? 'rgba(139,92,246,0.2)' : 'rgba(139,92,246,0.3)',
            color: done ? '#6B7280' : '#C4B5FD',
            border: '1px solid rgba(139,92,246,0.3)',
            cursor: done ? 'default' : 'pointer',
          }}
        >
          {done ? '✓ Noted — continuing' : 'Continue →'}
        </button>
      </div>
    </div>
  );
}