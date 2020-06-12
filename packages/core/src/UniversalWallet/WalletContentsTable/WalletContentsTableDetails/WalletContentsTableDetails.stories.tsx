import React from 'react';
import {
  WalletContentsTableDetails,
  IWalletContentsTableDetailsProps,
} from './WalletContentsTableDetails';

import { unlockedContents } from '../../fixtures';

export default {
  // id: 20,
  title: 'Components|Universal Wallet.Content',
  component: WalletContentsTableDetails,
};

export const Profile = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Person';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Entropy = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Entropy';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Mnemonic = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Mnemonic';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Currency = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Currency';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Key = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'X25519KeyAgreementKey2019';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Credential = (
  props?: Partial<IWalletContentsTableDetailsProps>
) => {
  const document = unlockedContents.find((item: any) => {
    return Array.isArray(item.type) && item.type[0] === 'VerifiableCredential';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Presentation = (
  props?: Partial<IWalletContentsTableDetailsProps>
) => {
  const document = unlockedContents.find((item: any) => {
    return (
      Array.isArray(item.type) && item.type[0] === 'VerifiablePresentation'
    );
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};
