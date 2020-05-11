import React from 'react';
import { ExpansionPanelList, IExpansionPanelList } from '.';

export default {
  title: 'Expansion Panel List',
};

const panels = [
  {
    title: 'first',
    disabled: false,
    children: <div>first</div>,
  },
  {
    title: 'second',
    disabled: true,
    children: <div>second</div>,
  },
  {
    title: 'third',
    disabled: false,
    children: <div>third</div>,
  },
];

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Example = (props?: Partial<IExpansionPanelList>) => (
  <div>
    <ExpansionPanelList panels={panels} {...props} />
  </div>
);
