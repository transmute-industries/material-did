import React from 'react';
import {
  VerifiableCredentialPreview,
  IVerifiableCredentialPreviewProps,
} from '.';

import { smallList } from './fixtures';

export default {
  // id: 20,
  title: 'Components',
  component: VerifiableCredentialPreview,
};

export const VerifiableCredential = (
  props?: Partial<IVerifiableCredentialPreviewProps>
) => (
  <div>
    <VerifiableCredentialPreview document={smallList[0]} {...props} />
  </div>
);
