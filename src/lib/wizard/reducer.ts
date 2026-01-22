import type { WizardState, WizardAction, WizardStep } from '@/types/wizard';

export const initialState: WizardState = {
  currentStep: 1,
  selections: {
    ringStyle: null,
    metalColor: 'gold',
    stoneShape: null,
    stoneType: 'natural',
    caratSize: null,
    timeline: null,
  },
  isComplete: false,
  isLoading: false,
};

const MAX_STEP: WizardStep = 4;
const MIN_STEP: WizardStep = 1;

export function wizardReducer(
  state: WizardState,
  action: WizardAction
): WizardState {
  switch (action.type) {
    case 'SET_RING_STYLE':
      return {
        ...state,
        selections: { ...state.selections, ringStyle: action.payload },
      };

    case 'SET_METAL_COLOR':
      return {
        ...state,
        selections: { ...state.selections, metalColor: action.payload },
      };

    case 'SET_STONE_SHAPE':
      return {
        ...state,
        selections: { ...state.selections, stoneShape: action.payload },
      };

    case 'SET_STONE_TYPE':
      return {
        ...state,
        selections: { ...state.selections, stoneType: action.payload },
      };

    case 'SET_CARAT_SIZE':
      return {
        ...state,
        selections: { ...state.selections, caratSize: action.payload },
      };

    case 'SET_TIMELINE':
      return {
        ...state,
        selections: { ...state.selections, timeline: action.payload },
      };

    case 'GO_TO_STEP':
      return { ...state, currentStep: action.payload };

    case 'NEXT_STEP': {
      const nextStep = Math.min(state.currentStep + 1, MAX_STEP) as WizardStep;
      return { ...state, currentStep: nextStep };
    }

    case 'PREVIOUS_STEP': {
      const prevStep = Math.max(state.currentStep - 1, MIN_STEP) as WizardStep;
      return { ...state, currentStep: prevStep };
    }

    case 'COMPLETE_WIZARD':
      return { ...state, isComplete: true };

    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'RESET_WIZARD':
      return initialState;

    case 'HYDRATE_STATE':
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
