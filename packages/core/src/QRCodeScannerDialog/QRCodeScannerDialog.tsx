import React, { FC, HTMLAttributes } from 'react';
import _ from 'lodash';
import QrReader from 'react-qr-reader';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { JSONEditor } from '@material-did/common';

let context = new AudioContext();

const beep = _.throttle((freq = 300, duration = 200, vol = 50) => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.connect(gain);
  oscillator.frequency.value = freq;
  oscillator.type = 'sine';
  gain.connect(context.destination);
  gain.gain.value = vol * 0.01;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration * 0.001);
}, 1 * 1000);

export interface IQRCodeScannerDialogProps
  extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: any;
  onSubmit: any;
}

export const QRCodeScannerDialog: FC<IQRCodeScannerDialogProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [state, setState] = React.useState({
    data: '',
  });
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(state.data);
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Scan QR Code</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <QrReader
                delay={100}
                resolution={800}
                onError={() => {
                  // do nothing
                }}
                onScan={(data: any) => {
                  if (data) {
                    beep(300, 300, 25);
                    setState({
                      data: JSON.stringify({ data }, null, 2),
                    });
                  }
                }}
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <JSONEditor
                value={state.data}
                // style={{ height: "128px" }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
