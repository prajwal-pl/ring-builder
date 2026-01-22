'use client';

import { ExternalLink } from 'lucide-react';
import { useConfigurator } from '@/hooks/use-configurator';
import { OptionSelector } from '../option-selector';
import { Button } from '@/components/ui/button';
import {
  centerStoneOptions,
  diamondTypeOptions,
  getCenterStoneLabel,
  getDiamondTypeDescription,
} from '@/data/configurator/diamonds';
import type { CenterStoneCount, DiamondType } from '@/types/configurator';

export function DiamondsPanel() {
  const { state, dispatch } = useConfigurator();
  const { centerStones, diamondType } = state.diamonds;

  return (
    <div className="space-y-6">
      {/* Center Stones */}
      <OptionSelector
        label="Center Stones"
        subtitle={getCenterStoneLabel(centerStones)}
        options={centerStoneOptions}
        value={centerStones}
        onChange={(value: CenterStoneCount) =>
          dispatch({ type: 'SET_CENTER_STONES', payload: value })
        }
        columns={3}
      />

      {/* Select Your Stones */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium">Select Your Stones</span>
        </div>
        <p className="text-xs text-muted-foreground">Center: 2 carat Cushion</p>
        <Button
          variant="outline"
          className="gap-2"
        >
          Center
          <ExternalLink className="size-3.5" />
        </Button>
      </div>

      {/* Diamond Type */}
      <OptionSelector
        label="Diamond Type"
        subtitle={getDiamondTypeDescription(diamondType)}
        options={diamondTypeOptions}
        value={diamondType}
        onChange={(value: DiamondType) =>
          dispatch({ type: 'SET_DIAMOND_TYPE', payload: value })
        }
        columns={3}
      />
    </div>
  );
}
