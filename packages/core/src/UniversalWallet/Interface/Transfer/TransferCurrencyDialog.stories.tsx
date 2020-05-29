import React from 'react';
import Button from '@material-ui/core/Button';
import { TransferCurrencyDialog, ITransferCurrencyDialogProps } from '.';

import { unlockedContents } from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Interface',
  component: TransferCurrencyDialog,
};

const walletState = {
  status: 'UNLOCKED',
  contents: unlockedContents,
};

export const Transfer = (props?: Partial<ITransferCurrencyDialogProps>) => {
  const onSubmit = (data: any) => {
    console.log('onSubmit: ', data);
    // build transaction
    // submit transaction
    // await response
    // add to wallet ?
  };
  return (
    <div>
      <TransferCurrencyDialog
        walletState={walletState}
        component={Button}
        componentProps={{
          variant: 'contained',
          color: 'primary',
        }}
        onSubmit={onSubmit}
        {...props}
      />
    </div>
  );
};
