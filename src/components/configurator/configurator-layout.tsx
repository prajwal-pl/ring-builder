'use client';

import { RingViewer } from './ring-viewer';
import { BottomBar } from './bottom-bar/bottom-bar';
import { ConfigSidebar } from './config-sidebar/config-sidebar';
import { UserInfoDialog } from './user-info-dialog';

export function ConfiguratorLayout() {
  return (
    <div className="h-screen flex flex-col bg-[#fcfcfd] overflow-hidden">
      <div className="flex-1 relative flex flex-col lg:flex-row min-h-0">
        {/* Ring Viewer - Now Full Width/Height behind the sidebar */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--color-background)_0%,_#f3f4f6_100%)]">
          <div className="h-full w-full animate-in fade-in zoom-in-95 duration-1000">
            <RingViewer />
          </div>
        </div>

        {/* Floating Config Sidebar - desktop: right-aligned, floating; mobile: bottom-sheet feel */}
        <div className="relative z-10 flex-1 flex flex-col pointer-events-none lg:flex-row lg:justify-end lg:items-center p-4 lg:p-8 lg:pb-8 pb-0">
          <div className="w-full lg:w-[400px] h-[50vh] lg:h-[85%] max-h-[850px] pointer-events-auto bg-background/80 backdrop-blur-2xl rounded-t-[32px] lg:rounded-[40px] border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom-8 lg:slide-in-from-right-8 duration-700 mt-auto lg:mt-0">
            <div className="px-8 py-6 border-b border-border/10 bg-white/20 flex flex-col gap-1">
              <h2 className="text-xl font-bold tracking-tight text-foreground">Configure Your Ring</h2>
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">Live Customization</p>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col">
              <ConfigSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <BottomBar />

      {/* User Info Collection Dialog */}
      <UserInfoDialog />
    </div>
  );
}
