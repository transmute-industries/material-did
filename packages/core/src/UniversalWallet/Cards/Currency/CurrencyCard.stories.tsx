import React from 'react';

import { CurrencyCard, ICurrencyCardProps } from '.';

import { Currency } from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Cards',
};

export const CurrencyETH = (props?: ICurrencyCardProps) => {
  return (
    <div>
      <CurrencyCard content={Currency} {...props} />
    </div>
  );
};
