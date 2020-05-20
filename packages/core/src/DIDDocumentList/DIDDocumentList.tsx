import React, { HTMLAttributes } from 'react';
import MaterialTable from 'material-table';

import { DIDDocumentPreview } from '../DIDDocumentPreview';
import Link from '@material-ui/core/Link';
import { ClickableDID } from '../ClickableDID';

export interface IDIDDocumentListProps extends HTMLAttributes<HTMLDivElement> {
  list: any;
}

export const DIDDocumentList = ({ list }: any) => {
  const columns: any = [
    {
      title: 'ID',
      field: 'id',
      render: (rowData: any) => {
        return (
          <ClickableDID
            did={rowData.id}
            onClick={() => {
              window.open(`https://uniresolver.io/#${rowData.id}`);
            }}
          />
        );
      },
    },
    {
      title: 'Context',
      field: '@context',
      render: (rowData: any) => {
        return (
          <Link href={rowData['@context']} target="__blank">
            {rowData['@context']}
          </Link>
        );
      },
    },
  ];
  return (
    <MaterialTable
      title="DIDs"
      columns={columns}
      data={list}
      localization={{
        body: {
          emptyDataSourceMessage: 'No decentralized identifiers to display.',
        },
      }}
      detailPanel={(rowData: any) => {
        let withoutTableData: any = { ...rowData };
        delete withoutTableData.tableData;
        return <DIDDocumentPreview didDocument={withoutTableData} />;
      }}
    />
  );
};
