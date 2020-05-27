import React from 'react';
import { SelectWalletContent, ISelectWalletContentProps } from '.';

import {
  Ed25519VerificationKey2018,
  X25519KeyAgreementKey2019,
} from '../fixtures';

export default {
  title: 'Components|Universal Wallet.Select',
  component: SelectWalletContent,
};

const options = [Ed25519VerificationKey2018, X25519KeyAgreementKey2019];

const value = options[0];

const label = 'Select Wallet Key';

const onChange = (option: any) => {
  console.log('selected: ', option);
};

export const SelectOne = (props?: Partial<ISelectWalletContentProps>) => (
  <div>
    <SelectWalletContent
      label={label}
      value={value}
      options={options}
      onChange={onChange}
      {...props}
    />
  </div>
);
