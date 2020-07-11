import React from 'react';
import Button from '@material-ui/core/Button';
import { GenerateContentsDialog, IGenerateContentsDialogProps } from '..';

export default {
  title: 'Universal Wallet/Interface',
  component: GenerateContentsDialog,
};

// const password = 'correct horse battery staple';

export const Generate = (props?: Partial<IGenerateContentsDialogProps>) => {
  const onSubmit = (data: any) => {
    console.log('onSubmit: ', data);
    // build transaction
    // submit transaction
    // await response
    // add to wallet ?
  };
  return (
    <div>
      <GenerateContentsDialog
        component={Button}
        componentProps={{
          variant: 'contained',
          color: 'primary',
        }}
        onSubmit={onSubmit}
        {...props}
      />
    </div>
  );
};
