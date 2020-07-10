import React from 'react';
import { DIDDocumentList, IDIDDocumentListProps } from '.';

import {
  // emptyList,
  smallList,
} from './fixtures';

export default {
  // id: 20,
  title: 'DID/Document',
  component: DIDDocumentList,
};

// export const Empty = (props?: Partial<IDIDDocumentListProps>) => (
//   <div>
//     <DIDDocumentList list={emptyList} {...props} />
//   </div>
// );

export const List = (props?: Partial<IDIDDocumentListProps>) => (
  <div>
    <DIDDocumentList list={smallList} {...props} />
  </div>
);
