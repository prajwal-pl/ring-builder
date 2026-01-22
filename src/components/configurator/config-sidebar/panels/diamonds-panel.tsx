'use client';

import { useConfigurator } from '@/hooks/use-configurator';
import { diamondQualities, diamondClarities, diamondColors } from '@/data/configurator/diamonds';
import { cn } from '@/lib/utils';
import type { DiamondQuality, DiamondClarity, DiamondColor } from '@/types/configurator';

export function DiamondsPanel() {
  const { state, dispatch } = useConfigurator();
  const { quality, clarity, color } = state.diamonds;

  return (
    <div className="space-y-6">
      {/* Quality Section */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Cut Quality</p>
        <div className="flex gap-2">
          {diamondQualities.map((q) => (
            <button
              key={q.id}
              onClick={() => dispatch({ type: 'SET_DIAMOND_QUALITY', payload: q.id as DiamondQuality })}
              className={cn(
                'flex-1 px-3 py-2 rounded-md border text-sm transition-colors',
                quality === q.id
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
              )}
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clarity Section */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Clarity</p>
        <div className="flex flex-wrap gap-2">
          {diamondClarities.map((c) => (
            <button
              key={c.id}
              onClick={() => dispatch({ type: 'SET_DIAMOND_CLARITY', payload: c.id as DiamondClarity })}
              className={cn(
                'px-3 py-2 rounded-md border text-sm transition-colors',
                clarity === c.id
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
              )}
              title={c.description}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Section */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Color</p>
        <div className="flex flex-wrap gap-2">
          {diamondColors.map((c) => (
            <button
              key={c.id}
              onClick={() => dispatch({ type: 'SET_DIAMOND_COLOR', payload: c.id as DiamondColor })}
              className={cn(
                'px-3 py-2 rounded-md border text-sm transition-colors',
                color === c.id
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
              )}
              title={c.description}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
