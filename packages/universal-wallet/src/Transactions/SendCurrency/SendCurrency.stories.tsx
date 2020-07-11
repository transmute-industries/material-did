import React from 'react';

import {
  TransactionPreviewSendCurrency,
  ITransactionPreviewSendCurrencyProps,
} from '.';

import { EthereumAddress, Profile, Currency } from '../../fixtures';

export default {
  title: 'Interface/Currency',
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

export const TransferCurrency = (
  props?: Partial<ITransactionPreviewSendCurrencyProps>
) => (
  <div>
    <TransactionPreviewSendCurrency {...args} {...props} />
  </div>
);
