'use client';

import { Info } from 'lucide-react';
import { useConfigurator } from '@/hooks/use-configurator';
import { OptionSelector } from '../option-selector';
import { Slider } from '@/components/ui/slider';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  bandStyleOptions,
  cathedralOptions,
  paveStyleOptions,
  fitOptions,
  bandWidthConfig,
  ringSizeConfig,
  getBandStyleDescription,
  getCathedralDescription,
  getPaveStyleDescription,
  getFitDescription,
} from '@/data/configurator/band';
import type {
  BandStyleType,
  CathedralType,
  PaveStyleType,
  FitType,
} from '@/types/configurator';

export function BandPanel() {
  const { state, dispatch } = useConfigurator();
  const { style, cathedral, paveStyle, bandWidth, ringSize, fit } = state.band;

  return (
    <div className="space-y-6">
      {/* Style */}
      <OptionSelector
        label="Style"
        subtitle={getBandStyleDescription(style)}
        options={bandStyleOptions}
        value={style}
        onChange={(value: BandStyleType) =>
          dispatch({ type: 'SET_BAND_STYLE', payload: value })
        }
        columns={2}
      />

      {/* Cathedral */}
      <OptionSelector
        label="Cathedral"
        subtitle={getCathedralDescription(cathedral)}
        options={cathedralOptions}
        value={cathedral}
        onChange={(value: CathedralType) =>
          dispatch({ type: 'SET_CATHEDRAL', payload: value })
        }
        columns={2}
      />

      {/* Pave Style */}
      <OptionSelector
        label="Pave Style"
        subtitle={getPaveStyleDescription(paveStyle)}
        options={paveStyleOptions}
        value={paveStyle}
        onChange={(value: PaveStyleType) =>
          dispatch({ type: 'SET_PAVE_STYLE', payload: value })
        }
        columns={2}
      />

      {/* Band Width */}
      <div className="space-y-3">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium">Band Width</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="size-3.5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Band width in millimeters</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-xs text-muted-foreground">Band Width</p>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Slider
              value={[bandWidth]}
              onValueChange={(values) =>
                dispatch({ type: 'SET_BAND_WIDTH', payload: values[0] })
              }
              min={bandWidthConfig.min}
              max={bandWidthConfig.max}
              step={bandWidthConfig.step}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">{bandWidthConfig.min}</span>
              <span className="text-xs text-muted-foreground">{bandWidthConfig.max}</span>
            </div>
          </div>
          <div className="w-16 px-3 py-2 border border-border rounded-md text-sm text-center">
            {bandWidth.toFixed(1)}
          </div>
        </div>
      </div>

      {/* Ring Size */}
      <div className="space-y-3">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium">Ring Size (US)</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="size-3.5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>US/Canada standard ring sizing</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-xs text-muted-foreground">Ring sizes are presented in US/Canada standard sizing</p>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Slider
              value={[ringSize]}
              onValueChange={(values) =>
                dispatch({ type: 'SET_RING_SIZE', payload: values[0] })
              }
              min={ringSizeConfig.min}
              max={ringSizeConfig.max}
              step={ringSizeConfig.step}
              className="w-full"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">{ringSizeConfig.min}</span>
              <span className="text-xs text-muted-foreground">{ringSizeConfig.max}</span>
            </div>
          </div>
          <div className="w-16 px-3 py-2 border border-border rounded-md text-sm text-center">
            {ringSize}
          </div>
        </div>
      </div>

      {/* Fit */}
      <OptionSelector
        label="Fit"
        subtitle={getFitDescription(fit)}
        options={fitOptions}
        value={fit}
        onChange={(value: FitType) =>
          dispatch({ type: 'SET_FIT', payload: value })
        }
        columns={2}
      />
    </div>
  );
}
