import React, { FC, HTMLAttributes } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import DescriptionIcon from '@material-ui/icons/Description';

import { LinkedDataIdentifier, ExpansionPanelList } from '@material-did/common';

import { CredentialsTable } from './CredentialsTable';

const useStyles = makeStyles((theme) => ({
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

export interface IPresentationCardProps extends HTMLAttributes<HTMLDivElement> {
  content: any;
}

export const PresentationCard: FC<IPresentationCardProps> = ({ content }) => {
  const classes = useStyles();

  const panels = [
    {
      title: <LinkedDataIdentifier value={content.proof.challenge} />,
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
                  primary={content.proof.challenge}
                  secondary={content.proof.domain}
                  style={{ wordBreak: 'break-all' }}
                />
              </ListItem>
            </List>
          </Grid>
          {/* <Grid item>
            <img src={content.image} alt={content.title} />
          </Grid> */}
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
              primary={'Holder'}
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
                    <VpnKeyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={content.holder}
                  secondary={content.proof.verificationMethod.split('#').pop()}
                  style={{ wordBreak: 'break-all' }}
                />
              </ListItem>
            </List>
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
                <VerifiedUserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={'Credentials'}
              style={{ wordBreak: 'break-all' }}
            />
          </ListItem>
        </List>
      ),
      disabled: false,
      children: (
        <CredentialsTable
          label={'Credentials'}
          credentials={JSON.parse(JSON.stringify(content.verifiableCredential))}
        />
      ),
    },
  ];

  return <ExpansionPanelList panels={panels} />;
};
