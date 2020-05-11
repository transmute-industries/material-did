import React from 'react';
import MaterialTable from 'material-table';

import { JSONEditor } from '../JSONEditor';

import { ClickableDID } from '../ClickableDID';

export const KeystoreTable = ({ keystore }: any) => {
  const columns: any = [
    // { title: 'ID', field: 'kid' },
    {
      title: 'Type',
      field: 'type',
      render: (rowData: any) => {
        return rowData.tags[0];
      },
    },
    {
      title: 'Tags',
      field: 'tags',
      render: (rowData: any) => {
        return rowData.tags.map((t: any) => {
          if (t.indexOf('did:') !== -1) {
            return (
              <ClickableDID
                key={t}
                did={t}
                onClick={() => {
                  console.log('tag clicked', t);
                }}
              />
            );
          }
          return undefined;
        });
      },
    },
  ];
  const rows: any = [...Object.values(keystore.data)];
  return (
    <MaterialTable
      title="Keystore"
      columns={columns}
      data={rows}
      detailPanel={rowData => {
        return <JSONEditor value={JSON.stringify({ ...rowData }, null, 2)} />;
      }}
    />
  );
};
