import React from 'react';
import { DIDDocumentPreview, IDIDDocumentPreviewProps } from '.';

import { smallList } from './fixtures';

export default {
  // id: 20,
  title: 'DID/Document',
  component: DIDDocumentPreview,
};

export const Preview = (props?: Partial<IDIDDocumentPreviewProps>) => (
  <div>
    <DIDDocumentPreview didDocument={smallList[0]} {...props} />
  </div>
);
