import React from 'react';
import { DIDDocumentList, IDIDDocumentListProps } from '.';

import { emptyList, smallList } from './fixtures'

export default {
  title: 'DID Document List',
  component: DIDDocumentList
};

export const Empty = (props?: Partial<IDIDDocumentListProps>) => (
  <div>
    <DIDDocumentList list={emptyList} {...props} />
  </div>
);


export const Small = (props?: Partial<IDIDDocumentListProps>) => (
  <div>
    <DIDDocumentList list={smallList} {...props} />
  </div>
);

