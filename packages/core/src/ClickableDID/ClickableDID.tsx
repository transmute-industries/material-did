import React, { FC, HTMLAttributes } from 'react';
import Chip from '@material-ui/core/Chip';
import Identicon from 'react-identicons';

export interface IClickableDIDProps extends HTMLAttributes<HTMLDivElement> {
  did: string;
  onClick: any;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const ClickableDID: FC<IClickableDIDProps> = ({ did, onClick }) => {
  return (
    <Chip
      size="medium"
      variant="outlined"
      icon={
        <span style={{ height: '32px', marginLeft: '14px', marginTop: '0px' }}>
          <Identicon size={32} count={5} string={did} />
        </span>
      }
      style={{ maxWidth: '256px' }}
      label={did}
      onClick={onClick}
    />
  );
};
