'use client';

import { useContext } from 'react';
import { WizardContext } from '@/lib/wizard/context';

export function useWizard() {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider');
  }

  return context;
}
