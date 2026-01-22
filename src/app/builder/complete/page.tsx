'use client';

import { useWizard } from '@/hooks/use-wizard';
import { useWizardNavigation } from '@/hooks/use-wizard-navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ringStyles } from '@/data/wizard/ring-styles';
import { stoneShapes } from '@/data/wizard/stone-shapes';
import { metalColors } from '@/data/wizard/metal-colors';
import { caratSizes } from '@/data/wizard/carat-sizes';
import { timelines } from '@/data/wizard/timelines';

export default function CompletePage() {
  const { state } = useWizard();
  const { reset } = useWizardNavigation();
  const { selections } = state;

  const ringStyle = ringStyles.find((s) => s.id === selections.ringStyle);
  const stoneShape = stoneShapes.find((s) => s.id === selections.stoneShape);
  const metalColor = metalColors.find((m) => m.id === selections.metalColor);
  const caratSize = caratSizes.find((c) => c.id === selections.caratSize);
  const timeline = timelines.find((t) => t.id === selections.timeline);

  const summaryItems = [
    { label: 'Ring Style', value: ringStyle?.label || 'Not selected' },
    { label: 'Metal Color', value: metalColor?.label || 'Not selected' },
    { label: 'Stone Shape', value: stoneShape?.label || 'Not selected' },
    {
      label: 'Stone Type',
      value:
        selections.stoneType === 'natural'
          ? 'Natural'
          : selections.stoneType === 'lab-grown'
            ? 'Lab Grown'
            : 'Not selected',
    },
    { label: 'Carat Size', value: caratSize?.displayValue || 'Not selected' },
    { label: 'Timeline', value: timeline?.displayValue || 'Not selected' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Your Ring Summary</CardTitle>
          <CardDescription>Here are your selections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-2 border-b border-border last:border-0"
              >
                <span className="text-sm text-muted-foreground">{item.label}</span>
                <span className="text-sm font-medium text-foreground">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Button size="lg" className="w-full">
              Continue to 3D Builder
            </Button>
            <Button variant="outline" size="lg" className="w-full" onClick={reset}>
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
