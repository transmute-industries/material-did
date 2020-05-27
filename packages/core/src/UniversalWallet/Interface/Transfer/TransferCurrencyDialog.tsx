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
// import { SelectMultipleWalletContent } from '../../SelectMultipleWalletContent';
import { getSigningKeys, getCurrencies } from '../walletHelper';
// import { ContentsTable } from '../../ContentsTable';
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

export interface ITransferCurrencyDialogProps
  extends HTMLAttributes<HTMLDivElement> {
  walletState: any;
  onSubmit: any;

  component: any;
  componentProps: any;
}

export const TransferCurrencyDialog: FC<ITransferCurrencyDialogProps> = ({
  walletState,
  onSubmit,
  component,
  componentProps,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [bindingModel, setBindingModel] = React.useState({
    options: {
      sender: 'did:ethr:0x242c3Cb5d8d9E68a8bBfaC9D6704583f1df80AD6',
      receiver: 'did:ethr:0x3b4477C4cd54718D32d4dF393415796b9bfcB63c',
      amount: '0.001',
      currency: 'ETH',
    },
    currency: {},
  });

  const [currencyOptions, setCurrencyOptions]: any = React.useState([]);
  const [selectedCurrency, setSelectedCurrency]: any = React.useState({});

  const [
    verificationMethodOptions,
    setVerificationMethodOptions,
  ]: any = React.useState([]);

  const [
    selectedVerificationMethod,
    setSelectedVerificationMethod,
  ]: any = React.useState({});

  const Trigger = component;

  const handleSetup = () => {
    const { signingKeys } = getSigningKeys(walletState);
    const { currencies } = getCurrencies(walletState);
    setVerificationMethodOptions(signingKeys);
    setSelectedVerificationMethod(signingKeys[0]);
    setCurrencyOptions(currencies);

    if (currencies.length) {
      setSelectedCurrency(currencies[0]);
    }

    setBindingModel({
      options: {
        ...bindingModel.options,
      },
      currency: currencies[0],
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
        Transfer
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
              Transfer Currency
            </Typography>
            <Button
              autoFocus
              variant={'contained'}
              color="secondary"
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ margin: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div style={{ marginBottom: '16px' }}>
                <SelectWalletContent
                  label={'Sender'}
                  value={selectedVerificationMethod}
                  options={verificationMethodOptions}
                  onChange={(value: any) => {
                    setSelectedVerificationMethod(value);
                    setBindingModel({
                      ...bindingModel,
                      options: {
                        ...bindingModel.options,
                        sender: value.id,
                      },
                    });
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <SelectWalletContent
                  label={'Currency'}
                  value={selectedCurrency}
                  options={currencyOptions}
                  onChange={(value: any) => {
                    console.log(value);
                    setSelectedVerificationMethod(value);
                    // setBindingModel({
                    //   ...bindingModel,
                    //   options: {
                    //     ...bindingModel.options,
                    //     sender: value.id,
                    //   },
                    // });
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={6}>
              <div style={{ marginBottom: '16px' }}>
                <TextField
                  fullWidth
                  label="Receiver"
                  value={bindingModel.options.receiver}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <TextField
                  fullWidth
                  label="Amount"
                  value={bindingModel.options.amount}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12}>
              transaction preview...
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};
