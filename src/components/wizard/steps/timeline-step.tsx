'use client';

import { useEffect } from 'react';
import { useWizard } from '@/hooks/use-wizard';
import { useWizardNavigation } from '@/hooks/use-wizard-navigation';
import { WizardStepContainer } from '../wizard-step-container';
import { SelectionCard } from '../selection-card';
import { timelines } from '@/data/wizard/timelines';
import type { Timeline } from '@/types/wizard';

export function TimelineStep() {
  const { state, dispatch } = useWizard();
  const { goNext } = useWizardNavigation();

  // Sync step number when component mounts
  useEffect(() => {
    if (state.currentStep !== 4) {
      dispatch({ type: 'GO_TO_STEP', payload: 4 });
    }
  }, [state.currentStep, dispatch]);

  const handleTimelineSelect = (timelineId: Timeline) => {
    dispatch({ type: 'SET_TIMELINE', payload: timelineId });
    goNext();
  };

  return (
    <WizardStepContainer
      title="When do you need your ring?"
      subtitle="Help us recommend the best timeline for your ring"
    >
      <div className="max-w-md mx-auto flex flex-col gap-3">
        {timelines.map((timeline) => (
          <SelectionCard
            key={timeline.id}
            option={timeline}
            isSelected={state.selections.timeline === timeline.id}
            onSelect={handleTimelineSelect}
            variant="compact"
          />
        ))}
      </div>
    </WizardStepContainer>
  );
}
