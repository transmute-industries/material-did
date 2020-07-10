import React from 'react';

import { ContentCard, IContentCardProps } from '.';

import { Ed25519VerificationKey2018 as example } from '../../fixtures';

export default {
  title: 'Data Model/Cards/Key',
};

export const VerificationKey = (props?: IContentCardProps) => {
  return (
    <div>
      <ContentCard content={example} {...props} />
    </div>
  );
};
