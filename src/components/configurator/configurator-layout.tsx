'use client';

import { RingViewer } from './ring-viewer';
import { BottomBar } from './bottom-bar/bottom-bar';
import { ConfigSidebar } from './config-sidebar/config-sidebar';

export function ConfiguratorLayout() {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Ring Viewer - 70% on desktop */}
        <div className="flex-1 lg:w-[70%] overflow-hidden">
          <RingViewer />
        </div>

        {/* Config Sidebar - 30% on desktop */}
        <div className="lg:w-[30%] border-l border-border bg-background overflow-hidden flex flex-col">
          <ConfigSidebar />
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <BottomBar />
    </div>
  );
}
