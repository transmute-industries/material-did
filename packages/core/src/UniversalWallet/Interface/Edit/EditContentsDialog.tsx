import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MenuItem from '@material-ui/core/MenuItem';

import { JSONEditor } from '../../../Common/JSONEditor';
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

export const EditContentsDialog = ({ walletState, saveWallet }: any) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [editorValue, setEditorValue] = React.useState(
    JSON.stringify(walletState.contents, null, 2)
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
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
              Edit
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => {
                saveWallet(JSON.parse(editorValue));
                handleClose();
              }}
            >
              Save
            </Button>
          </Toolbar>
          <JSONEditor value={editorValue} onChange={setEditorValue} />
        </AppBar>
      </Dialog>
    </React.Fragment>
  );
};
