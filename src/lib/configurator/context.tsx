'use client';

import { createContext, useReducer, useEffect, useRef, type ReactNode } from 'react';
import type { ConfiguratorState, ConfiguratorAction } from '@/types/configurator';
import { configuratorReducer, initialConfiguratorState } from './reducer';
import { saveConfiguratorState, loadConfiguratorState } from './storage';

interface ConfiguratorContextType {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
}

export const ConfiguratorContext = createContext<ConfiguratorContextType | null>(null);

interface ConfiguratorProviderProps {
  children: ReactNode;
}

function getInitialState(): ConfiguratorState {
  if (typeof window === 'undefined') {
    return initialConfiguratorState;
  }
  return loadConfiguratorState();
}

export function ConfiguratorProvider({ children }: ConfiguratorProviderProps) {
  const [state, dispatch] = useReducer(configuratorReducer, null, getInitialState);
  const isInitialMount = useRef(true);

  // Persist to localStorage on state changes (skip initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveConfiguratorState(state);
  }, [state]);

  return (
    <ConfiguratorContext.Provider value={{ state, dispatch }}>
      {children}
    </ConfiguratorContext.Provider>
  );
}
