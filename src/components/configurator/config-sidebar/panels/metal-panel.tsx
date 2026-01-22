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
    <div className="space-y-5 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1 px-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/80">
          Head & Band Color
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {metalOptions.map((metal) => {
          const isSelected = selectedMetal === metal.id;
          return (
            <button
              key={metal.id}
              onClick={() => handleSelect(metal.id)}
              className={cn(
                'group relative flex items-center gap-3 px-4 py-3.5 rounded-[20px] border transition-all duration-300 overflow-hidden',
                isSelected
                  ? 'border-primary bg-primary shadow-lg shadow-primary/20 scale-[1.02]'
                  : 'border-border/30 bg-white/50 hover:border-primary/40 hover:bg-white hover:shadow-md'
              )}
            >
              <div 
                className={cn(
                  "size-7 rounded-full border shadow-inner shrink-0 transition-transform duration-500 group-hover:scale-110",
                  isSelected ? "border-white/40 ring-2 ring-white/20" : "border-border/60"
                )}
                style={{
                  background: metal.id === 'mixed'
                    ? 'linear-gradient(135deg, #FFD700 0%, #E8E8E8 50%, #B76E79 100%)'
                    : metal.hexColor,
                }}
              />
              <span className={cn(
                "text-[11px] font-bold truncate transition-colors duration-300 tracking-tight",
                isSelected ? "text-primary-foreground" : "text-foreground/70 group-hover:text-foreground"
              )}>
                {metal.label}
              </span>
              
              {isSelected && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/20 blur-md rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
