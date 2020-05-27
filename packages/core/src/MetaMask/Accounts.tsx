import React, { FC, HTMLAttributes } from 'react';
import Button from '@material-ui/core/Button';

import { accountsToCurrency } from './help';

declare var window: any;

export interface IMetaMaskAccountsProps extends HTMLAttributes<HTMLDivElement> {
  getWalletContents: any;
}

export const MetaMaskAccounts: FC<IMetaMaskAccountsProps> = ({
  getWalletContents,
}) => {
  const load = async () => {
    const { ethereum } = window;
    if (typeof ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      getWalletContents();
    }
  };
  // React.useEffect(() => {
  //   load();
  // }, []);
  return (
    <div>
      <Button
        variant={'contained'}
        onClick={async () => {
          load();
        }}
      >
        Enable Ethereum
      </Button>
    </div>
  );
};
