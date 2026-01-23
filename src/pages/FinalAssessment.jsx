import React, { useState } from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  Award,
  RotateCcw,
  Clock,
  AlertCircle
} from "lucide-react";
import QuizQuestion from "@/components/academy/QuizQuestion";
import { finalAssessment, generateCertificateId } from "@/components/academy/courseData";

export default function FinalAssessment() {
  const queryClient = useQueryClient();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

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

  const saveCertificateMutation = useMutation({
    mutationFn: async (passed) => {
      if (!user?.email || !passed) return;
      
      const certificateId = generateCertificateId();
      const data = {
        ...progress,
        final_assessment_score: score,
        certificate_issued: true,
        certificate_id: certificateId,
        certificate_date: new Date().toISOString(),
      };

      if (progress?.id) {
        await base44.entities.CourseProgress.update(progress.id, data);
      } else {
        await base44.entities.CourseProgress.create(data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress'] });
    }
  });

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    let correct = 0;
    finalAssessment.questions.forEach(q => {
      const userAnswer = answers[q.id];
      if (q.type === 'multiple') {
        const correctSet = new Set(q.correctAnswer);
        const userSet = new Set(userAnswer || []);
        if (correctSet.size === userSet.size && [...correctSet].every(x => userSet.has(x))) {
          correct++;
        }
      } else {
        if (userAnswer === q.correctAnswer) {
          correct++;
        }
      }
    });

    const calculatedScore = Math.round((correct / finalAssessment.questions.length) * 100);
    setScore(calculatedScore);
    setSubmitted(true);

    if (calculatedScore >= finalAssessment.passingScore) {
      saveCertificateMutation.mutate(true);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const isCorrect = (question) => {
    const userAnswer = answers[question.id];
    if (question.type === 'multiple') {
      const correctSet = new Set(question.correctAnswer);
      const userSet = new Set(userAnswer || []);
      return correctSet.size === userSet.size && [...correctSet].every(x => userSet.has(x));
    }
    return userAnswer === question.correctAnswer;
  };

  const passed = score !== null && score >= finalAssessment.passingScore;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to={createPageUrl('Academy')} className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Academy
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-amber-500/20 rounded-xl">
              <Trophy className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{finalAssessment.title}</h1>
              <p className="text-white/70">{finalAssessment.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>~30 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span>{finalAssessment.passingScore}% required to pass</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>{finalAssessment.questions.length} questions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {submitted && (
          <Card className={`mb-8 ${passed ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-full ${passed ? 'bg-emerald-100' : 'bg-red-100'}`}>
                    {passed ? (
                      <Award className="w-10 h-10 text-emerald-600" />
                    ) : (
                      <XCircle className="w-10 h-10 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${passed ? 'text-emerald-900' : 'text-red-900'}`}>
                      {passed ? 'Certification Complete!' : 'Assessment Not Passed'}
                    </h2>
                    <p className={passed ? 'text-emerald-700' : 'text-red-700'}>
                      {passed 
                        ? 'Congratulations! You are now a NexDT Certified User.'
                        : `You scored ${score}%. You need ${finalAssessment.passingScore}% to pass. Review the course material and try again.`
                      }
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-5xl font-bold ${passed ? 'text-emerald-600' : 'text-red-600'}`}>{score}%</p>
                  <p className="text-sm text-slate-500">Final Score</p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                {passed ? (
                  <Link to={createPageUrl('Certificate')}>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2" size="lg">
                      <Award className="w-5 h-5" />
                      View Certificate
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Button onClick={handleRetry} variant="outline" className="gap-2">
                      <RotateCcw className="w-4 h-4" />
                      Try Again
                    </Button>
                    <Link to={createPageUrl('Academy')}>
                      <Button variant="outline" className="gap-2">
                        Review Courses
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {!submitted && (
          <div className="mb-6 flex items-center justify-between">
            <p className="text-slate-600">
              Answer all questions and submit to receive your certification.
            </p>
            <span className="text-sm text-slate-500">
              {Object.keys(answers).length} of {finalAssessment.questions.length} answered
            </span>
          </div>
        )}

        <div className="space-y-6">
          {finalAssessment.questions.map((question, index) => (
            <QuizQuestion
              key={question.id}
              question={question}
              index={index}
              onAnswer={handleAnswer}
              showResult={submitted}
              userAnswer={answers[question.id]}
              isCorrect={isCorrect(question)}
            />
          ))}
        </div>

        {!submitted && (
          <div className="flex justify-end mt-8 pt-6 border-t border-slate-200">
            <Button 
              onClick={handleSubmit}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 gap-2"
              disabled={Object.keys(answers).length < finalAssessment.questions.length}
            >
              <Award className="w-5 h-5" />
              Submit Assessment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}