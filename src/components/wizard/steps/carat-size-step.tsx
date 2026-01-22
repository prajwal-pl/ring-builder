'use client';

import { useEffect } from 'react';
import { useWizard } from '@/hooks/use-wizard';
import { useWizardNavigation } from '@/hooks/use-wizard-navigation';
import { WizardStepContainer } from '../wizard-step-container';
import { SelectionGrid } from '../selection-grid';
import { caratSizes } from '@/data/wizard/carat-sizes';
import type { CaratSize } from '@/types/wizard';

export function CaratSizeStep() {
  const { state, dispatch } = useWizard();
  const { goNext } = useWizardNavigation();

  // Sync step number when component mounts
  useEffect(() => {
    if (state.currentStep !== 3) {
      dispatch({ type: 'GO_TO_STEP', payload: 3 });
    }
  }, [state.currentStep, dispatch]);

  const handleSizeSelect = (sizeId: CaratSize) => {
    dispatch({ type: 'SET_CARAT_SIZE', payload: sizeId });
    goNext();
  };

  return (
    <WizardStepContainer
      title="Select your center stone size"
      subtitle="Once you're in the ring builder you can easily set an exact carat weight"
    >
      <div className="max-w-2xl mx-auto">
        <SelectionGrid
          options={caratSizes}
          selectedId={state.selections.caratSize}
          onSelect={handleSizeSelect}
          columns={2}
          variant="compact"
        />
      </div>
    </WizardStepContainer>
  );
}
