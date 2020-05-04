import React, { FC, HTMLAttributes } from 'react';
import Fingerprint from '@material-ui/icons/Fingerprint';
import Chip from '@material-ui/core/Chip';

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
      icon={<Fingerprint />}
      label={did}
      onClick={onClick}
    />
  );
};
