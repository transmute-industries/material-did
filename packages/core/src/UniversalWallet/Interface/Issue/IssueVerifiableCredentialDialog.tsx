import React, { FC, HTMLAttributes } from 'react';

import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import { JSONEditor } from '../../../Common';
import { SelectWalletContent } from '../../SelectWalletContent';
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

export interface IIssueVerifiableCredentialDialogProps
  extends HTMLAttributes<HTMLDivElement> {
  verificationMethodOptions: any;
  issueCredentialOptions: any;
  credential: any;
  onSubmit: any;

  component: any;
  componentProps: any;
}

export const IssueVerifiableCredentialDialog: FC<IIssueVerifiableCredentialDialogProps> = ({
  verificationMethodOptions,
  issueCredentialOptions,
  credential,
  onSubmit,
  component,
  componentProps,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [bindingModel, setBindingModel] = React.useState({
    options: issueCredentialOptions,
    credential: JSON.stringify(credential, null, 2),
  });

  const label = 'Select Issuer Key';
  const Trigger = component;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const parsedCredential = JSON.parse(bindingModel.credential);
    onSubmit({
      ...bindingModel,
      credential: parsedCredential,
    });
    setOpen(false);
  };

  const selectedVerificationMethod = verificationMethodOptions.find(
    (opt: any) => {
      return opt.id === issueCredentialOptions.verificationMethod;
    }
  );

  return (
    <div>
      <Trigger {...componentProps} onClick={handleClickOpen}>
        Issue
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
              Issue Credential
            </Typography>
            <Button
              autoFocus
              variant={'contained'}
              color="secondary"
              onClick={handleSubmit}
            >
              Issue and Save to Wallet
            </Button>
          </Toolbar>
        </AppBar>
        <div style={{ margin: '16px' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <SelectWalletContent
                label={label}
                value={selectedVerificationMethod}
                options={verificationMethodOptions}
                onChange={(value: any) => {
                  setBindingModel({
                    ...bindingModel,
                    options: {
                      ...bindingModel.options,
                      verificationMethod: value.id,
                    },
                  });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <JSONEditor
                value={bindingModel.credential}
                onChange={(value: string) => {
                  setBindingModel({
                    ...bindingModel,
                    credential: value,
                  });
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};
