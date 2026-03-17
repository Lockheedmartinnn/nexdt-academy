import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, Trophy, AlertCircle } from 'lucide-react';

export default function QuizUI({ section, onPass, onFail }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const questions = section.questions || [];
  const total = questions.length;
  const q = questions[currentQ];
  const passingScore = section.passingScore || 80;
  const isCorrect = submitted && selected === q?.correctAnswer;

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    const correct = selected === q.correctAnswer;
    const newAnswers = [...answers, { questionId: q.id, selected, correct }];
    setAnswers(newAnswers);

    if (currentQ < total - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      // Finish
      const correctCount = newAnswers.filter(a => a.correct).length;
      const pct = Math.round((correctCount / total) * 100);
      setScore(pct);
      setFinished(true);
      if (pct >= passingScore) {
        if (onPass) onPass(pct);
      } else {
        if (onFail) onFail(pct);
      }
    }
  };

  const handleRetry = () => {
    setCurrentQ(0);
    setSelected(null);
    setSubmitted(false);
    setAnswers([]);
    setFinished(false);
    setScore(0);
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
      return base;
    }

    if (optId === q.correctAnswer) {
      return { ...base, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.4)', color: '#6EE7B7', cursor: 'default' };
    }
    if (optId === selected && selected !== q.correctAnswer) {
      return { ...base, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)', color: '#FCA5A5', cursor: 'default' };
    }
    return { ...base, opacity: 0.35, cursor: 'default' };
  };

  if (finished) {
    const passed = score >= passingScore;
    const correctCount = answers.filter(a => a.correct).length;

    return (
      <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: `1px solid ${passed ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
        <div className="px-6 py-8 text-center">
          <div className="flex justify-center mb-4">
            {passed ? (
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)' }}>
                <Trophy className="w-8 h-8" style={{ color: '#10B981' }} />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)' }}>
                <AlertCircle className="w-8 h-8" style={{ color: '#EF4444' }} />
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold mb-1" style={{ color: '#F9FAFB' }}>
            {passed ? 'You passed!' : 'Not quite'}
          </h3>
          <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
            {passed ? 'Well done — this module is complete.' : `Review the material and try again.`}
          </p>

          <div className="inline-flex flex-col items-center px-8 py-5 rounded-xl mb-6" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(55,65,81,0.5)' }}>
            <p className="text-4xl font-bold mb-1" style={{ color: passed ? '#10B981' : '#EF4444' }}>
              {score}%
            </p>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              {correctCount}/{total} correct · {passingScore}% required
            </p>
          </div>

          <div className="space-y-2 text-left mb-6">
            {answers.map((ans, i) => {
              const qData = questions[i];
              return (
                <div key={i} className="flex items-start gap-3 px-4 py-2.5 rounded-lg" style={{ background: 'rgba(15,23,42,0.4)' }}>
                  {ans.correct ? (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                  ) : (
                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#EF4444' }} />
                  )}
                  <p className="text-sm" style={{ color: '#94A3B8' }}>{qData?.question}</p>
                </div>
              );
            })}
          </div>

          {!passed && (
            <button
              onClick={handleRetry}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 mx-auto"
              style={{ background: 'rgba(239,68,68,0.15)', color: '#FCA5A5', border: '1px solid rgba(239,68,68,0.3)' }}
            >
              <RotateCcw className="w-4 h-4" />
              Retry Quiz
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: '#111827', border: '1px solid rgba(55,65,81,0.8)' }}>
      {/* Header */}
      <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(55,65,81,0.6)' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-medium" style={{ color: '#94A3B8' }}>
            MODULE QUIZ
          </span>
          <span className="text-xs font-medium" style={{ color: '#6B7280' }}>
            Question {currentQ + 1} of {total}
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 rounded-full w-full" style={{ background: 'rgba(55,65,81,0.5)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${((currentQ) / total) * 100}%`, background: '#3B82F6' }}
          />
        </div>
      </div>

      <div className="px-5 py-5">
        <p className="text-base font-semibold mb-5" style={{ color: '#F9FAFB', lineHeight: 1.6 }}>
          {q?.question}
        </p>

        <div className="space-y-2.5">
          {q?.options?.map((opt) => (
            <button
              key={opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              className="w-full text-left px-4 py-3.5 rounded-lg text-sm font-medium flex items-center gap-3"
              style={getOptionStyle(opt.id)}
            >
              <span
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                style={{ background: 'rgba(55,65,81,0.5)', color: '#94A3B8', minWidth: '1.5rem' }}
              >
                {opt.id.toUpperCase()}
              </span>
              <span className="flex-1">{opt.text}</span>
              {submitted && opt.id === q.correctAnswer && (
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#10B981' }} />
              )}
              {submitted && opt.id === selected && selected !== q.correctAnswer && (
                <XCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#EF4444' }} />
              )}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {submitted && (
          <div
            className="mt-4 p-4 rounded-lg"
            style={{
              background: isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)',
              border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.2)'}`,
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              {isCorrect
                ? <CheckCircle2 className="w-4 h-4" style={{ color: '#34D399' }} />
                : <XCircle className="w-4 h-4" style={{ color: '#FCA5A5' }} />
              }
              <p className="font-semibold text-sm" style={{ color: isCorrect ? '#34D399' : '#FCA5A5' }}>
                {isCorrect ? 'Correct' : 'Incorrect'}
              </p>
            </div>
            {q.explanation && <p className="text-sm" style={{ color: '#94A3B8' }}>{q.explanation}</p>}
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex justify-between items-center">
          <p className="text-xs" style={{ color: '#4B5563' }}>{passingScore}% required to pass</p>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selected}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: selected ? '#3B82F6' : 'rgba(59,130,246,0.15)',
                color: selected ? '#fff' : '#6B7280',
                cursor: selected ? 'pointer' : 'not-allowed',
              }}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2"
              style={{ background: '#3B82F6', color: '#fff' }}
            >
              {currentQ < total - 1 ? 'Next Question' : 'See Results'}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}