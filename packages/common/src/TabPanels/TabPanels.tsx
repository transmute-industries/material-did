import React, { FC, HTMLAttributes } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
  },
}));

export interface ITabPanelsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: any;
}

export const TabPanels: FC<ITabPanelsProps> = ({ tabs }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'primary'}>
        <Tabs value={value} onChange={handleChange} aria-label="Tabs">
          {tabs.map((tab: any) => {
            return (
              <Tab
                key={tab.index}
                label={tab.label}
                {...a11yProps(tab.index)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      {tabs.map((tab: any) => {
        return (
          <TabPanel key={tab.index} value={value} index={tab.index}>
            {tab.panel}
          </TabPanel>
        );
      })}
    </div>
  );
};
