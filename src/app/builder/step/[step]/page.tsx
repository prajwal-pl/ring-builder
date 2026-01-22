import { notFound } from 'next/navigation';
import { RingStyleStep } from '@/components/wizard/steps/ring-style-step';
import { CenterStoneStep } from '@/components/wizard/steps/center-stone-step';
import { CaratSizeStep } from '@/components/wizard/steps/carat-size-step';
import { TimelineStep } from '@/components/wizard/steps/timeline-step';
import type { WizardStep } from '@/types/wizard';

interface StepPageProps {
  params: Promise<{ step: string }>;
}

const VALID_STEPS = ['1', '2', '3', '4'] as const;

const STEP_COMPONENTS: Record<WizardStep, React.ComponentType> = {
  1: RingStyleStep,
  2: CenterStoneStep,
  3: CaratSizeStep,
  4: TimelineStep,
};

export default async function StepPage({ params }: StepPageProps) {
  const { step } = await params;

  if (!VALID_STEPS.includes(step as (typeof VALID_STEPS)[number])) {
    notFound();
  }

  const stepNumber = parseInt(step, 10) as WizardStep;
  const StepComponent = STEP_COMPONENTS[stepNumber];

  return <StepComponent />;
}

export function generateStaticParams() {
  return VALID_STEPS.map((step) => ({ step }));
}
