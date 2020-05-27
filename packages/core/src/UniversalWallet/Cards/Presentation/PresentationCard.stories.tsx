import React from 'react';

import { PresentationCard, IPresentationCardProps } from '.';

import { Presentation } from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Cards',
};

export const VerifiablePresentation = (props?: IPresentationCardProps) => {
  return (
    <div>
      <PresentationCard content={Presentation} {...props} />
    </div>
  );
};
