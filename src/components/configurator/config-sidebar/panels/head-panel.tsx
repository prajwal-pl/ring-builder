'use client';

import { useConfigurator } from '@/hooks/use-configurator';
import { OptionSelector } from '../option-selector';
import {
  basketHaloOptions,
  prongCountOptions,
  prongTipsOptions,
  prongPaveOptions,
  getBasketHaloDescription,
  getProngCountDescription,
  getProngTipsDescription,
  getProngPaveDescription,
} from '@/data/configurator/head';
import type {
  BasketHaloType,
  ProngCountType,
  ProngTipsType,
  ProngPaveType,
} from '@/types/configurator';

export function HeadPanel() {
  const { state, dispatch } = useConfigurator();
  const { basketHalo, prongCount, prongTips, prongPave } = state.head;

  return (
    <div className="space-y-6">
      {/* Basket & Halo */}
      <OptionSelector
        label="Basket & Halo"
        subtitle={getBasketHaloDescription(basketHalo)}
        options={basketHaloOptions}
        value={basketHalo}
        onChange={(value: BasketHaloType) =>
          dispatch({ type: 'SET_BASKET_HALO', payload: value })
        }
        columns={3}
      />

      {/* Prong Count */}
      <OptionSelector
        label="Prong Count"
        subtitle={getProngCountDescription(prongCount)}
        options={prongCountOptions}
        value={prongCount}
        onChange={(value: ProngCountType) =>
          dispatch({ type: 'SET_PRONG_COUNT', payload: value })
        }
        columns={2}
      />

      {/* Prong Tips */}
      <OptionSelector
        label="Prong Tips"
        subtitle={getProngTipsDescription(prongTips)}
        options={prongTipsOptions}
        value={prongTips}
        onChange={(value: ProngTipsType) =>
          dispatch({ type: 'SET_PRONG_TIPS', payload: value })
        }
        columns={3}
      />

      {/* Prong Pave */}
      <OptionSelector
        label="Prong Pave"
        subtitle={getProngPaveDescription(prongPave)}
        options={prongPaveOptions}
        value={prongPave}
        onChange={(value: ProngPaveType) =>
          dispatch({ type: 'SET_PRONG_PAVE', payload: value })
        }
        columns={2}
      />
    </div>
  );
}
