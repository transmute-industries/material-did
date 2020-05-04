import React from 'react';
import { ClickableDID, IClickableDIDProps } from '.';

export default {
  title: 'Clickable DID',
};

const did = 'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg';
const handleClick = () => {
  console.log('clicked');
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Element = (props?: Partial<IClickableDIDProps>) => (
  <div>
    <ClickableDID did={did} onClick={handleClick} {...props} />
  </div>
);
