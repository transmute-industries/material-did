import React, { FC, HTMLAttributes } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import StyleIcon from '@material-ui/icons/Style';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DescriptionIcon from '@material-ui/icons/Description';
import { LinkedDataIdentifier } from '../../../Common/LinkedDataIdentifier';
import { ExpansionPanelList } from '../../../Common/ExpansionPanelList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  media: {
    height: 256,
  },
  listRoot: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  pink: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export interface ICurrencyCardProps extends HTMLAttributes<HTMLDivElement> {
  content: any;
}

export const CurrencyCard: FC<ICurrencyCardProps> = ({ content }) => {
  const classes = useStyles();

  const panels = [
    {
      title: <LinkedDataIdentifier value={content.id} />,
      disabled: false,
      children: (
        <Grid container>
          <Grid item style={{ flexGrow: 1 }}>
            <List style={{ paddingTop: '0' }}>
              <ListItem style={{ paddingTop: '0' }}>
                <ListItemAvatar>
                  <Avatar className={classes.pink}>
                    <DescriptionIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={content.name}
                  secondary={content.description}
                  style={{ wordBreak: 'break-all' }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <img
              style={{ maxWidth: '128px' }}
              src={content.image}
              alt={content.title}
            />
          </Grid>
        </Grid>
      ),
    },

    {
      title: (
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.pink}>
                <ContactMailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={'Balance'}
              style={{ wordBreak: 'break-all' }}
            />
          </ListItem>
        </List>
      ),
      disabled: false,
      children: (
        <Grid container>
          <Grid item style={{ flexGrow: 1 }}>
            <List style={{ paddingTop: '0' }}>
              <ListItem style={{ paddingTop: '0' }}>
                <ListItemAvatar>
                  <Avatar className={classes.pink}>
                    <AccountBalanceWalletIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={content.currency}
                  secondary={content.amount}
                  style={{ wordBreak: 'break-all' }}
                />
              </ListItem>
              <ListItem style={{ paddingTop: '0' }}>
                <ListItemAvatar>
                  <Avatar className={classes.pink}>
                    <VideogameAssetIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={'Controller'}
                  secondary={content.controller}
                  style={{ wordBreak: 'break-all' }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      ),
    },
  ];

  if (content.tags) {
    panels.push({
      title: (
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.pink}>
                <StyleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={'Tags'}
              // secondary={'Human friendly labels'}
              style={{ wordBreak: 'break-all' }}
            />
          </ListItem>
        </List>
      ),
      disabled: false,
      children: (
        <List>
          <ListItem>
            {content.tags.map((t: any) => {
              return (
                <div key={t} style={{ padding: '4px' }}>
                  <LinkedDataIdentifier value={t} />
                </div>
              );
            })}
          </ListItem>
        </List>
      ),
    });
  }
  if (content.correlation) {
    panels.push({
      title: (
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.pink}>
                <TrackChangesIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={'Correlation'}
              // secondary={'Pseudonymity related identifiers.'}
              style={{ wordBreak: 'break-all' }}
            />
          </ListItem>
        </List>
      ),
      disabled: false,
      children: (
        <List>
          <ListItem>
            {content.correlation.map((t: any) => {
              return (
                <div key={t} style={{ padding: '4px' }}>
                  <LinkedDataIdentifier value={t} />
                </div>
              );
            })}
          </ListItem>
        </List>
      ),
    });
  }

  return <ExpansionPanelList panels={panels} />;
};
