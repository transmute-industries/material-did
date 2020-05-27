import React from 'react';

import { MetaMaskAccounts, IMetaMaskAccountsProps } from '.';
import { getWalletContents } from './help';

import { ContentsTable } from '../UniversalWallet/ContentsTable';

export default {
  title: 'MetaMask',
  component: MetaMaskAccounts,
};

export const Accounts = (props?: Partial<IMetaMaskAccountsProps>) => {
  const [walletState, setWalletState] = React.useState({
    contents: [],
  });

  const _getWalletContents = async () => {
    const contents: any = await getWalletContents();
    console.log('getWalletContents: ', contents);
    setWalletState({
      contents,
    });
  };

  return (
    <div>
      <MetaMaskAccounts getWalletContents={_getWalletContents} />
      <br />
      <ContentsTable walletState={walletState} />
    </div>
  );
};
