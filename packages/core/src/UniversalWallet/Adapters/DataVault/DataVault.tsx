import React, { FC, HTMLAttributes } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import SyncIcon from '@material-ui/icons/Sync';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  spinner: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#27225B',
  },
}));

export interface IDataVaultProps extends HTMLAttributes<HTMLDivElement> {
  vaultEndpoint: string;
  isSyncEnabled: boolean;
  isSyncing: boolean;
  syncVault: any;
}

export const DataVault: FC<IDataVaultProps> = ({
  vaultEndpoint,
  isSyncEnabled,
  isSyncing,
  syncVault,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <EnhancedEncryptionIcon />
          </Avatar>
        }
        title="Data Vault"
        subheader={vaultEndpoint}
      />

      <CardMedia
        className={classes.media}
        image={
          isSyncing
            ? 'https://transmute.industries/Transmute_preloader.gif'
            : 'https://wallet.interop.transmute.world/image.jpg'
        }
        title="vault icon"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This service can be used to safely store data.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          aria-label="sync"
          disabled={!isSyncEnabled}
          onClick={syncVault}
          endIcon={<SyncIcon />}
        >
          Sync
        </Button>
      </CardActions>
    </Card>
  );
};
