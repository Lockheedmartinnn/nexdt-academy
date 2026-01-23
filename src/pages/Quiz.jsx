import React, { useState } from 'react';
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw
} from "lucide-react";
import QuizQuestion from "@/components/academy/QuizQuestion";
import { tracks } from "@/components/academy/courseData";

export default function Quiz() {
  const urlParams = new URLSearchParams(window.location.search);
  const trackId = urlParams.get('track');
  const moduleId = urlParams.get('module');
  
  const queryClient = useQueryClient();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const track = tracks.find(t => t.id === trackId);
  const module = track?.modules?.find(m => m.id === moduleId);
  const quiz = module?.quiz;

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

  const saveProgressMutation = useMutation({
    mutationFn: async (passed) => {
      if (!user?.email || !passed) return;
      
      const moduleFullId = `${trackId}-${moduleId}`;
      let newCompletedModules = progress?.completed_modules || [];
      
      if (!newCompletedModules.includes(moduleFullId)) {
        newCompletedModules = [...newCompletedModules, moduleFullId];
      }

      const quizScores = {
        ...(progress?.quiz_scores || {}),
        [moduleFullId]: score
      };

      const data = {
        track_id: trackId,
        completed_modules: newCompletedModules,
        quiz_scores: quizScores,
        completed_lessons: progress?.completed_lessons || [],
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
    if (!quiz) return;

    let correct = 0;
    quiz.questions.forEach(q => {
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

    const calculatedScore = Math.round((correct / quiz.questions.length) * 100);
    setScore(calculatedScore);
    setSubmitted(true);

    // Save if passed (70% or higher)
    if (calculatedScore >= 70) {
      saveProgressMutation.mutate(true);
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

  const passed = score !== null && score >= 70;

  if (!track || !module || !quiz) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Quiz Not Found</h2>
            <p className="text-slate-600 mb-4">The requested quiz could not be found.</p>
            <Link to={createPageUrl('Academy')}>
              <Button>Return to Academy</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Get next module
  const currentModuleIndex = track.modules?.findIndex(m => m.id === moduleId) || 0;
  const nextModule = track.modules?.[currentModuleIndex + 1];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to={createPageUrl(`Track?id=${trackId}`)} 
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <p className="text-sm text-slate-500">{track.title}</p>
                <h1 className="font-semibold text-slate-900">{module.title} - Quiz</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img 
                src="https://www.sitesee.com.au/wp-content/uploads/2022/10/sitesee-logo.svg" 
                alt="SiteSee Logo" 
                className="h-5"
              />
              {!submitted && (
                <span className="text-sm text-slate-500">
                  {Object.keys(answers).length} of {quiz.questions.length} answered
                </span>
              )}
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
                      <Trophy className="w-8 h-8 text-emerald-600" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${passed ? 'text-emerald-900' : 'text-red-900'}`}>
                      {passed ? 'Congratulations!' : 'Not Quite'}
                    </h2>
                    <p className={passed ? 'text-emerald-700' : 'text-red-700'}>
                      {passed 
                        ? `You passed with ${score}%! You can now proceed to the next module.`
                        : `You scored ${score}%. You need 70% to pass. Review the material and try again.`
                      }
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-slate-900">{score}%</p>
                  <p className="text-sm text-slate-500">Your Score</p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                {!passed && (
                  <Button onClick={handleRetry} variant="outline" className="gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Try Again
                  </Button>
                )}
                {passed && nextModule ? (
                  <Link to={createPageUrl(`Track?id=${trackId}`)}>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                      Continue to Next Module
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ) : passed && (
                  <Link to={createPageUrl(`Track?id=${trackId}`)}>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                      Back to Track
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {quiz.questions.map((question, index) => (
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
              className="bg-blue-600 hover:bg-blue-700"
              disabled={Object.keys(answers).length < quiz.questions.length}
            >
              Submit Quiz
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}