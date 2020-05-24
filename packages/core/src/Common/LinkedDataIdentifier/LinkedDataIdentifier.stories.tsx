import React from 'react';

import { LinkedDataIdentifier, ILinkedDataIdentifierProps } from '.';

import { largeList } from './fixtures';

const examples = largeList.map((value: any) => {
  return {
    value,
    onClick: () => {
      console.log(value);
    },
  };
});

export default {
  title: 'Common|Linked Data',
  component: LinkedDataIdentifier,
};

export const Identifiers = (props?: Partial<ILinkedDataIdentifierProps>) => (
  <div>
    {examples.map((ex: any) => {
      return (
        <div key={ex.value} style={{ padding: '8px' }}>
          <LinkedDataIdentifier {...ex} />
        </div>
      );
    })}
  </div>
);
