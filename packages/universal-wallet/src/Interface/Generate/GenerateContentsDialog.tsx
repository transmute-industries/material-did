import React, { HTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { LinkedDataIdentifier } from '@material-did/common';
import { throttle } from 'lodash-es';

import { UniversalWallet2020 } from '@transmute/universal-wallet';

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

const seedToId = async (seed: Uint8Array) => {
  const buffer = await crypto.subtle.digest('SHA-256', seed);
  return `urn:digest:${Buffer.from(new Int8Array(buffer)).toString('hex')}`;
};

export interface IGenerateContentsDialogProps
  extends HTMLAttributes<HTMLDivElement> {
  onSubmit: any;

  component: any;
  componentProps: any;
}

export const GenerateContentsDialog = ({
  component,
  componentProps,
  onSubmit,
}: any) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    seed: '',
    seedId: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const throttledSetId = throttle(async (value: any) => {
    const seed = await UniversalWallet2020.passwordToSeed(value);
    let seedId = await seedToId(seed);
    setState({
      ...state,
      seed: Buffer.from(seed).toString('hex'),
      seedId,
    });
  }, 1 * 1000);

  const handlePasswordChange = (event: any) => {
    throttledSetId(event.target.value);
  };

  const Trigger = component;

  return (
    <React.Fragment>
      <Trigger {...componentProps} onClick={handleClickOpen}>
        Generate
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
              Generate
            </Typography>
            <Button
              autoFocus
              variant={'contained'}
              color="secondary"
              onClick={() => {
                onSubmit({
                  seed: state.seed,
                });
                handleClose();
              }}
            >
              Generate
            </Button>
          </Toolbar>
        </AppBar>

        <div style={{ padding: '16px' }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <LinkedDataIdentifier value={state.seedId} />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
