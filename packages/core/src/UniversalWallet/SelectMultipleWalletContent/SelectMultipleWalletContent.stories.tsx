import React from 'react';
import {
  SelectMultipleWalletContent,
  ISelectMultipleWalletContentProps,
} from '.';

import { unlockedContents } from '../fixtures';

export default {
  title: 'Components|Universal Wallet.Select',
  component: SelectMultipleWalletContent,
};

const options = unlockedContents.filter((v: any) => {
  return v.id !== undefined;
});

const value = options[0];

const label = 'Select Wallet Contents';

const onChange = (option: any) => {
  console.log('selected: ', option);
};

export const SelectMultiple = (
  props?: Partial<ISelectMultipleWalletContentProps>
) => (
  <div>
    <SelectMultipleWalletContent
      label={label}
      value={[value]}
      options={options}
      onChange={onChange}
      {...props}
    />
  </div>
);
