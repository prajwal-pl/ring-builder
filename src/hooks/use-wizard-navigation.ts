'use client';

import { useRouter } from 'next/navigation';
import { useWizard } from './use-wizard';
import type { WizardStep } from '@/types/wizard';

export function useWizardNavigation() {
  const router = useRouter();
  const { state, dispatch } = useWizard();

  const goToStep = (step: WizardStep) => {
    dispatch({ type: 'GO_TO_STEP', payload: step });
    router.push(`/builder/step/${step}`);
  };

  const goNext = () => {
    if (state.currentStep < 4) {
      const nextStep = (state.currentStep + 1) as WizardStep;
      dispatch({ type: 'NEXT_STEP' });
      router.push(`/builder/step/${nextStep}`);
    } else {
      dispatch({ type: 'SET_LOADING', payload: true });
      router.push('/builder/loading');
    }
  };

  const goBack = () => {
    if (state.currentStep > 1) {
      const prevStep = (state.currentStep - 1) as WizardStep;
      dispatch({ type: 'PREVIOUS_STEP' });
      router.push(`/builder/step/${prevStep}`);
    }
  };

  const skip = () => {
    if (state.currentStep < 4) {
      const nextStep = (state.currentStep + 1) as WizardStep;
      dispatch({ type: 'NEXT_STEP' });
      router.push(`/builder/step/${nextStep}`);
    } else {
      dispatch({ type: 'SET_LOADING', payload: true });
      router.push('/builder/loading');
    }
  };

  const reset = () => {
    dispatch({ type: 'RESET_WIZARD' });
    router.push('/builder/step/1');
  };

  return {
    currentStep: state.currentStep,
    goToStep,
    goNext,
    goBack,
    skip,
    reset,
    canGoBack: state.currentStep > 1,
  };
}
