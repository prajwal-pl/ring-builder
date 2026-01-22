'use client';

import { useContext } from 'react';
import { ConfiguratorContext } from '@/lib/configurator/context';

export function useConfigurator() {
  const context = useContext(ConfiguratorContext);

  if (!context) {
    throw new Error('useConfigurator must be used within a ConfiguratorProvider');
  }

  return context;
}
