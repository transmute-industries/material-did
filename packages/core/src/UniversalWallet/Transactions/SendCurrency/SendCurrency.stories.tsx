import React from 'react';

import {
  TransactionPreviewSendCurrency,
  ITransactionPreviewSendCurrencyProps,
} from '.';

import { EthereumAddress, Profile, Currency } from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Transactions',
  component: TransactionPreviewSendCurrency,
};

const args = {
  sender: EthereumAddress,
  envelope: {
    id: Currency.id,
    amount: '0.03',
    currency: Currency.currency,
  },
  receiver: Profile,
};

export const SendCurrency = (
  props?: Partial<ITransactionPreviewSendCurrencyProps>
) => (
  <div>
    <TransactionPreviewSendCurrency {...args} {...props} />
  </div>
);
