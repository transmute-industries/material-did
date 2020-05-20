import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ClickableDID, IClickableDIDProps } from '.';

export default {
  title: 'DID',
};

const did = 'did:elem:ropsten:EiBJJPdo-ONF0jxqt8mZYEj9Z7FbdC87m2xvN0_HAbcoEg';
const handleClick = () => {
  window.open(`https://uniresolver.io/#${did}`);
};

export const Fancy = (props?: Partial<IClickableDIDProps>) => (
  <div>
    <ClickableDID did={did} onClick={handleClick} {...props} />
  </div>
);

export const Simple = () => (
  <Typography>
    <Link href={`https://uniresolver.io/#${did}`} target="__blank">
      {did}
    </Link>
  </Typography>
);
