import React from 'react';
import Button from '@material-ui/core/Button';
import {
  IssueVerifiableCredentialDialog,
  IIssueVerifiableCredentialDialogProps,
} from '.';

import { unlockedContents } from '../../fixtures';

export default {
  title: 'Interface/Credentials',
  component: IssueVerifiableCredentialDialog,
};

const walletState = {
  status: 'UNLOCKED',
  contents: unlockedContents,
};

export const Issue = (
  props?: Partial<IIssueVerifiableCredentialDialogProps>
) => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <IssueVerifiableCredentialDialog
        walletState={walletState}
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
