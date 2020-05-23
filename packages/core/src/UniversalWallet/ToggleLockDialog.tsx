import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';

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

export const ToggleLockDialog = ({
  status,
  toggleLockStatus,
  passwordPrompt,
  keystore,
}: any) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    password: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>
        {' '}
        {status === 'locked' ? 'Unlock' : 'Lock'}
      </MenuItem>
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
              {status === 'locked' ? 'Unlock' : 'Lock'}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>

        <form style={{ width: '75%', margin: 'auto', padding: '16px' }}>
          <Typography variant="h6" style={{ marginBottom: '16px' }}>
            {passwordPrompt}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            value={state.password}
            onChange={(event: any) => {
              setState({
                password: event.target.value,
              });
            }}
            fullWidth
          />
          <Button
            style={{ marginTop: '16px' }}
            variant={'contained'}
            onClick={() => {
              toggleLockStatus({
                status: keystore.status,
                password: state.password,
                contents: keystore.contents,
              });
              handleClose();
            }}
          >
            {status === 'locked' ? 'Unlock' : 'Lock'}{' '}
          </Button>
        </form>
      </Dialog>
    </div>
  );
};
