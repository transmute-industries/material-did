import React from 'react';

import { DataVault, IDataVaultProps } from '.';

export default {
  title: 'Components|Universal Wallet.Adapters',
};

export const Data_Vault = (props?: IDataVaultProps) => {
  const [state, setState] = React.useState({
    vaultEndpoint: 'http://localhost:8080/edvs',
    isSyncEnabled: true,
    isSyncing: false,
  });

  const syncVault = () => {
    console.log('syching....');
    setState({
      ...state,
      isSyncing: true,
    });
    setTimeout(() => {
      setState({
        ...state,
        isSyncing: false,
      });
    }, 5 * 1000);
  };

  return (
    <div>
      <DataVault {...state} syncVault={syncVault} {...props} />
    </div>
  );
};
