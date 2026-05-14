"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/app/lib/questions";
import { QuizCard } from "@/components/quiz/QuizCard";
import { ProgressTracker } from "@/components/quiz/ProgressTracker";
import { QuizResults } from "@/components/quiz/QuizResults";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  Clock, 
  AlertTriangle,
  Scale
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SimulatorPage() {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    if (isFinished) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFinished]);

  const handleAnswer = (val: string) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[currentIdx].id]: val }));
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const unansweredCount = QUESTIONS.length - Object.keys(answers).length;

  if (isFinished) {
    return <QuizResults questions={QUESTIONS} answers={answers} onRestart={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen bg-[#F1F4F6] pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
            <Scale className="w-6 h-6 text-primary" />
            <span className="font-headline font-bold text-lg text-primary hidden sm:inline">RutaLegal</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-sm font-bold text-slate-600">
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-slate-800"
              onClick={() => setIsFinished(true)}
            >
              Finalizar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Simulator */}
      <div className="max-w-4xl mx-auto px-4 pt-8 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <ProgressTracker current={currentIdx} total={QUESTIONS.length} />
          </div>
          <Badge variant="outline" className="h-8 border-slate-300 text-slate-500 whitespace-nowrap">
            {unansweredCount} restantes
          </Badge>
        </div>

        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <QuizCard 
            question={QUESTIONS[currentIdx]} 
            onAnswer={handleAnswer}
            selectedAnswer={answers[QUESTIONS[currentIdx].id]}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4">
          <Button 
            variant="ghost" 
            onClick={handlePrev} 
            disabled={currentIdx === 0}
            className="h-12 px-6 font-bold text-slate-500"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>

          {currentIdx === QUESTIONS.length - 1 ? (
            <Button 
              onClick={() => setIsFinished(true)}
              className="h-12 px-8 bg-[#27ae60] hover:bg-[#219653] font-bold shadow-lg"
            >
              Finalizar Examen
              <Send className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              className="h-12 px-8 bg-primary hover:bg-slate-800 font-bold shadow-lg"
            >
              Siguiente
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>

        {/* Instructions Alert */}
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3 text-sm text-blue-800">
          <AlertTriangle className="w-5 h-5 shrink-0 text-blue-500" />
          <p>
            <strong>Aviso de Simulación:</strong> Este examen compila las preguntas más frecuentes del RUNT. Para aprobar oficialmente en una escuela de conducción, usualmente se requiere un puntaje superior al 90%.
          </p>
        </div>
      </div>
    </div>
  );
}
