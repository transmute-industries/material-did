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

import { InterfaceMenu } from './InterfaceMenu';
import { SearchDialog } from './SearchDialog';

import { GenerateContentsDialog } from './Interface/Generate/GenerateContentsDialog';

import { getWalletStateContext, download } from './help';

const useStyles = makeStyles((theme) => ({
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

function WalletStateStatusIcon({ status }: any) {
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

function walletStateStatusColor(status: string) {
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

export interface IUniversalWallet extends HTMLAttributes<HTMLDivElement> {
  walletState: any;
  image: string;
  toggleLockStatus: any;
  generateWallet: any;
  importWallet: any;
  exportWallet: any;
  saveWallet: any;
  deleteWallet: any;
  issueCredential: any;
  proveVerifiableCredential: any;
}
export const UniversalWallet: FC<IUniversalWallet> = ({
  walletState,
  image,
  importWallet,
  exportWallet,
  generateWallet,
  saveWallet,
  toggleLockStatus,
  deleteWallet,
  issueCredential,
  proveVerifiableCredential,
}) => {
  const { status, subheader, passwordPrompt } = getWalletStateContext(
    walletState
  );
  const classes = useStyles();

  let actions = [];

  if (status !== 'empty') {
    actions.push(
      <InterfaceMenu
        key={'menu'}
        status={status}
        walletState={walletState}
        passwordPrompt={passwordPrompt}
        toggleLockStatus={toggleLockStatus}
        saveWallet={saveWallet}
        deleteWallet={deleteWallet}
        issueCredential={issueCredential}
        proveVerifiableCredential={proveVerifiableCredential}
      />
    );
  }

  return (
    <Card className={classes.root}>
      <input
        // accept="text/plain"
        style={{ display: 'none' }}
        id="walletState-file-input"
        multiple
        onChange={(event: any) => {
          Object.keys(event.target.files).map((index) => {
            const file = event.target.files[index];
            const reader = new FileReader();
            reader.onload = (upload: any) => {
              importWallet(upload.target.result);
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
              backgroundColor: walletStateStatusColor(status),
            }}
          >
            <WalletStateStatusIcon status={status} />
          </Avatar>
        }
        action={actions}
        title="Universal Wallet"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="walletState Icon"
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
              const target = document.getElementById('walletState-file-input');
              if (target) {
                target.click();
              }
            }}
            endIcon={<WalletStateStatusIcon status={status} />}
          >
            Import
          </Button>

          <GenerateContentsDialog
            component={Button}
            componentProps={{
              endIcon: <WalletStateStatusIcon status={'create'} />,
            }}
            onSubmit={({ seed }: any) => {
              generateWallet(Buffer.from(seed, 'hex'));
            }}
          />
        </CardActions>
      )}
      {status !== 'empty' && (
        <React.Fragment>
          <CardActions disableSpacing>
            {status === 'locked' && (
              <IconButton
                aria-label="Export walletState"
                onClick={() => {
                  const exported = exportWallet(
                    walletState.status,
                    walletState.contents
                  );
                  download('wallet.json', exported);
                }}
              >
                <CloudDownload />
              </IconButton>
            )}

            {status === 'unlocked' && (
              <SearchDialog walletState={walletState} />
            )}
          </CardActions>
        </React.Fragment>
      )}
    </Card>
  );
};
