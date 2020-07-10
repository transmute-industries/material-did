import React from 'react';

import { CreateOperation, ICreateOperationProps } from '.';

import { create } from './fixtures';

export default {
  title: 'Sidetree|Operations',
  component: CreateOperation,
};

export const Create = (props?: Partial<ICreateOperationProps>) => (
  <div style={{ padding: '8px' }}>
    <CreateOperation operation={create} {...props} />
  </div>
);
