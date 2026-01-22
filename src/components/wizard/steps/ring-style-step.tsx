'use client';

import { useEffect } from 'react';
import { useWizard } from '@/hooks/use-wizard';
import { useWizardNavigation } from '@/hooks/use-wizard-navigation';
import { WizardStepContainer } from '../wizard-step-container';
import { SelectionGrid } from '../selection-grid';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ringStyles } from '@/data/wizard/ring-styles';
import { metalColors } from '@/data/wizard/metal-colors';
import type { RingStyle, MetalColor } from '@/types/wizard';

export function RingStyleStep() {
  const { state, dispatch } = useWizard();
  const { goNext } = useWizardNavigation();

  // Sync step number when component mounts
  useEffect(() => {
    if (state.currentStep !== 1) {
      dispatch({ type: 'GO_TO_STEP', payload: 1 });
    }
  }, [state.currentStep, dispatch]);

  const handleStyleSelect = (styleId: RingStyle) => {
    dispatch({ type: 'SET_RING_STYLE', payload: styleId });
    goNext();
  };

  const handleMetalChange = (value: string) => {
    if (value) {
      dispatch({ type: 'SET_METAL_COLOR', payload: value as MetalColor });
    }
  };

  return (
    <WizardStepContainer
      title="Let's start designing your ring"
      subtitle="Get started quickly. Don't worry, you'll be able to fully customize your design in our 3D Ring Builder."
    >
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="bg-secondary/40 backdrop-blur-sm p-1 rounded-xl border border-border/40 shadow-sm animate-in fade-in zoom-in-95 duration-500">
          <ToggleGroup
            type="single"
            value={state.selections.metalColor || undefined}
            onValueChange={handleMetalChange}
            className="gap-1"
          >
            {metalColors.map((metal) => (
              <ToggleGroupItem
                key={metal.id}
                value={metal.id}
                className="rounded-lg px-4 py-2 data-[state=on]:bg-background data-[state=on]:shadow-sm data-[state=on]:text-primary transition-all duration-300 h-9"
              >
                <span
                  className="w-4 h-4 rounded-full border border-white/40 shadow-inner mr-2"
                  style={{ backgroundColor: metal.hexColor }}
                />
                <span className="text-xs font-bold tracking-tight">{metal.label}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <SelectionGrid
          options={ringStyles}
          selectedId={state.selections.ringStyle}
          onSelect={handleStyleSelect}
          columns={3}
        />
      </div>
    </WizardStepContainer>
  );
}
