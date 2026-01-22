'use client';

import { Loader2 } from 'lucide-react';

export function RingLoading() {
  return (
    <div className="h-full min-h-[400px] lg:min-h-screen flex items-center justify-center bg-muted/30">
      <div className="flex flex-col items-center gap-4 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-muted-foreground/50" />
        <p className="text-sm text-muted-foreground/70">Loading 3D viewer...</p>
      </div>
    </div>
  );
}
