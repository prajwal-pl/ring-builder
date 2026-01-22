'use client';

import { useWizard } from '@/hooks/use-wizard';
import { cn } from '@/lib/utils';

const TOTAL_STEPS = 4;
const STEPS = [
  { label: 'Style' },
  { label: 'Shape' },
  { label: 'Carat' },
  { label: 'Timeline' },
];

export function WizardProgress() {
  const { state } = useWizard();
  const progress = (state.currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-end px-1">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
            Progress
          </p>
          <p className="text-sm font-medium text-foreground">
            {STEPS[state.currentStep - 1]?.label || 'Configuring'} 
            <span className="text-muted-foreground ml-1.5 font-normal">
              ({state.currentStep}/{TOTAL_STEPS})
            </span>
          </p>
        </div>
      </div>
      
      <div className="relative h-1.5 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-primary transition-all duration-500 ease-out rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between px-0.5">
        {STEPS.map((step, i) => {
          const stepNum = i + 1;
          const isActive = stepNum === state.currentStep;
          const isCompleted = stepNum < state.currentStep;

          return (
            <div 
              key={step.label}
              className={cn(
                "flex flex-col items-center gap-1.5 transition-all duration-300",
                isActive ? "opacity-100" : "opacity-40"
              )}
            >
              <div className={cn(
                "size-1.5 rounded-full transition-all duration-300",
                isActive ? "bg-primary scale-125 ring-4 ring-primary/20" : 
                isCompleted ? "bg-primary" : "bg-muted-foreground/30"
              )} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
