'use client';

import { useWizard } from '@/hooks/use-wizard';

const TOTAL_STEPS = 4;

export function WizardProgress() {
  const { state } = useWizard();

  return (
    <div className="text-center text-sm text-zinc-500">
      Step {state.currentStep} of {TOTAL_STEPS}
    </div>
  );
}
