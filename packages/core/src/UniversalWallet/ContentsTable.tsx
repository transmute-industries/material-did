import React from 'react';
import MaterialTable from 'material-table';

import { JSONEditor } from '../Common/JSONEditor';

import { LinkedDataIdentifier } from '../Common/LinkedDataIdentifier';

export const ContentsTable = ({ walletState }: any) => {
  const columns: any = [
    {
      title: 'Type',
      field: 'type',
      render: (rowData: any) => {
        return Array.isArray(rowData.type) ? rowData.type[0] : rowData.type;
      },
    },
    {
      title: 'Controller',
      field: 'controller',
      render: (rowData: any) => {
        if (rowData.controller) {
          return rowData.controller.map((t: any) => {
            if (t.indexOf('did:') !== -1) {
              return (
                <LinkedDataIdentifier
                  key={t}
                  value={t}
                  onClick={() => {
                    console.log('tag clicked', t);
                  }}
                />
              );
            }
            return undefined;
          });
        }
        return (
          <LinkedDataIdentifier
            value={rowData.id}
            onClick={() => {
              console.log('tag clicked', rowData.id);
            }}
          />
        );
      },
    },
  ];
  const rows: any = walletState.contents;
  return (
    <MaterialTable
      title="Contents"
      columns={columns}
      data={rows}
      detailPanel={rowData => {
        const withoutMutation: any = { ...rowData };
        delete withoutMutation.tableData;
        return <JSONEditor value={JSON.stringify(withoutMutation, null, 2)} />;
      }}
    />
  );
};
