import React, { FC, HTMLAttributes } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';

import {
  LockOpen,
  NoteAdd,
  Lock,
  CloudDownload,
  Create,
} from '@material-ui/icons';

import { KeystoreMenu } from './KeystoreMenu';
import { SearchKeystoreDialog } from './SearchKeystoreDialog';

import { getKeystoreContext, download } from './help';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    display: 'block',
    width: '42%',
    backgroundSize: 'contain',
    margin: 'auto',
    paddingTop: '56.25%', // 16:9
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
    backgroundColor: red[500],
  },
}));

function KeystoreStatusIcon({ status }: any) {
  switch (status) {
    case 'empty':
      return <NoteAdd />;
    case 'create':
      return <Create />;
    case 'locked':
      return <Lock />;
    case 'unlocked':
      return <LockOpen />;
    default:
      return <LockOpen />;
  }
}

function keyStoreStatusColor(status: string) {
  switch (status) {
    case 'empty':
      return blue[500];
    case 'locked':
      return blue[500];
    case 'unlocked':
      return red[500];
    default:
      return red[500];
  }
}

export interface IWebKeystore extends HTMLAttributes<HTMLDivElement> {
  keystore: any;
  image: string;
  importKeystore: any;
  saveKeystore: any;
  generateKeystore: any;
  toggleLockStatus: any;
  deleteKeystore: any;
}
export const WebKeystore: FC<IWebKeystore> = ({
  keystore,
  image,
  importKeystore,
  exportWallet,
  generateKeystore,
  saveKeystore,
  toggleLockStatus,
  deleteKeystore,
}) => {
  const { status, subheader, passwordPrompt } = getKeystoreContext(keystore);
  const classes = useStyles();

  let actions = [];

  if (status !== 'empty') {
    actions.push(
      <KeystoreMenu
        key={'menu'}
        status={status}
        keystore={keystore}
        passwordPrompt={passwordPrompt}
        toggleLockStatus={toggleLockStatus}
        saveKeystore={saveKeystore}
        deleteKeystore={deleteKeystore}
      />
    );
  }

  return (
    <Card className={classes.root}>
      <input
        // accept="text/plain"
        style={{ display: 'none' }}
        id="keystore-file-input"
        multiple
        onChange={(event: any) => {
          Object.keys(event.target.files).map(index => {
            const file = event.target.files[index];
            const reader = new FileReader();
            reader.onload = (upload: any) => {
              importKeystore(upload.target.result);
            };
            return reader.readAsText(file);
          });
        }}
        type="file"
      />
      <CardHeader
        avatar={
          <Avatar
            aria-label="lock"
            className={classes.avatar}
            style={{
              backgroundColor: keyStoreStatusColor(status),
            }}
          >
            <KeystoreStatusIcon status={status} />
          </Avatar>
        }
        action={actions}
        title="Universal Wallet 2020"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Keystore Icon"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {subheader}
        </Typography>
      </CardContent>
      {status === 'empty' && (
        <CardActions>
          <Button
            aria-label="import"
            onClick={() => {
              const target = document.getElementById('keystore-file-input');
              if (target) {
                target.click();
              }
            }}
            endIcon={<KeystoreStatusIcon status={status} />}
          >
            Import
          </Button>

          <Button
            onClick={() => {
              generateKeystore();
            }}
            endIcon={<KeystoreStatusIcon status={'create'} />}
          >
            Create
          </Button>
        </CardActions>
      )}
      {status !== 'empty' && (
        <React.Fragment>
          <CardActions disableSpacing>
            {status === 'locked' && (
              <IconButton
                aria-label="Export Keystore"
                onClick={() => {
                  const exported = exportWallet(
                    keystore.status,
                    keystore.contents
                  );
                  download('wallet.json', exported);
                }}
              >
                <CloudDownload />
              </IconButton>
            )}

            {status === 'unlocked' && (
              <SearchKeystoreDialog keystore={keystore} />
            )}
          </CardActions>
        </React.Fragment>
      )}
    </Card>
  );
};
