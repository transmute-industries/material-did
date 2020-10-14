import React, { FC, HTMLAttributes } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { startCase } from 'lodash-es';
import moment from 'moment';
import flat from 'flat';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

const excludedCredentialSubjectProperties = ['image'];

const dateKeys = ['issuanceDate', 'expirationDate'];

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

export interface ICredentialCardProps extends HTMLAttributes<HTMLDivElement> {
  content: any;
}

export const CredentialCard: FC<ICredentialCardProps> = ({ content }) => {
  const classes = useStyles();

  const flatCredentialSubject = flat(content.credentialSubject);

  const renderProp = (prop: any, key: any) => {
    let value = prop.toString();
    if (value === 'true') {
      return (
        <Typography
          style={{
            borderRadius: '4px',
            padding: '4px',
            backgroundColor: '#d32f2f',
            color: '#fff',
          }}
        >
          {'Positive'}
        </Typography>
      );
    }
    if (value === 'false') {
      return (
        <Typography
          style={{
            borderRadius: '4px',
            padding: '4px',
            backgroundColor: '#7cb342',
          }}
        >
          {'Negative'}
        </Typography>
      );
    }
    if (dateKeys.indexOf(key) !== -1) {
      return moment(value).fromNow();
    }
    if (typeof prop === 'object' && prop.id) {
      value = prop.id;
    }
    return (
      <Typography style={{ wordBreak: 'break-all', paddingLeft: '16px' }}>
        {value.slice(0, 64)}
      </Typography>
    );
  };
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
                  primary={startCase(content.type[1])}
                  secondary={moment(content.issuanceDate).fromNow()}
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
                <ContactMailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={'Issuer'}
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
                  primary={content.issuer}
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
              primary={'Credential'}
              style={{ wordBreak: 'break-all' }}
            />
          </ListItem>
        </List>
      ),
      disabled: false,
      children: (
        <Grid container>
          {content.credentialSubject.image && (
            <Grid item xs={12} lg={4}>
              <Box>
                <img
                  alt={'credential subject'}
                  src={content.credentialSubject.image}
                />
              </Box>
            </Grid>
          )}

          <Grid item xs={12} lg={content.credentialSubject.image ? 8 : 12}>
            {Object.keys(flatCredentialSubject).map((k) => {
              if (excludedCredentialSubjectProperties.indexOf(k) === -1) {
                return (
                  <Box
                    display="flex"
                    p={1}
                    key={k}
                    style={{
                      fontSize: '.8em',
                      borderBottom: '1px solid #000',
                      marginBottom: '8px',
                    }}
                  >
                    <Box flexGrow={1}>
                      <Typography style={{ fontWeight: 700 }}>{k}</Typography>
                    </Box>
                    <Box>{renderProp(flatCredentialSubject[k], k)}</Box>
                  </Box>
                );
              }
              return undefined;
            })}
          </Grid>
        </Grid>
      ),
    },
  ];

  return <ExpansionPanelList panels={panels} />;
};
