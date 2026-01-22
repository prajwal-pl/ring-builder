'use client';

import { Info } from 'lucide-react';
import { useConfigurator } from '@/hooks/use-configurator';
import { OptionSelector } from '../option-selector';
import { Input } from '@/components/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  engravingStyleOptions,
  surpriseStonesOptions,
  engravingConfig,
  getSurpriseStonesDescription,
} from '@/data/configurator/more';
import type { EngravingStyleType, SurpriseStonesType } from '@/types/configurator';

export function MorePanel() {
  const { state, dispatch } = useConfigurator();
  const { engraving, engravingStyle, surpriseStones } = state.more;

  const handleEngravingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, engravingConfig.maxLength);
    dispatch({ type: 'SET_ENGRAVING', payload: value });
  };

  return (
    <div className="space-y-6">
      {/* Add Engraving */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium">Add Engraving</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="size-3.5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Custom engraving for your ring</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-xs text-muted-foreground">
          Type a custom message for engraving ({engravingConfig.maxLength} characters max)
        </p>
        <Input
          type="text"
          placeholder={engravingConfig.placeholder}
          value={engraving}
          onChange={handleEngravingChange}
          maxLength={engravingConfig.maxLength}
          className="w-full"
        />
      </div>

      {/* Engraving Style */}
      <OptionSelector
        label="Engraving Style"
        subtitle="Choose your font-style"
        options={engravingStyleOptions}
        value={engravingStyle}
        onChange={(value: EngravingStyleType) =>
          dispatch({ type: 'SET_ENGRAVING_STYLE', payload: value })
        }
        columns={2}
      />

      {/* Surprise Stones */}
      <OptionSelector
        label="Surprise Stones"
        subtitle={getSurpriseStonesDescription(surpriseStones)}
        options={surpriseStonesOptions}
        value={surpriseStones}
        onChange={(value: SurpriseStonesType) =>
          dispatch({ type: 'SET_SURPRISE_STONES', payload: value })
        }
        columns={2}
      />
    </div>
  );
}
