import React, { HTMLAttributes } from 'react';
import MaterialTable from 'material-table';

import { flatten } from 'flat';

import { JSONEditor } from '../JSONEditor';

import { ClickableDID } from '../ClickableDID';

export interface IDIDDocumentPropertyTableProps
  extends HTMLAttributes<HTMLDivElement> {
  didDocument: any;
}

export const DIDDocumentPropertyTable = ({ didDocument }: any) => {
  const flatDidDocument = flatten({
    ...didDocument,
  });

  const rows = Object.keys(flatDidDocument).map((k: string) => {
    return {
      key: k,
      value: flatDidDocument[k],
    };
  });

  const columns: any = [
    {
      title: 'Key',
      field: 'key',
    },
    {
      title: 'Value',
      field: 'value',
    },
  ];
  return (
    <MaterialTable
      title={
        <ClickableDID
          did={didDocument.id}
          onClick={() => {
            window.open(`https://uniresolver.io/#${didDocument.id}`);
          }}
        />
      }
      columns={columns}
      data={rows}
      localization={{
        body: {
          emptyDataSourceMessage: 'DID Document is not valid.',
        },
      }}
      detailPanel={(rowData: any) => {
        let target = rowData.key.split('.').shift();
        let value = didDocument[target];
        if (Array.isArray(value) && value.length === 1) {
          value = value[0];
        }
        return <JSONEditor value={JSON.stringify(value, null, 2)} />;
      }}
    />
  );
};
