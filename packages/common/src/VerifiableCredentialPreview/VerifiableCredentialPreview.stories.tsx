import React from 'react';
import {
  VerifiableCredentialPreview,
  IVerifiableCredentialPreviewProps,
} from '.';

import { smallList } from './fixtures';

export default {
  // id: 20,
  title: 'VC/Credential',
  component: VerifiableCredentialPreview,
};

export const Preview = (props?: Partial<IVerifiableCredentialPreviewProps>) => (
  <div>
    <VerifiableCredentialPreview document={smallList[0]} {...props} />
  </div>
);
