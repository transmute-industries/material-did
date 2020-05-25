import React from 'react';
import Button from '@material-ui/core/Button';
import {
  IssueVerifiableCredentialDialog,
  IIssueVerifiableCredentialDialogProps,
} from '.';

import {
  Ed25519VerificationKey2018,
  X25519KeyAgreementKey2019,
  Credential,
} from '../../fixtures';

export default {
  title: 'Components|Universal Wallet.Interface',
  component: IssueVerifiableCredentialDialog,
};

const verificationMethodOptions = [
  Ed25519VerificationKey2018,
  X25519KeyAgreementKey2019,
];

const issueCredentialOptions = {
  verificationMethod:
    'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
  proofPurpose: 'assertionMethod',
  created: '2020-04-02T18:48:36Z',
};

const credential = Credential;
delete credential.proof;

export const Issue = (
  props?: Partial<IIssueVerifiableCredentialDialogProps>
) => {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <IssueVerifiableCredentialDialog
        verificationMethodOptions={verificationMethodOptions}
        issueCredentialOptions={issueCredentialOptions}
        credential={credential}
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
