import React from 'react';
import MaterialTable from 'material-table';

import { LinkedDataIdentifier } from '../../../../Common';

import { CredentialTableContentDetails } from '../CredentialTableContentDetails';

// TODO: fix credentials so it does not get mutated params...
export const CredentialsTable = ({ label, credentials }: any) => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setRows(credentials);
  }, [credentials]);

  const columns: any = [
    {
      title: 'Type',
      field: 'type',
      render: (rowData: any) => {
        return Array.isArray(rowData.type) ? rowData.type[0] : rowData.type;
      },
    },
    {
      title: 'Identifier',
      field: 'id',
      render: (rowData: any) => {
        if (rowData.id) {
          return <LinkedDataIdentifier value={rowData.id} />;
        }
        return <LinkedDataIdentifier value={rowData.proof.challenge} />;
      },
    },
  ];

  return (
    <MaterialTable
      style={{ width: '100%' }}
      title={label || 'Contents'}
      columns={columns}
      data={rows}
      detailPanel={(rowData: any) => {
        const withoutMutation: any = { ...rowData };
        delete withoutMutation.tableData;
        return <CredentialTableContentDetails document={withoutMutation} />;
      }}
    />
  );
};
