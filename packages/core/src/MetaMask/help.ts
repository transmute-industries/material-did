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

const Eth = require('ethjs');

export const getWalletContents = async () => {
  const { ethereum }: any = window;
  const accounts = await ethereum.enable();
  const eth = new Eth(ethereum);
  const network = networkIdToNamedNetwork(ethereum.networkVersion);
  const currencies = await Promise.all(
    accounts.map(async (account: string) => {
      const balance = await eth.getBalance(account);
      const etherValue = Eth.fromWei(balance.toString(), 'ether');
      return {
        '@context': [
          'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
        ],
        id: `https://${network}.etherscan.io/address/${account}`,
        type: 'Currency',
        amount: etherValue,
        currency: 'ETH',
        controller: [`did:ethr:${account}`],
        name: `MetaMask ${account}`,
        image: 'https://metamask.io/images/webclip.png',
        description: 'Hot wallet funds.',
      };
    })
  );
  return currencies;
};
