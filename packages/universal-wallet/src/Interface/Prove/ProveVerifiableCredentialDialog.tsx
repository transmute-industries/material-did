import React, { FC, HTMLAttributes } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import { SelectWalletContent } from '../../SelectWalletContent';
import { SelectMultipleWalletContent } from '../../SelectMultipleWalletContent';
import { getSigningKeys, getVerifiableCredentials } from '../walletHelper';
import { CredentialsTable } from '../../Cards/Presentation/CredentialsTable';
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition: any = React.forwardRef(function Transition(
  props: any,
  ref: any
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface IProveVerifiableCredentialDialogProps
  extends HTMLAttributes<HTMLDivElement> {
  walletState: any;
  onSubmit: any;

  component: any;
  componentProps: any;
}

export const ProveVerifiableCredentialDialog: FC<IProveVerifiableCredentialDialogProps> = ({
  walletState,
  onSubmit,
  component,
  componentProps,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [bindingModel, setBindingModel] = React.useState({
    options: {
      verificationMethod: '',
      domain: 'verifier.example.com',
      challenge: '99612b24-63d9-11ea-b99f-4f66f3e4f81a',
    },
    verifiableCredential: [],
  });

  const [
    verifiableCredentialOptions,
    setVerifiableCredentialOptions,
  ]: any = React.useState([]);

  const [
    verificationMethodOptions,
    setVerificationMethodOptions,
  ]: any = React.useState([]);

  const [
    selectedVerificationMethod,
    setSelectedVerificationMethod,
  ]: any = React.useState({});

  const [
    selectedVerifiableCredentials,
    setSelectedVerifiableCredentials,
  ]: any = React.useState([]);

  const Trigger = component;

  const handleSetup = () => {
    const { signingKeys } = getSigningKeys(walletState);
    const { credentials } = getVerifiableCredentials(walletState);
    setVerificationMethodOptions(signingKeys);
    setSelectedVerificationMethod(signingKeys[0]);
    setVerifiableCredentialOptions(credentials);
    let defaultCredentials: any = [];
    if (credentials.length) {
      defaultCredentials.push(credentials[0]);
    }
    setSelectedVerifiableCredentials(defaultCredentials);

    setBindingModel({
      options: {
        ...bindingModel.options,
        verificationMethod: signingKeys[0].id,
      },
      verifiableCredential: defaultCredentials,
    });
  };

  const handleClickOpen = () => {
    handleSetup();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let sanitized = JSON.parse(JSON.stringify(bindingModel));
    sanitized.verifiableCredential.forEach((vc: any) => {
      delete vc.tableData;
    });
    onSubmit(sanitized);
    setOpen(false);
  };

  return (
    <div>
      <Trigger {...componentProps} onClick={handleClickOpen}>
        Prove
      </Trigger>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Prove Credentials
            </Typography>
            <Button
              autoFocus
              variant={'contained'}
              color="secondary"
              onClick={handleSubmit}
            >
              Prove and Save to Wallet
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ margin: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div style={{ marginBottom: '16px' }}>
                <TextField
                  fullWidth
                  label="Domain"
                  value={bindingModel.options.domain}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <TextField
                  fullWidth
                  label="Challenge"
                  value={bindingModel.options.challenge}
                />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div style={{ marginBottom: '16px' }}>
                <SelectWalletContent
                  label={'Proving key'}
                  value={selectedVerificationMethod}
                  options={verificationMethodOptions}
                  onChange={(value: any) => {
                    setSelectedVerificationMethod(value);
                    setBindingModel({
                      ...bindingModel,
                      options: {
                        ...bindingModel.options,
                        verificationMethod: value.id,
                      },
                    });
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <SelectMultipleWalletContent
                  label={'Select credentials'}
                  value={selectedVerifiableCredentials}
                  options={verifiableCredentialOptions}
                  onChange={(value: any) => {
                    setSelectedVerifiableCredentials(value);
                    setBindingModel({
                      ...bindingModel,
                      verifiableCredential: value,
                    });
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12}>
              <CredentialsTable
                label={'Credentials'}
                credentials={selectedVerifiableCredentials}
              />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};
