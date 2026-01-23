import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export default function QuizQuestion({ 
  question, 
  index, 
  onAnswer, 
  showResult,
  userAnswer,
  isCorrect 
}) {
  const [selected, setSelected] = useState(userAnswer || (question.type === 'multiple' ? [] : ''));

  const handleSingleSelect = (value) => {
    setSelected(value);
    onAnswer(question.id, value);
  };

  const handleMultiSelect = (optionId, checked) => {
    const newSelected = checked 
      ? [...selected, optionId]
      : selected.filter(id => id !== optionId);
    setSelected(newSelected);
    onAnswer(question.id, newSelected);
  };

  return (
    <Card className={`transition-all ${
      showResult 
        ? isCorrect 
          ? 'border-emerald-200 bg-emerald-50/50' 
          : 'border-red-200 bg-red-50/50'
        : 'border-slate-200'
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
            showResult
              ? isCorrect
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-red-100 text-red-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {index + 1}
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="font-medium text-slate-900 text-lg">
              {question.question}
            </h3>

            {question.type === 'multiple' ? (
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div key={option.id} className="flex items-center gap-3">
                    <Checkbox
                      id={`${question.id}-${option.id}`}
                      checked={selected.includes(option.id)}
                      onCheckedChange={(checked) => handleMultiSelect(option.id, checked)}
                      disabled={showResult}
                    />
                    <Label 
                      htmlFor={`${question.id}-${option.id}`}
                      className={`cursor-pointer ${
                        showResult && question.correctAnswer.includes(option.id)
                          ? 'text-emerald-700 font-medium'
                          : ''
                      }`}
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
                <p className="text-sm text-slate-500 mt-2">Select all that apply</p>
              </div>
            ) : (
              <RadioGroup 
                value={selected} 
                onValueChange={handleSingleSelect}
                disabled={showResult}
                className="space-y-3"
              >
                {question.options.map((option) => (
                  <div key={option.id} className="flex items-center gap-3">
                    <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
                    <Label 
                      htmlFor={`${question.id}-${option.id}`}
                      className={`cursor-pointer ${
                        showResult && question.correctAnswer === option.id
                          ? 'text-emerald-700 font-medium'
                          : ''
                      }`}
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {showResult && (
              <div className={`p-4 rounded-lg mt-4 ${
                isCorrect ? 'bg-emerald-100' : 'bg-amber-50'
              }`}>
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  )}
                  <div>
                    <p className={`font-medium ${isCorrect ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}