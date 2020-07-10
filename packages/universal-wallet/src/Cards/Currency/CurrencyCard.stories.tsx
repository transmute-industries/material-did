import React from 'react';

import { CurrencyCard, ICurrencyCardProps } from '.';

import { Currency as example } from '../../fixtures';

export default {
  title: 'Data Model/Cards/Currency',
};

export const Eth = (props?: ICurrencyCardProps) => {
  return (
    <div>
      <CurrencyCard content={example} {...props} />
    </div>
  );
};
