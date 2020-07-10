import Eth from 'ethjs';

var Web3 = require('web3');

// https://docs.metamask.io/guide/ethereum-provider.html#properties
export const networkIdToNamedNetwork = (id: number) => {
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

export const getWalletContents = async () => {
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

export const sendETH = async (from: string, amount: string, to: string) => {
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
