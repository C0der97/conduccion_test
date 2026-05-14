
"use client";

import { Progress } from "@/components/ui/progress";

interface ProgressTrackerProps {
  current: number;
  total: number;
}

export function ProgressTracker({ current, total }: ProgressTrackerProps) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full space-y-2 mb-6">
      <div className="flex justify-between text-sm font-medium text-muted-foreground">
        <span>Pregunta {current + 1} de {total}</span>
        <span>{Math.round(percentage)}% Completado</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
