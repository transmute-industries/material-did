import React from 'react';
import Button from '@material-ui/core/Button';
import { QRCodeScannerDialog, IQRCodeScannerDialogProps } from '.';

export default {
  title: 'Common|QR Code Scanner',
  component: QRCodeScannerDialog,
};

export const QRCodeScanner = (props?: Partial<IQRCodeScannerDialogProps>) => {
  const [state, setState] = React.useState({
    open: false,
  });
  const onClose = () => {
    setState({ ...state, open: false });
  };
  const onSubmit = (data: any) => {
    console.log(data);
    onClose();
  };
  return (
    <div>
      <Button
        variant={'contained'}
        color={'primary'}
        onClick={() => {
          setState({
            ...state,
            open: true,
          });
        }}
      >
        Scan QR Code
      </Button>
      <QRCodeScannerDialog
        open={state.open}
        onClose={onClose}
        onSubmit={onSubmit}
        {...props}
      />
    </div>
  );
};
