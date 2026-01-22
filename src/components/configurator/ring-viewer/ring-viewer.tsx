'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useConfigurator } from '@/hooks/use-configurator';
import { useRingConfig } from './hooks/use-ring-config';
import { RingLoading } from './ring-loading';

// Dynamic import for SSR compatibility - WebGL cannot run on server
const RingCanvas = dynamic(() => import('./ring-canvas'), {
  ssr: false,
  loading: () => <RingLoading />,
});

export function RingViewer() {
  const { state } = useConfigurator();
  const config = useRingConfig(state);

  return (
    <div className="h-full min-h-[400px] lg:min-h-screen bg-gradient-to-b from-muted/20 to-muted/40">
      <Suspense fallback={<RingLoading />}>
        <RingCanvas config={config} />
      </Suspense>
    </div>
  );
}
