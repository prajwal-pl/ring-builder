'use client';

import { RingViewerPlaceholder } from './ring-viewer/ring-viewer-placeholder';
import { BottomBar } from './bottom-bar/bottom-bar';
import { ConfigSidebar } from './config-sidebar/config-sidebar';

export function ConfiguratorLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Ring Viewer - 70% on desktop */}
        <div className="flex-1 lg:w-[70%]">
          <RingViewerPlaceholder />
        </div>

        {/* Config Sidebar - 30% on desktop */}
        <div className="lg:w-[30%] border-l border-border bg-background">
          <ConfigSidebar />
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <BottomBar />
    </div>
  );
}
