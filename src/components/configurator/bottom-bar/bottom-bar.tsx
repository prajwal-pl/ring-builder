'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useConfigurator } from '@/hooks/use-configurator';
import { calculateSettingPrice } from '@/lib/configurator/pricing';
import { Button } from '@/components/ui/button';
import { PriceDisplay } from './price-display';

export function BottomBar() {
  const router = useRouter();
  const { state } = useConfigurator();

  const calculatedPrice = useMemo(() => calculateSettingPrice(state), [state]);

  const handleSave = () => {
    // For MVP, just show an alert
    alert('Design saved! (MVP placeholder)');
  };

  const handleNext = () => {
    router.push('/builder/checkout');
  };

  return (
    <div className="sticky bottom-0 border-t border-border bg-background px-4 py-4 lg:px-6">
      <div className="flex items-center justify-between">
        <PriceDisplay price={calculatedPrice} />

        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={handleNext}>
            Next →
          </Button>
        </div>
      </div>
    </div>
  );
}
