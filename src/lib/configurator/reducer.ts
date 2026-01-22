import type { ConfiguratorState, ConfiguratorAction } from '@/types/configurator';

export const initialConfiguratorState: ConfiguratorState = {
  metal: {
    headAndBandColor: '14k-white',
  },
  diamonds: {
    quality: null,
    clarity: null,
    color: null,
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

    case 'SET_DIAMOND_QUALITY':
      return {
        ...state,
        diamonds: {
          ...state.diamonds,
          quality: action.payload,
        },
      };

    case 'SET_DIAMOND_CLARITY':
      return {
        ...state,
        diamonds: {
          ...state.diamonds,
          clarity: action.payload,
        },
      };

    case 'SET_DIAMOND_COLOR':
      return {
        ...state,
        diamonds: {
          ...state.diamonds,
          color: action.payload,
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
