import React from 'react';

import { ContentCard, IContentCardProps } from '.';

import { Ed25519VerificationKey2018 } from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Cards',
};

export const Content = (props?: IContentCardProps) => {
  return (
    <div>
      <ContentCard content={Ed25519VerificationKey2018} {...props} />
    </div>
  );
};
