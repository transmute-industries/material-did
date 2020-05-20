import React from 'react';
import { DIDDocumentPropertyTable, IDIDDocumentPropertyTableProps } from '.';

import { smallList } from './fixtures';

export default {
  // id: 20,
  title: 'Components|DID Document / Property Table',
  component: DIDDocumentPropertyTable,
};

export const Small = (props?: Partial<IDIDDocumentPropertyTableProps>) => (
  <div>
    <DIDDocumentPropertyTable didDocument={smallList[0]} {...props} />
  </div>
);
