import type { ConfiguratorState } from '@/types/configurator';
import { initialConfiguratorState } from './reducer';

const STORAGE_KEY = 'ring-configurator-state';

export function saveConfiguratorState(state: ConfiguratorState): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save configurator state:', error);
  }
}

export function loadConfiguratorState(): ConfiguratorState {
  if (typeof window === 'undefined') return initialConfiguratorState;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Partial<ConfiguratorState>;
      // Deep merge with initial state to handle migrations
      return {
        metal: {
          ...initialConfiguratorState.metal,
          ...parsed.metal,
        },
        diamonds: {
          ...initialConfiguratorState.diamonds,
          ...parsed.diamonds,
        },
        head: {
          ...initialConfiguratorState.head,
          ...parsed.head,
        },
        band: {
          ...initialConfiguratorState.band,
          ...parsed.band,
        },
        more: {
          ...initialConfiguratorState.more,
          ...parsed.more,
        },
        settingPrice: parsed.settingPrice ?? initialConfiguratorState.settingPrice,
      };
    }
  } catch (error) {
    console.error('Failed to load configurator state:', error);
  }

  return initialConfiguratorState;
}

export function clearConfiguratorState(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear configurator state:', error);
  }
}
