'use client';

import { useState } from 'react';
import { ConfigPanel } from './config-panel';
import { MetalPanel } from './panels/metal-panel';
import { DiamondsPanel } from './panels/diamonds-panel';
import { HeadPanel } from './panels/head-panel';
import { BandPanel } from './panels/band-panel';
import { MorePanel } from './panels/more-panel';
import type { ConfiguratorPanel } from '@/types/configurator';

export function ConfigSidebar() {
  const [openPanel, setOpenPanel] = useState<ConfiguratorPanel | null>('metal');

  const handleToggle = (panel: ConfiguratorPanel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className="h-full overflow-y-auto">
      <ConfigPanel
        title="Metal"
        isOpen={openPanel === 'metal'}
        onToggle={() => handleToggle('metal')}
      >
        <MetalPanel />
      </ConfigPanel>

      <ConfigPanel
        title="Diamonds"
        isOpen={openPanel === 'diamonds'}
        onToggle={() => handleToggle('diamonds')}
      >
        <DiamondsPanel />
      </ConfigPanel>

      <ConfigPanel
        title="Head"
        isOpen={openPanel === 'head'}
        onToggle={() => handleToggle('head')}
      >
        <HeadPanel />
      </ConfigPanel>

      <ConfigPanel
        title="Band"
        isOpen={openPanel === 'band'}
        onToggle={() => handleToggle('band')}
      >
        <BandPanel />
      </ConfigPanel>

      <ConfigPanel
        title="More"
        isOpen={openPanel === 'more'}
        onToggle={() => handleToggle('more')}
      >
        <MorePanel />
      </ConfigPanel>
    </div>
  );
}
