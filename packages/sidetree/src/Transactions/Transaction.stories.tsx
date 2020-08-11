import React from 'react';

import { Transaction, ITransactionProps } from '.';

export default {
  title: 'Sidetree/Transactions',
  component: Transaction,
};

const transactions = [
  {
    _id: '5f32e864bcea952eb6a311da',
    anchorString: '1.QmQ9vWpXQozUwM4pQYxomNJqyE8fXxWBd9842xJ3LoeKRy',
    transactionNumber: 0,
    transactionTime: 2,
    transactionTimeHash:
      '0x7e22eabd2bda21b0eafc5106f5c44b898994ecbc4ce1b4cc7e6e1a10072611fa',
    transactionFeePaid: null,
    normalizedTransactionFee: null,
    writer: 'writer',
  },
  {
    _id: '5f32e870bcea952eb6a311de',
    anchorString: '1.QmWtNqr8K2to7AWCXhFAaK3SeDzjbTwA6Qhb3AhvzqWZ6G',
    transactionNumber: 1,
    transactionTime: 3,
    transactionTimeHash:
      '0x863cf9f1a99e50ea4ae71b4e3f136a0f3b4edb732fd22adabf73b4c549cfae44',
    transactionFeePaid: null,
    normalizedTransactionFee: null,
    writer: 'writer',
  },
];

export const _Transaction = (props?: Partial<ITransactionProps>) => (
  <div style={{ padding: '8px' }}>
    <Transaction transaction={transactions[0]} {...props} />
  </div>
);
