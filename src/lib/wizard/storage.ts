import type { WizardState } from '@/types/wizard';

const STORAGE_KEY = 'ring-builder-wizard-state';

export function saveState(state: WizardState): void {
  if (typeof window === 'undefined') return;

  try {
    const serialized = JSON.stringify(state);
    sessionStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Failed to save wizard state:', error);
  }
}

export function loadState(): Partial<WizardState> | null {
  if (typeof window === 'undefined') return null;

  try {
    const serialized = sessionStorage.getItem(STORAGE_KEY);
    if (!serialized) return null;
    return JSON.parse(serialized);
  } catch (error) {
    console.error('Failed to load wizard state:', error);
    return null;
  }
}

export function clearState(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(STORAGE_KEY);
}
