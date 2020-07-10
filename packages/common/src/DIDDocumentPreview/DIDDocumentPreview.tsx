import React, { FC, HTMLAttributes } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QRCode from 'qrcode.react';
import { JSONEditor } from '../JSONEditor';
import { LinkedDataPropertyTable } from '../LinkedDataPropertyTable';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#bdbdbd',
  },
}));

export interface IDIDDocumentPreviewProps
  extends HTMLAttributes<HTMLDivElement> {
  didDocument: any;
}

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

const onRowExport = (data: any) => {
  download('row.json', JSON.stringify(data, null, 2));
};

export const DIDDocumentPreview: FC<IDIDDocumentPreviewProps> = ({
  didDocument,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };

  const onTitleClick = () => {
    let url = `https://uniresolver.io/#${didDocument.id}`;
    window.open(url);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'primary'}>
        <Tabs value={value} onChange={handleChange} aria-label="VC Tabs">
          <Tab label="Preview" {...a11yProps(0)} />
          <Tab label="QR Code" {...a11yProps(1)} />
          <Tab label="Source" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LinkedDataPropertyTable
          onTitleClick={onTitleClick}
          onRowExport={onRowExport}
          document={didDocument}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QRCode value={didDocument.id} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JSONEditor value={JSON.stringify(didDocument, null, 2)} />
      </TabPanel>
    </div>
  );
};
