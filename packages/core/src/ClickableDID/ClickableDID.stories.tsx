import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { ClickableDID, IClickableDIDProps } from '.';

export default {
  title: 'Components|DID',
  component: ClickableDID,
};

export const Identicon = (props?: Partial<IClickableDIDProps>) => (
  <div>
    <ClickableDID
      did={'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg'}
      onClick={() => {
        window.open(
          `https://uniresolver.io/#${'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg'}`
        );
      }}
    />{' '}
    <br /> <br />
    <ClickableDID
      did={'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6'}
      onClick={() => {
        window.open(
          `https://uniresolver.io/#${'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6'}`
        );
      }}
    />{' '}
    <br /> <br />
    <ClickableDID
      did={'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD'}
      onClick={() => {
        window.open(
          `https://uniresolver.io/#${'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD'}`
        );
      }}
    />{' '}
    <br /> <br />
    <ClickableDID
      did={'did:example:789'}
      onClick={() => {
        window.open(
          `https://uniresolver.io/#${'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg'}`
        );
      }}
    />
  </div>
);

export const Simple = () => (
  <Typography>
    <Link
      href={`https://uniresolver.io/#${'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg'}`}
      target="__blank"
    >
      {'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg'}
    </Link>
  </Typography>
);
