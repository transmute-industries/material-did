import React, { HTMLAttributes } from 'react';
import MaterialTable from 'material-table';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { flatten } from 'flat';
import jsonld from 'jsonld';

import { JSONEditor } from '../JSONEditor';
import { LinkedDataIdentifier } from '../LinkedDataIdentifier';

export interface ILinkedDataPropertyTableProps
  extends HTMLAttributes<HTMLDivElement> {
  document: any;
  onTitleClick?: any;
  onRowExport?: any;
}

export const LinkedDataPropertyTable = ({
  document,
  onTitleClick,
  onRowExport,
}: any) => {
  const [state, setState]: any = React.useState({
    vocabTerms: {},
    render: false,
  });

  React.useEffect(() => {
    (async () => {
      const expanded = await jsonld.expand(
        {
          ...document,
        },
        ...document['@context']
      );
      const flattenExpanded = Object.values(
        flatten({
          ...expanded,
        })
      );
      // console.log(flattenExpanded);
      let vocabTerms: any = {};
      flattenExpanded.forEach((item: any) => {
        if (item.indexOf('#') !== -1) {
          let term = item.split('#').pop();
          vocabTerms[term] = item;
          return;
        }
        if (item.indexOf('http') !== -1) {
          let term = item.split('/').pop();
          if (term) {
            vocabTerms[term] = item;
            return;
          }
        }
      });
      setState({
        vocabTerms,
        render: true,
      });
    })();
  }, [document]);

  const flatDocument = flatten({
    ...document,
  });

  const rows = Object.keys(flatDocument).map((k: string) => {
    return {
      key: k,
      value: flatDocument[k],
    };
  });

  const columns: any = [
    {
      title: 'Property',
      field: 'key',
      render: (rowData: any) => {
        let jsonPath = `$.${rowData.key}`;
        if (rowData.key.indexOf('@context.') !== -1) {
          jsonPath = jsonPath.replace('.@context.', '["@context"].');
        }
        return <span style={{ wordBreak: 'break-all' }}>{jsonPath}</span>;
      },
    },
    {
      title: 'Value',
      field: 'value',
      render: (rowData: any) => {
        let value = rowData.value;

        if (rowData.value.indexOf('http') !== -1) {
          value = (
            <LinkedDataIdentifier
              value={value}
              onClick={() => {
                if (Array.isArray(rowData.value)) {
                  window.open(rowData.value[0]);
                } else {
                  window.open(rowData.value);
                }
              }}
            />
          );
        }
        if (rowData.value.indexOf('did:') !== -1) {
          let url = `https://uniresolver.io/#${rowData.value}`;
          value = (
            <LinkedDataIdentifier
              value={value}
              onClick={() => {
                window.open(url);
              }}
            />
          );
        }

        if (rowData.value.indexOf('urn:') !== -1) {
          value = <LinkedDataIdentifier value={rowData.value} />;
        }

        if (state.vocabTerms[rowData.value]) {
          value = (
            <Link target="_blank" href={state.vocabTerms[rowData.value]}>
              {value}
            </Link>
          );
        }
        return <span style={{ wordBreak: 'break-all' }}>{value}</span>;
      },
    },
  ];

  if (!state.render) {
    return <LinearProgress />;
  }
  return (
    <MaterialTable
      title={
        <LinkedDataIdentifier value={document.id} onClick={onTitleClick} />
      }
      columns={columns}
      data={rows}
      localization={{
        body: {
          emptyDataSourceMessage: 'Document is not valid.',
        },
      }}
      options={{
        exportFileName: document.id,
        exportButton: true,
      }}
      detailPanel={(rowData: any) => {
        let target = rowData.key.split('.').shift();
        let parent = document[target];
        if (Array.isArray(parent) && parent.length === 1) {
          parent = parent[0];
        }
        const withoutMutation: any = { ...rowData, parent };
        delete withoutMutation.tableData;
        return (
          <div>
            <AppBar position={'relative'}>
              <Toolbar variant={'dense'}>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  Preview
                </Typography>
                {onRowExport && (
                  <IconButton
                    aria-label="Export"
                    edge="end"
                    color="inherit"
                    onClick={() => {
                      onRowExport(withoutMutation);
                    }}
                  >
                    <CloudDownloadIcon />
                  </IconButton>
                )}
              </Toolbar>
            </AppBar>
            <JSONEditor value={JSON.stringify(withoutMutation, null, 2)} />
          </div>
        );
      }}
    />
  );
};
