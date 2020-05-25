import React from 'react';
import {
  WalletContentDetails,
  IWalletContentDetailsProps,
} from './WalletContentDetails';

import { unlockedContents } from './fixtures';

export default {
  // id: 20,
  title: 'Components|Universal Wallet.Content',
  component: WalletContentDetails,
};

export const Profile = (props?: Partial<IWalletContentDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Person';
  });
  return (
    <div>
      <WalletContentDetails document={document} {...props} />
    </div>
  );
};

export const Entropy = (props?: Partial<IWalletContentDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Entropy';
  });
  return (
    <div>
      <WalletContentDetails document={document} {...props} />
    </div>
  );
};

export const Mnemonic = (props?: Partial<IWalletContentDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Mnemonic';
  });
  return (
    <div>
      <WalletContentDetails document={document} {...props} />
    </div>
  );
};

export const Currency = (props?: Partial<IWalletContentDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Currency';
  });
  return (
    <div>
      <WalletContentDetails document={document} {...props} />
    </div>
  );
};

export const Key = (props?: Partial<IWalletContentDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'X25519KeyAgreementKey2019';
  });
  return (
    <div>
      <WalletContentDetails document={document} {...props} />
    </div>
  );
};

export const Credential = (props?: Partial<IWalletContentDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return Array.isArray(item.type) && item.type[0] === 'VerifiableCredential';
  });
  return (
    <div>
      <WalletContentDetails document={document} {...props} />
    </div>
  );
};
