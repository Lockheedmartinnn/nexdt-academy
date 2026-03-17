import React, { useState } from 'react';
import { CheckCircle2, XCircle, Lock, HelpCircle } from 'lucide-react';

export default function CheckCard({ section, onCorrect, isUnlocked = true }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const maxAttempts = section.maxAttempts || 2;

  const isCorrect = selected === section.correctAnswer;
  const canSubmit = selected !== null && !submitted;
  const showExplanation = submitted && (isCorrect || attempts >= maxAttempts || revealed);

  const handleSubmit = () => {
    if (!selected) return;
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setSubmitted(true);

    if (selected === section.correctAnswer) {
      if (onCorrect) onCorrect();
    } else if (newAttempts >= maxAttempts) {
      setRevealed(true);
    }
  };

  const handleRetry = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const getOptionStyle = (optId) => {
    const base = {
      background: 'rgba(30,41,59,0.5)',
      border: '1px solid rgba(55,65,81,0.6)',
      color: '#CBD5E1',
      cursor: submitted ? 'default' : 'pointer',
      transition: 'all 0.15s ease',
    };

    if (!submitted) {
      if (selected === optId) {
        return { ...base, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.5)', color: '#93C5FD' };
      }
      return { ...base };
    }

    if (optId === section.correctAnswer) {
      return { ...base, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.4)', color: '#6EE7B7', cursor: 'default' };
    }
    if (optId === selected && !isCorrect) {
      return { ...base, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)', color: '#FCA5A5', cursor: 'default' };
    }
    return { ...base, opacity: 0.4, cursor: 'default' };
  };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      <div className="px-5 py-5">
        <div className="flex items-center gap-2 mb-4">
          {isUnlocked ? (
            <HelpCircle className="w-4 h-4" style={{ color: '#3B82F6' }} />
          ) : (
            <Lock className="w-4 h-4" style={{ color: '#6B7280' }} />
          )}
          <span className="text-xs font-mono font-medium tracking-wider" style={{ color: '#6B7280' }}>
            KNOWLEDGE CHECK
          </span>
          {attempts > 0 && !isCorrect && attempts < maxAttempts && (
            <span className="text-xs ml-auto" style={{ color: '#F59E0B' }}>
              {maxAttempts - attempts} attempt{maxAttempts - attempts !== 1 ? 's' : ''} remaining
            </span>
          )}
        </div>

        <p className="text-base font-medium mb-5" style={{ color: '#F9FAFB' }}>
          {section.question}
        </p>

        <div className="space-y-2.5">
          {section.options?.map((opt) => (
            <button
              key={opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              className="w-full text-left px-4 py-3.5 rounded-lg text-sm font-medium flex items-center gap-3"
              style={getOptionStyle(opt.id)}
            >
              <span
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                style={{
                  background: selected === opt.id && !submitted ? 'rgba(59,130,246,0.2)' : 'rgba(55,65,81,0.5)',
                  color: '#94A3B8',
                }}
              >
                {opt.id.toUpperCase()}
              </span>
              <span>{opt.text}</span>
              {submitted && opt.id === section.correctAnswer && (
                <CheckCircle2 className="w-4 h-4 ml-auto flex-shrink-0" style={{ color: '#10B981' }} />
              )}
              {submitted && opt.id === selected && !isCorrect && opt.id !== section.correctAnswer && (
                <XCircle className="w-4 h-4 ml-auto flex-shrink-0" style={{ color: '#EF4444' }} />
              )}
            </button>
          ))}
        </div>

        {/* Submit / Feedback */}
        <div className="mt-5">
          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: canSubmit ? '#3B82F6' : 'rgba(59,130,246,0.2)',
                color: canSubmit ? '#fff' : '#6B7280',
                cursor: canSubmit ? 'pointer' : 'not-allowed',
              }}
            >
              Submit Answer
            </button>
          )}

          {submitted && isCorrect && (
            <div className="p-4 rounded-lg" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
              <div className="flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-4 h-4" style={{ color: '#34D399' }} />
                <p className="font-semibold text-sm" style={{ color: '#34D399' }}>Correct</p>
              </div>
              {section.explanation && <p className="text-sm" style={{ color: '#94A3B8' }}>{section.explanation}</p>}
            </div>
          )}

          {submitted && !isCorrect && attempts < maxAttempts && (
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg flex-1" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p className="font-semibold text-sm" style={{ color: '#FCA5A5' }}>Incorrect — try again</p>
              </div>
              <button
                onClick={handleRetry}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ background: 'rgba(239,68,68,0.15)', color: '#FCA5A5', border: '1px solid rgba(239,68,68,0.3)' }}
              >
                Try Again
              </button>
            </div>
          )}

          {showExplanation && !isCorrect && (
            <div className="p-4 rounded-lg mt-3" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <p className="font-semibold text-sm mb-1" style={{ color: '#FCA5A5' }}>
                The correct answer is: <strong>{section.options?.find(o => o.id === section.correctAnswer)?.text}</strong>
              </p>
              {section.explanation && <p className="text-sm mt-1" style={{ color: '#94A3B8' }}>{section.explanation}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}