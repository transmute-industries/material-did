import React from 'react';
import { DIDDocumentPreview, IDIDDocumentPreviewProps } from '.';

import { smallList } from './fixtures';

export default {
  // id: 20,
  title: 'Components',
  component: DIDDocumentPreview,
};

export const DID_Document = (props?: Partial<IDIDDocumentPreviewProps>) => (
  <div>
    <DIDDocumentPreview didDocument={smallList[0]} {...props} />
  </div>
);
