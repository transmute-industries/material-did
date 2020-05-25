import React from 'react';
import MaterialTable from 'material-table';

import { JSONEditor } from '../Common/JSONEditor';

import { LinkedDataIdentifier } from '../Common';

import { WalletContentDetails } from './WalletContentDetails';

const ControllerList = ({ controller }: any) => {
  return (
    <React.Fragment>
      {controller.map((t: any) => {
        return (
          <div key={t}>
            <LinkedDataIdentifier value={t.split('#')[0]} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

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
        // console.log(rowData, rowData.controller);
        if (Array.isArray(rowData.controller)) {
          return <ControllerList controller={rowData.controller} />;
        }
        return <LinkedDataIdentifier value={rowData.id} />;
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
        return <WalletContentDetails document={withoutMutation} />;
      }}
    />
  );
};
