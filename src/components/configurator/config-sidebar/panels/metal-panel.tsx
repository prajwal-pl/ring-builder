'use client';

import { useConfigurator } from '@/hooks/use-configurator';
import { metalOptions } from '@/data/configurator/metals';
import { cn } from '@/lib/utils';
import type { MetalType } from '@/types/configurator';

export function MetalPanel() {
  const { state, dispatch } = useConfigurator();
  const selectedMetal = state.metal.headAndBandColor;

  const handleSelect = (metalId: MetalType) => {
    dispatch({ type: 'SET_METAL', payload: metalId });
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Head & Band Color</p>
      <div className="grid grid-cols-2 gap-2">
        {metalOptions.map((metal) => (
          <button
            key={metal.id}
            onClick={() => handleSelect(metal.id)}
            className={cn(
              'flex items-center gap-2 px-3 py-2 rounded-md border text-sm transition-colors',
              selectedMetal === metal.id
                ? 'border-primary bg-primary/10 text-foreground'
                : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
            )}
          >
            <span
              className="size-4 rounded-full border border-border/50 shrink-0"
              style={{
                background: metal.id === 'mixed'
                  ? 'linear-gradient(135deg, #FFD700 0%, #E8E8E8 50%, #B76E79 100%)'
                  : metal.hexColor,
              }}
            />
            <span className="truncate">{metal.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
