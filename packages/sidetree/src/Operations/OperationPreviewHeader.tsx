import React from 'react';

// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import CreateIcon from '@material-ui/icons/Create';
import UpdateIcon from '@material-ui/icons/Update';
import HealingIcon from '@material-ui/icons/Healing';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  listRoot: {
    width: '100%',
    wordBreak: 'break-all',
    backgroundColor: theme.palette.background.paper,
  },
  pink: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
}));

const operationTypeToIcon = (type: string) => {
  switch (type) {
    case 'create':
      return <CreateIcon />;
    case 'update':
      return <UpdateIcon />;
    case 'recover':
      return <HealingIcon />;
    case 'deactivate':
      return <DeleteIcon />;
    default:
      return <UpdateIcon />;
  }
};

export const OperationPreviewHeader = ({ operation, controller }: any) => {
  const classes = useStyles();
  return (
    <List className={classes.listRoot}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.pink}>
            {operationTypeToIcon(operation.type)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={controller} />
      </ListItem>
    </List>
  );
};
