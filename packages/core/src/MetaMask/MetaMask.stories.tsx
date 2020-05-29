import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getWalletContents, sendETH } from './help';

import { ContentsTable } from '../UniversalWallet/ContentsTable';
import { TransferCurrencyDialog } from '../UniversalWallet/Interface/Transfer';

export default {
  title: 'MetaMask',
};

declare var window: any;

export const Demo = () => {
  const [walletState, setWalletState] = React.useState({
    contents: [],
  });

  const _getWalletContents = async () => {
    const { ethereum } = window;
    if (typeof ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const contents: any = await getWalletContents();
      // console.log('getWalletContents: ', contents);
      setWalletState({
        contents,
      });
    }
  };

  const _onSubmit = (data: any) => {
    // console.log('onSubmit: ', data);
    sendETH(
      data.options.sender
        .split(':')
        .pop()
        .split('#')[0],
      data.options.amount,
      data.options.receiver
        .split(':')
        .pop()
        .split('#')[0]
    );
    // build transaction
    // submit transaction
    // await response
    // add to wallet ?
  };

  return (
    <div>
      <Typography variant={'h6'} gutterBottom>
        You need <a href="https://metamask.io/">metamask</a> for this demo to
        work.
      </Typography>
      <div
        style={{ marginBottom: '16px', display: 'flex', flexDirection: 'row' }}
      >
        <Button
          variant={'contained'}
          style={{ marginRight: '8px' }}
          onClick={async () => {
            _getWalletContents();
          }}
        >
          Load Wallet
        </Button>
        {!!walletState.contents.length && (
          <TransferCurrencyDialog
            walletState={walletState}
            component={Button}
            componentProps={{
              variant: 'contained',
              color: 'primary',
            }}
            onSubmit={_onSubmit}
          />
        )}
      </div>

      {!!walletState.contents.length && (
        <ContentsTable walletState={walletState} />
      )}
    </div>
  );
};
