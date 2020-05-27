import React from 'react';
import Button from '@material-ui/core/Button';
import {
  ProveVerifiableCredentialDialog,
  IProveVerifiableCredentialDialogProps,
} from '.';

import { unlockedContents } from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Interface',
  component: ProveVerifiableCredentialDialog,
};

const walletState = {
  status: 'UNLOCKED',
  contents: unlockedContents,
};

export const Prove = (
  props?: Partial<IProveVerifiableCredentialDialogProps>
) => {
  const onSubmit = (data: any) => {
    console.log('onSubmit: ', data);
  };
  return (
    <div>
      <ProveVerifiableCredentialDialog
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
