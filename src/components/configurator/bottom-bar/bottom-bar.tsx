'use client';

import { useMemo, useState } from 'react';
import { useConfigurator } from '@/hooks/use-configurator';
import { calculateSettingPrice } from '@/lib/configurator/pricing';
import { Button } from '@/components/ui/button';
import { PriceDisplay } from './price-display';
import { WhatsNextDialog } from '../whats-next-dialog';

export function BottomBar() {
  const { state } = useConfigurator();
  const [showWhatsNext, setShowWhatsNext] = useState(false);

  const calculatedPrice = useMemo(() => calculateSettingPrice(state), [state]);

  const handleSave = () => {
    // For MVP, just show an alert
    alert('Design saved! (MVP placeholder)');
  };

  const handleNext = () => {
    setShowWhatsNext(true);
  };

  return (
    <>
      <div className="sticky bottom-0 border-t border-border/40 bg-background/80 backdrop-blur-lg px-6 py-5 lg:px-8 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1">
            <PriceDisplay price={calculatedPrice} />
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={handleSave}
              className="hidden sm:inline-flex border-border/60 hover:bg-secondary/50 transition-all active:scale-95 h-12 px-8 font-semibold"
            >
              Save Design
            </Button>
            <Button 
              onClick={handleNext}
              className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all h-12 px-8 font-semibold"
            >
              Continue to Stones →
            </Button>
          </div>
        </div>
      </div>

      <WhatsNextDialog open={showWhatsNext} onOpenChange={setShowWhatsNext} />
    </>
  );
}
