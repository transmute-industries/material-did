import React from 'react';

import { LongFormPreview } from '.';

import { example } from './fixtures';

export default {
  title: 'Identifiers/DID',
  component: LongFormPreview,
};

export const LongForm = (props?: Partial<any>) => (
  <div style={{ padding: '8px' }}>
    <LongFormPreview value={example} {...props} />
  </div>
);
