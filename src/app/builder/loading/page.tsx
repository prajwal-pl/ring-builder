'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

const LOADING_STEPS = [
  'Analyzing your style preferences...',
  'Calculating 3D proportions...',
  'Sourcing the finest materials...',
  'Rendering your unique design...',
  'Almost ready...',
];

export default function LoadingPage() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // Cycle through loading steps
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
    }, 600);

    const timer = setTimeout(() => {
      router.push('/builder/configurator');
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfcfd]">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-150 animate-pulse" />
        <Spinner className="size-16 text-primary relative z-10" />
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-4 text-center px-6 max-w-sm">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Generating your custom ring</h2>
        
        <div className="h-6 flex items-center justify-center">
          <p key={stepIndex} className="text-sm font-medium text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-500">
            {LOADING_STEPS[stepIndex]}
          </p>
        </div>

        <div className="mt-4 w-64 h-1.5 bg-secondary rounded-full overflow-hidden border border-border/10 shadow-inner">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(0,0,0,0.1)]"
            style={{ width: `${((stepIndex + 1) / LOADING_STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
