'use client';

import { useEffect } from 'react';
import { useWizard } from '@/hooks/use-wizard';
import { useWizardNavigation } from '@/hooks/use-wizard-navigation';
import { WizardStepContainer } from '../wizard-step-container';
import { SelectionGrid } from '../selection-grid';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { stoneShapes } from '@/data/wizard/stone-shapes';
import type { StoneShape, StoneType } from '@/types/wizard';

const stoneTypeOptions: { id: StoneType; label: string }[] = [
  { id: 'natural', label: 'Natural' },
  { id: 'lab-grown', label: 'Lab Grown' },
];

export function CenterStoneStep() {
  const { state, dispatch } = useWizard();
  const { goNext } = useWizardNavigation();

  // Sync step number when component mounts
  useEffect(() => {
    if (state.currentStep !== 2) {
      dispatch({ type: 'GO_TO_STEP', payload: 2 });
    }
  }, [state.currentStep, dispatch]);

  const handleShapeSelect = (shapeId: StoneShape) => {
    dispatch({ type: 'SET_STONE_SHAPE', payload: shapeId });
    goNext();
  };

  const handleTypeChange = (value: string) => {
    if (value) {
      dispatch({ type: 'SET_STONE_TYPE', payload: value as StoneType });
    }
  };

  return (
    <WizardStepContainer
      title="Choose your center stone"
      subtitle="The star of the show - your main diamond"
    >
      <div className="flex flex-col items-center gap-8">
        <ToggleGroup
          type="single"
          value={state.selections.stoneType || undefined}
          onValueChange={handleTypeChange}
          className="bg-muted p-1 rounded-full"
        >
          {stoneTypeOptions.map((option) => (
            <ToggleGroupItem
              key={option.id}
              value={option.id}
              className="rounded-full px-4 py-2 data-[state=on]:bg-background data-[state=on]:shadow-sm"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <SelectionGrid
          options={stoneShapes}
          selectedId={state.selections.stoneShape}
          onSelect={handleShapeSelect}
          columns={3}
        />
      </div>
    </WizardStepContainer>
  );
}
