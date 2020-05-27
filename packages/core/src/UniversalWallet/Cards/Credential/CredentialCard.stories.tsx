import React from 'react';

import { CredentialCard, ICredentialCardProps } from '.';

import { Credential } from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Cards',
};

export const VerifiableCredential = (props?: ICredentialCardProps) => {
  return (
    <div>
      <CredentialCard content={Credential} {...props} />
    </div>
  );
};
