import React from 'react';
import { LinkedDataPropertyTable, ILinkedDataPropertyTableProps } from '.';

import { smallList } from './fixtures';

export default {
  // id: 20,
  title: 'Linked Data/Document',
  component: LinkedDataPropertyTable,
};

const download = (filename: string, text: string) => {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

const onTitleClick = () => {
  window.open(`https://uniresolver.io/#${smallList[0].id}`);
};
const onRowExport = (data: any) => {
  download('row.json', JSON.stringify(data, null, 2));
};

export const PropertyTable = (
  props?: Partial<ILinkedDataPropertyTableProps>
) => (
  <div>
    <LinkedDataPropertyTable
      onTitleClick={onTitleClick}
      onRowExport={onRowExport}
      document={smallList[0]}
      {...props}
    />
  </div>
);
