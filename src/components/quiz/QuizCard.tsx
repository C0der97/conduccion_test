
"use client";

import { useState, useEffect } from "react";
import { Question } from "@/app/lib/questions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Info, ArrowRight, Loader2 } from "lucide-react";
import { trafficLawAdvisor, TrafficLawAdvisorOutput } from "@/ai/flows/traffic-law-advisor";

interface QuizCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
  isReviewed?: boolean;
}

export function QuizCard({ question, onAnswer, selectedAnswer, isReviewed }: QuizCardProps) {
  const [localAnswer, setLocalAnswer] = useState<string>(selectedAnswer || "");
  const [aiExplanation, setAiExplanation] = useState<TrafficLawAdvisorOutput | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    setLocalAnswer(selectedAnswer || "");
    setAiExplanation(null);
  }, [question, selectedAnswer]);

  const handleConsultAi = async () => {
    if (loadingAi) return;
    setLoadingAi(true);
    try {
      const result = await trafficLawAdvisor({
        questionText: question.questionText,
        options: question.options,
        correctAnswerValue: question.correctAnswer,
        correctAnswerText: question.options.find(o => o.value === question.correctAnswer)?.text || ""
      });
      setAiExplanation(result);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoadingAi(false);
    }
  };

  const isCorrect = localAnswer === question.correctAnswer;
  const showFeedback = isReviewed && localAnswer;

  return (
    <Card className="border-none shadow-md overflow-hidden bg-white">
      <div className="h-2 bg-primary/10" />
      <CardHeader className="pb-4">
        <div className="text-xs font-bold text-primary tracking-wider uppercase mb-1">
          {question.section}
        </div>
        <CardTitle className="text-xl md:text-2xl font-headline text-[#1A3A5A] leading-tight">
          {question.questionText}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup
          value={localAnswer}
          onValueChange={(val) => {
            if (!isReviewed) {
              setLocalAnswer(val);
              onAnswer(val);
            }
          }}
          className="grid gap-3"
        >
          {question.options.map((option) => {
            const isOptionCorrect = option.value === question.correctAnswer;
            const isOptionSelected = localAnswer === option.value;
            
            let itemClasses = "flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-slate-50";
            
            if (showFeedback) {
              if (isOptionCorrect) {
                itemClasses = cn(itemClasses, "bg-green-50 border-green-500 text-green-900 font-bold");
              } else if (isOptionSelected && !isCorrect) {
                itemClasses = cn(itemClasses, "bg-red-50 border-red-500 text-red-900");
              } else {
                itemClasses = cn(itemClasses, "opacity-50 border-slate-200");
              }
            } else {
              if (isOptionSelected) {
                itemClasses = cn(itemClasses, "bg-primary/5 border-primary shadow-sm");
              } else {
                itemClasses = cn(itemClasses, "border-slate-100");
              }
            }

            return (
              <Label
                key={option.value}
                className={itemClasses}
              >
                <RadioGroupItem value={option.value} className="sr-only" />
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                  isOptionSelected ? "border-primary bg-primary text-white" : "border-slate-300"
                )}>
                  {isOptionSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
                <span className="flex-1 text-base">{option.text}</span>
                {showFeedback && isOptionCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                {showFeedback && isOptionSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
              </Label>
            );
          })}
        </RadioGroup>

        {showFeedback && (
          <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div className={cn(
              "p-4 rounded-xl border flex gap-3",
              isCorrect ? "bg-green-50/50 border-green-100" : "bg-red-50/50 border-red-100"
            )}>
              <Info className={cn("w-5 h-5 shrink-0", isCorrect ? "text-green-600" : "text-red-600")} />
              <div>
                <p className="font-bold text-sm uppercase tracking-wider mb-1">Retroalimentación Directa</p>
                <p className="text-slate-700 leading-relaxed">{question.explanation}</p>
              </div>
            </div>

            {!aiExplanation ? (
              <Button 
                variant="outline" 
                className="w-full h-12 border-[#4A3A8A] text-[#4A3A8A] hover:bg-slate-50 group"
                onClick={handleConsultAi}
                disabled={loadingAi}
              >
                {loadingAi ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Info className="w-4 h-4 mr-2" />
                )}
                Consultar Asesor Legal IA (Referencia Código Nacional)
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            ) : (
              <div className="p-5 rounded-xl border-2 border-[#4A3A8A]/20 bg-[#4A3A8A]/5 space-y-3 animate-in zoom-in-95">
                <div className="flex items-center gap-2 text-[#4A3A8A]">
                  <div className="p-1.5 rounded-full bg-[#4A3A8A] text-white">
                    <Info className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-sm tracking-wide">ANALISIS LEGAL IA</span>
                </div>
                <p className="text-slate-800 italic leading-relaxed">"{aiExplanation.explanation}"</p>
                <div className="pt-2 flex items-center gap-2 border-t border-[#4A3A8A]/10">
                  <span className="text-xs font-bold text-[#4A3A8A] uppercase">Referencia CNT:</span>
                  <span className="text-sm font-medium text-slate-700">{aiExplanation.codeReference}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
