import React from 'react';

// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import LinkIcon from '@material-ui/icons/Link';

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

export const LongFormPreview = ({ value }: any) => {
  const classes = useStyles();

  return (
    <List className={classes.listRoot}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.pink}>
            <FingerprintIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={'Long Form DID'}
          secondary={value.substring(0, 32) + '...'}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="link"
            onClick={() => {
              console.log('value', value);
            }}
          >
            <LinkIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
