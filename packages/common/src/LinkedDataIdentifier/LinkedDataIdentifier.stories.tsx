import React from 'react';

import { LinkedDataIdentifier, ILinkedDataIdentifierProps } from '.';

const largeList = [
  'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg',
  'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
  'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
  'did:example:789',
  'https://example.com/credentials/123',
  'QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ',
];

const examples = largeList.map((value: any) => {
  return {
    value,
    onClick: () => {
      console.log(value);
    },
  };
});

export default {
  title: 'Linked Data/Document',
  component: LinkedDataIdentifier,
};

export const Identifier = (props?: Partial<ILinkedDataIdentifierProps>) => (
  <div>
    {examples.map((ex: any) => {
      return (
        <div key={ex.value} style={{ padding: '8px' }}>
          <LinkedDataIdentifier {...ex} {...props} />
        </div>
      );
    })}
  </div>
);
