import type { ConfiguratorState, ConfiguratorAction } from '@/types/configurator';

export const initialConfiguratorState: ConfiguratorState = {
  metal: {
    headAndBandColor: '14k-white',
  },
  diamonds: {
    centerStones: 'one-stone',
    diamondType: 'natural',
  },
  head: {
    basketHalo: 'halo',
    prongCount: '4-classic',
    prongTips: 'claw',
    prongPave: 'none',
  },
  band: {
    style: 'round',
    cathedral: 'none',
    paveStyle: 'none',
    bandWidth: 1.7,
    ringSize: 6,
    fit: 'standard-fit',
  },
  more: {
    engraving: '',
    engravingStyle: 'block',
    surpriseStones: 'none',
  },
  settingPrice: 2143,
};

export function configuratorReducer(
  state: ConfiguratorState,
  action: ConfiguratorAction
): ConfiguratorState {
  switch (action.type) {
    case 'SET_METAL':
      return {
        ...state,
        metal: {
          ...state.metal,
          headAndBandColor: action.payload,
        },
      };

    case 'SET_CENTER_STONES':
      return {
        ...state,
        diamonds: {
          ...state.diamonds,
          centerStones: action.payload,
        },
      };

    case 'SET_DIAMOND_TYPE':
      return {
        ...state,
        diamonds: {
          ...state.diamonds,
          diamondType: action.payload,
        },
      };

    case 'SET_BASKET_HALO':
      return {
        ...state,
        head: {
          ...state.head,
          basketHalo: action.payload,
        },
      };

    case 'SET_PRONG_COUNT':
      return {
        ...state,
        head: {
          ...state.head,
          prongCount: action.payload,
        },
      };

    case 'SET_PRONG_TIPS':
      return {
        ...state,
        head: {
          ...state.head,
          prongTips: action.payload,
        },
      };

    case 'SET_PRONG_PAVE':
      return {
        ...state,
        head: {
          ...state.head,
          prongPave: action.payload,
        },
      };

    case 'SET_BAND_STYLE':
      return {
        ...state,
        band: {
          ...state.band,
          style: action.payload,
        },
      };

    case 'SET_CATHEDRAL':
      return {
        ...state,
        band: {
          ...state.band,
          cathedral: action.payload,
        },
      };

    case 'SET_PAVE_STYLE':
      return {
        ...state,
        band: {
          ...state.band,
          paveStyle: action.payload,
        },
      };

    case 'SET_BAND_WIDTH':
      return {
        ...state,
        band: {
          ...state.band,
          bandWidth: action.payload,
        },
      };

    case 'SET_RING_SIZE':
      return {
        ...state,
        band: {
          ...state.band,
          ringSize: action.payload,
        },
      };

    case 'SET_FIT':
      return {
        ...state,
        band: {
          ...state.band,
          fit: action.payload,
        },
      };

    case 'SET_ENGRAVING':
      return {
        ...state,
        more: {
          ...state.more,
          engraving: action.payload,
        },
      };

    case 'SET_ENGRAVING_STYLE':
      return {
        ...state,
        more: {
          ...state.more,
          engravingStyle: action.payload,
        },
      };

    case 'SET_SURPRISE_STONES':
      return {
        ...state,
        more: {
          ...state.more,
          surpriseStones: action.payload,
        },
      };

    case 'UPDATE_PRICE':
      return {
        ...state,
        settingPrice: action.payload,
      };

    case 'INIT_FROM_WIZARD':
      return {
        ...state,
        ...action.payload,
      };

    case 'RESET':
      return initialConfiguratorState;

    default:
      return state;
  }
}
