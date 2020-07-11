import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Interface, WalletContentsTable } from '@material-did/universal-wallet';

import Eth from 'ethjs';

declare var window: any;

export default {
  title: 'MetaMask',
};

var Web3 = require('web3');

// https://docs.metamask.io/guide/ethereum-provider.html#properties
const networkIdToNamedNetwork = (id: number) => {
  const map: any = {
    1: 'mainnet',
    2: 'morden',
    3: 'ropsten',
    4: 'rinkeby',
    5: 'goerli',
    42: 'kovan',
  };
  return map[id] ? map[id] : 'private';
};

const getWalletContents = async () => {
  const { ethereum }: any = window;
  const accounts = await ethereum.enable();
  const eth = new Eth(ethereum);
  const network = networkIdToNamedNetwork(ethereum.networkVersion);
  let i = 0;
  const controllers = await Promise.all(
    accounts.map(async (account: string) => {
      i++;
      return {
        '@context': [
          'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
        ],
        id: `did:ethr:${account}`,
        type: 'EthereumAddress',
        controller: [`did:ethr:${account}`],
        name: `MetaMask Account ${i}`,
        image: 'https://metamask.io/images/webclip.png',
        description: 'My ropsten testnet account.',
        privateKeyBrowser: `urn:metamask:${account}`,
      };
    })
  );
  i = 0;
  const currencies = await Promise.all(
    accounts.map(async (account: string) => {
      const balance = await eth.getBalance(account);
      const etherValue = Eth.fromWei(balance.toString(), 'ether');
      i++;
      return {
        '@context': [
          'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
        ],
        id: `https://${network}.etherscan.io/address/${account}`,
        type: 'Currency',
        amount: etherValue,
        currency: 'ETH',
        controller: [`did:ethr:${account}`],
        name: `MetaMask Balance ${i}`,
        image: 'https://metamask.io/images/webclip.png',
        description: 'Hot wallet funds.',
      };
    })
  );
  const contents = [...currencies, ...controllers];
  // console.log(JSON.stringify(contents, null, 2));
  return contents;
};

const sendETH = async (from: string, amount: string, to: string) => {
  const { ethereum }: any = window;
  await ethereum.enable();
  const amountWei = Web3.utils.toWei(amount, 'ether');
  const params = [
    {
      from,
      to,
      gas: '0x76c0', // 30400
      gasPrice: '0x9184e72a000', // 10000000000000
      value: Web3.utils.numberToHex(amountWei),
      data: '0x0',
    },
  ];

  ethereum.sendAsync({
    method: 'eth_sendTransaction',
    params,
    from: from,
  });

  // console.log('params: ', params);
  // ethereum.send('eth_sendTransaction', params);
  // console.log('yolo');
};

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
          <Interface.TransferCurrencyDialog
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
        <WalletContentsTable walletState={walletState} />
      )}
    </div>
  );
};
