'use client';

import { ConfiguratorProvider } from '@/lib/configurator/context';
import { ConfiguratorLayout } from '@/components/configurator/configurator-layout';

export default function ConfiguratorPage() {
  return (
    <ConfiguratorProvider>
      <ConfiguratorLayout />
    </ConfiguratorProvider>
  );
}
