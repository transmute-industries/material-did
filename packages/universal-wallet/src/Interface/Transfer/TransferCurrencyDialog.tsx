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
import { TransactionPreviewSendCurrency } from '../../Transactions/SendCurrency';
import { getCurrencies, getEthereumAddresses } from '../walletHelper';

const useStyles = makeStyles((theme) => ({
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
      sender: 'did:ethr:0x123',
      receiver: 'did:ethr:0x3b4477C4cd54718D32d4dF393415796b9bfcB63c',
      amount: '0.0',
      currency: 'ETH',
    },
    currency: {},
  });

  const [currencyOptions, setCurrencyOptions]: any = React.useState([]);
  const [selectedCurrency, setSelectedCurrency]: any = React.useState({});

  const [senderOptions, setSenderOptions]: any = React.useState([]);
  const [selectedSender, setSelectedSender]: any = React.useState({});

  const Trigger = component;

  const handleSetup = () => {
    const { addresses } = getEthereumAddresses(walletState);
    const { currencies } = getCurrencies(walletState);

    setSenderOptions(addresses);
    setSelectedSender(addresses[0]);

    setCurrencyOptions(currencies);
    setSelectedCurrency(currencies[0]);

    setBindingModel({
      options: {
        ...bindingModel.options,
        sender: addresses[0].id,
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
    delete sanitized.currency.tableData;
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
                  value={selectedSender}
                  options={senderOptions}
                  onChange={(value: any) => {
                    setSelectedSender(value);
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
                    setSelectedSender(value);
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
            </Grid>

            <Grid item xs={6}>
              <div style={{ marginBottom: '16px' }}>
                <TextField
                  fullWidth
                  label="Receiver"
                  value={bindingModel.options.receiver}
                  onChange={(event: any) => {
                    setBindingModel({
                      ...bindingModel,
                      options: {
                        ...bindingModel.options,
                        receiver: event.target.value,
                      },
                    });
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <TextField
                  fullWidth
                  label="Amount"
                  value={bindingModel.options.amount}
                  onChange={(event: any) => {
                    setBindingModel({
                      ...bindingModel,
                      options: {
                        ...bindingModel.options,
                        amount: event.target.value,
                      },
                    });
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TransactionPreviewSendCurrency
                sender={selectedSender}
                envelope={{
                  ...selectedCurrency,
                  amount: bindingModel.options.amount,
                }}
                receiver={{
                  id: bindingModel.options.receiver,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};
