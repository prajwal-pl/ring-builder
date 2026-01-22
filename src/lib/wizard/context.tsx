'use client';

import {
  createContext,
  useReducer,
  useEffect,
  type ReactNode,
  type Dispatch,
} from 'react';
import { wizardReducer, initialState } from './reducer';
import { loadState, saveState } from './storage';
import type { WizardState, WizardAction } from '@/types/wizard';

interface WizardContextValue {
  state: WizardState;
  dispatch: Dispatch<WizardAction>;
}

export const WizardContext = createContext<WizardContextValue | null>(null);

interface WizardProviderProps {
  children: ReactNode;
}

export function WizardProvider({ children }: WizardProviderProps) {
  const [state, dispatch] = useReducer(wizardReducer, initialState);

  // Hydrate from sessionStorage on mount
  useEffect(() => {
    const savedState = loadState();
    if (savedState) {
      dispatch({ type: 'HYDRATE_STATE', payload: savedState });
    }
  }, []);

  // Persist to sessionStorage on changes
  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <WizardContext.Provider value={{ state, dispatch }}>
      {children}
    </WizardContext.Provider>
  );
}
