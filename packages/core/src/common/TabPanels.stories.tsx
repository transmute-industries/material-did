import React from 'react';

import { TabPanels, ITabPanelsProps } from '..';

export default {
  title: 'Tabs',
  component: TabPanels,
};

export const Example = (props?: Partial<ITabPanelsProps>) => (
  <div>
    <TabPanels
      tabs={[
        {
          index: 0,
          label: 'first',
          panel: <div>first</div>,
        },
        {
          index: 1,
          label: 'second',
          panel: <div>second</div>,
        },
      ]}
    />
  </div>
);
