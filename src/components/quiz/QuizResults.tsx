
"use client";

import { useState } from "react";
import { Question } from "@/app/lib/questions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  AlertCircle, 
  RefreshCcw, 
  BrainCircuit, 
  FileText, 
  CheckCircle2, 
  XCircle,
  ChevronDown,
  ChevronUp,
  Loader2
} from "lucide-react";
import { intelligentReviewMode, IntelligentReviewModeOutput } from "@/ai/flows/intelligent-review-mode";
import { cn } from "@/lib/utils";

interface QuizResultsProps {
  questions: Question[];
  answers: Record<string, string>;
  onRestart: () => void;
}

export function QuizResults({ questions, answers, onRestart }: QuizResultsProps) {
  const [loadingReview, setLoadingReview] = useState(false);
  const [reviewQuestions, setReviewQuestions] = useState<IntelligentReviewModeOutput | null>(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const score = questions.reduce((acc, q) => (answers[q.id] === q.correctAnswer ? acc + 1 : acc), 0);
  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= 90; // RUNT standard is usually around 90% for a safe pass

  const handleStartReview = async () => {
    setLoadingReview(true);
    const weakTopicsSet = new Set<string>();
    const incorrectTexts: string[] = [];

    questions.forEach(q => {
      if (answers[q.id] !== q.correctAnswer) {
        weakTopicsSet.add(q.topic);
        incorrectTexts.push(q.questionText);
      }
    });

    try {
      const result = await intelligentReviewMode({
        weakTopics: Array.from(weakTopicsSet),
        incorrectQuestionTexts: incorrectTexts.slice(0, 5) // Send some context
      });
      setReviewQuestions(result);
    } catch (error) {
      console.error("Review Error:", error);
    } finally {
      setLoadingReview(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8 px-4 sm:px-0 print:p-0">
      <Card className={cn(
        "border-none shadow-xl text-center overflow-hidden",
        passed ? "bg-green-50" : "bg-red-50"
      )}>
        <div className={cn("h-3", passed ? "bg-green-500" : "bg-red-500")} />
        <CardHeader className="pt-10">
          <div className="flex justify-center mb-4">
            {passed ? (
              <div className="p-4 bg-green-100 rounded-full">
                <Trophy className="w-12 h-12 text-green-600" />
              </div>
            ) : (
              <div className="p-4 bg-red-100 rounded-full">
                <AlertCircle className="w-12 h-12 text-red-600" />
              </div>
            )}
          </div>
          <CardTitle className="text-4xl font-headline text-[#1A3A5A]">
            {passed ? "¡EXAMEN APROBADO!" : "EXAMEN REPROBADO"}
          </CardTitle>
          <CardDescription className="text-lg">
            {passed 
              ? "Has demostrado un conocimiento sólido de las leyes de tránsito colombianas." 
              : "Necesitas repasar más los conceptos para aprobar el examen oficial del RUNT."}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-10">
          <div className="max-w-xs mx-auto space-y-2 mb-8">
            <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-slate-500">
              <span>Puntaje Final</span>
              <span>{percentage}%</span>
            </div>
            <Progress value={percentage} className={cn("h-4", passed ? "bg-green-200" : "bg-red-200")} />
            <p className="text-2xl font-bold text-slate-800">
              {score} de {questions.length} correctas
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 print:hidden">
            <Button onClick={onRestart} variant="outline" className="h-12 border-slate-300">
              <RefreshCcw className="w-4 h-4 mr-2" />
              Reintentar Simulacro
            </Button>
            <Button onClick={handlePrint} variant="outline" className="h-12 border-slate-300">
              <FileText className="w-4 h-4 mr-2" />
              Descargar Reporte (PDF)
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:hidden">
        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <CardTitle className="flex items-center text-[#1A3A5A]">
              <BrainCircuit className="w-5 h-5 mr-2 text-[#4A3A8A]" />
              Modo de Repaso Inteligente
            </CardTitle>
            <CardDescription>
              IA analiza tus errores y genera preguntas personalizadas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!reviewQuestions ? (
              <Button 
                onClick={handleStartReview} 
                className="w-full bg-[#4A3A8A] hover:bg-[#3a2d6e]"
                disabled={loadingReview}
              >
                {loadingReview ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <BrainCircuit className="w-4 h-4 mr-2" />
                )}
                Generar Preguntas de Repaso
              </Button>
            ) : (
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                  IA: Preguntas Personalizadas Listas
                </Badge>
                <div className="space-y-3">
                  {reviewQuestions.personalizedQuestions.map((pq, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm">
                      <p className="font-bold mb-1">{pq.questionText}</p>
                      <p className="text-slate-600 line-clamp-2">{pq.explanation}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full" onClick={() => setReviewQuestions(null)}>
                  Ver otras debilidades
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <CardTitle className="flex items-center text-[#1A3A5A]">
              <FileText className="w-5 h-5 mr-2 text-[#4A3A8A]" />
              Desglose de Temas
            </CardTitle>
            <CardDescription>
              Identifica en qué áreas fallaste.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from(new Set(questions.map(q => q.topic))).map(topic => {
              const topicQuestions = questions.filter(q => q.topic === topic);
              const correctCount = topicQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
              const topicPct = (correctCount / topicQuestions.length) * 100;
              
              return (
                <div key={topic} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold uppercase">
                    <span className="truncate mr-2">{topic}</span>
                    <span>{correctCount}/{topicQuestions.length}</span>
                  </div>
                  <Progress value={topicPct} className="h-1.5" />
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Button 
          variant="ghost" 
          className="w-full justify-between font-bold text-slate-600"
          onClick={() => setShowBreakdown(!showBreakdown)}
        >
          <span>Ver Revisión de Todas las Preguntas</span>
          {showBreakdown ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </Button>

        {showBreakdown && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {questions.map((q, idx) => {
              const isCorrect = answers[q.id] === q.correctAnswer;
              return (
                <div 
                  key={q.id} 
                  className={cn(
                    "p-4 rounded-lg border-l-4 flex gap-4 bg-white shadow-sm",
                    isCorrect ? "border-l-green-500" : "border-l-red-500"
                  )}
                >
                  <div className="shrink-0 mt-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold text-slate-800">{idx + 1}. {q.questionText}</p>
                    <div className="text-sm space-y-1">
                      <p><span className="font-semibold">Tu respuesta:</span> {q.options.find(o => o.value === answers[q.id])?.text || "No respondida"}</p>
                      {!isCorrect && (
                        <p className="text-green-600 font-semibold"><span className="text-slate-600">Respuesta correcta:</span> {q.options.find(o => o.value === q.correctAnswer)?.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="hidden print:block space-y-8 mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold">Historial Detallado de Respuestas</h2>
        {questions.map((q, idx) => (
          <div key={q.id} className="pb-4 border-b">
             <p className="font-bold">{idx + 1}. {q.questionText}</p>
             <p>Respuesta: {q.options.find(o => o.value === answers[q.id])?.text}</p>
             <p className="text-sm italic">Estado: {answers[q.id] === q.correctAnswer ? "Correcta" : "Incorrecta"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
