import React from 'react';

import { CredentialCard, ICredentialCardProps } from '.';

import { Credential } from '../../fixtures';

export default {
  title: 'Data Model/Cards/Credentials',
};

export const VerifiableCredential = (props?: ICredentialCardProps) => {
  return (
    <div>
      <CredentialCard content={Credential} {...props} />
    </div>
  );
};
