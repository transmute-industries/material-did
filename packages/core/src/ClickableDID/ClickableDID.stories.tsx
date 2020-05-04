import React from 'react';
import { ClickableDID, IClickableDIDProps } from '.';

export default {
  title: 'Clickable DID',
};

const handleClick = () => {
  console.log('clicked');
};

const cases = [
  {
    did: 'did:example:123',
    onClick: handleClick,
  },
  {
    did: 'did:key:z6Mkh2o8dSUqfZMr351aMsPNyU4X4nhZybZBNsFqjKLi4BUQ',
    onClick: handleClick,
  },
  {
    did: 'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg',
    onClick: handleClick,
  },
  {
    did: 'did:web:did.actor:alice',
    onClick: handleClick,
  },
];

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Examples = (props?: Partial<IClickableDIDProps>) => (
  <div>
    {cases.map((c: any) => {
      return (
        <div key={c.did} style={{ padding: '2px' }}>
          <ClickableDID {...c} />
        </div>
      );
    })}
  </div>
);
