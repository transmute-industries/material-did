import React from 'react';
import Button from '@material-ui/core/Button';
import { TransferCurrencyDialog, ITransferCurrencyDialogProps } from '.';

export default {
  title: 'Universal Wallet/Interface/Currency',
  component: TransferCurrencyDialog,
};

const Currency = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id:
    'https://ropsten.etherscan.io/address/0x3b4477c4cd54718d32d4df393415796b9bfcb63c',
  type: 'Currency',
  amount: '4.999356509',
  currency: 'ETH',
  controller: ['did:ethr:0x3b4477c4cd54718d32d4df393415796b9bfcb63c'],
  name: 'MetaMask Balance',
  image: 'https://metamask.io/images/webclip.png',
  description: 'Hot wallet funds.',
};

const EthereumAddress = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id: 'did:ethr:0x3b4477c4cd54718d32d4df393415796b9bfcb63c',
  type: 'EthereumAddress',
  controller: ['did:ethr:0x3b4477c4cd54718d32d4df393415796b9bfcb63c'],
  name: 'MetaMask Account',
  image: 'https://metamask.io/images/webclip.png',
  description: 'My ropsten testnet account.',
  privateKeyBrowser: 'urn:metamask:0x3b4477c4cd54718d32d4df393415796b9bfcb63c',
};

const unlockedContents = [Currency, EthereumAddress];
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
