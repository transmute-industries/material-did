import React from 'react';

// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles(theme => ({
  listRoot: {
    flexGrow: 1,
    wordBreak: 'break-all',
    backgroundColor: theme.palette.background.paper,
  },
  pink: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
}));

export const TransactionPreviewHeader = ({ transaction }: any) => {
  const classes = useStyles();
  return (
    <List className={classes.listRoot}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.pink}>
            <ReceiptIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'Transaction ' + transaction.transactionNumber}
        />
      </ListItem>
    </List>
  );
};
