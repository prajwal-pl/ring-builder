'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWizard } from '@/hooks/use-wizard';
import { ringStyles } from '@/data/wizard/ring-styles';
import { stoneShapes } from '@/data/wizard/stone-shapes';
import { metalColors } from '@/data/wizard/metal-colors';
import { caratSizes } from '@/data/wizard/carat-sizes';
import { timelines } from '@/data/wizard/timelines';
import { metalOptions } from '@/data/configurator/metals';
import { diamondQualities, diamondClarities, diamondColors } from '@/data/configurator/diamonds';
import { formatPrice, calculateSettingPrice } from '@/lib/configurator/pricing';
import { loadConfiguratorState } from '@/lib/configurator/storage';
import type { ConfiguratorState } from '@/types/configurator';

function getInitialConfiguratorState(): ConfiguratorState | null {
  if (typeof window === 'undefined') {
    return null;
  }
  return loadConfiguratorState();
}

export default function CheckoutPage() {
  const router = useRouter();
  const { state: wizardState } = useWizard();
  const { selections } = wizardState;
  const [configuratorState] = useState<ConfiguratorState | null>(getInitialConfiguratorState);

  // Wizard selections
  const ringStyle = ringStyles.find((s) => s.id === selections.ringStyle);
  const stoneShape = stoneShapes.find((s) => s.id === selections.stoneShape);
  const metalColor = metalColors.find((m) => m.id === selections.metalColor);
  const caratSize = caratSizes.find((c) => c.id === selections.caratSize);
  const timeline = timelines.find((t) => t.id === selections.timeline);

  // Configurator selections
  const selectedMetal = configuratorState
    ? metalOptions.find((m) => m.id === configuratorState.metal.headAndBandColor)
    : null;
  const selectedQuality = configuratorState?.diamonds.quality
    ? diamondQualities.find((q) => q.id === configuratorState.diamonds.quality)
    : null;
  const selectedClarity = configuratorState?.diamonds.clarity
    ? diamondClarities.find((c) => c.id === configuratorState.diamonds.clarity)
    : null;
  const selectedColor = configuratorState?.diamonds.color
    ? diamondColors.find((c) => c.id === configuratorState.diamonds.color)
    : null;

  const totalPrice = configuratorState ? calculateSettingPrice(configuratorState) : 0;

  const wizardSummary = [
    { label: 'Ring Style', value: ringStyle?.label || 'Not selected' },
    { label: 'Stone Shape', value: stoneShape?.label || 'Not selected' },
    { label: 'Wizard Metal', value: metalColor?.label || 'Not selected' },
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

  const configuratorSummary = [
    { label: 'Metal Color', value: selectedMetal?.label || 'Not selected' },
    { label: 'Diamond Quality', value: selectedQuality?.label || 'Not selected' },
    { label: 'Diamond Clarity', value: selectedClarity?.label || 'Not selected' },
    { label: 'Diamond Color', value: selectedColor?.label || 'Not selected' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-8">
      <Card className="max-w-lg w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Order Summary</CardTitle>
          <CardDescription>Review your custom ring configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Wizard Selections */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Initial Preferences</h3>
            <div className="space-y-2">
              {wizardSummary.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Configurator Selections */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Customizations</h3>
            <div className="space-y-2">
              {configuratorSummary.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Price */}
          <div className="pt-4 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Total (Setting)</span>
              <span className="text-xl font-bold text-primary">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Diamond price calculated separately based on availability
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-4">
            <Button size="lg" className="w-full">
              Contact Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={() => router.push('/builder/configurator')}
            >
              Back to Configurator
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="w-full"
              onClick={() => router.push('/builder/ring-style')}
            >
              Start Over
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
