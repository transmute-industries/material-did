import React from 'react';
import Button from '@material-ui/core/Button';
import {
  IssueVerifiableCredentialDialog,
  IIssueVerifiableCredentialDialogProps,
} from '.';

export default {
  title: 'Universal Wallet/Interface/Credentials',
  component: IssueVerifiableCredentialDialog,
};

const Entropy = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id:
    'urn:digest:d3288f0d87f58b50c5eeb8979e15fc8ce684a36ae6c360f593cde69159d6743c',
  name: 'My Entropy',
  image: 'https://issuer.interop.transmute.world/logo512.png',
  description: 'For testing only.',
  tags: ['inception'],
  correlation: [
    'urn:digest:d3288f0d87f58b50c5eeb8979e15fc8ce684a36ae6c360f593cde69159d6743c',
  ],
  type: 'Entropy',
  value: '712645d49e11c871c17ed149a48e0c3cdb24ecebfcf5ef885d1d8c078d4fcc24',
};

const Ed25519VerificationKey2018 = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id:
    'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
  type: 'Ed25519VerificationKey2018',
  controller: [
    'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
  ],
  publicKeyBase58: '8ZsSX7Vg8SRy1XRaPdE8QR8BptL34mPFMGJzUi6ayMJH',
  privateKeyBase58:
    '3GD7Tf1LVyyeFTDGyKN965Uxv4URGpqXf1zatENh8KD4nhhxnpSAHrXFt8gSK7ef1qLtyeQNutW1znAVGhFb7wC5',
  name: 'My Signing Key',
  image: 'https://issuer.interop.transmute.world/logo512.png',
  description: 'Generated from seed.',
  tags: ['inception'],
  correlation: [
    'urn:digest:d3288f0d87f58b50c5eeb8979e15fc8ce684a36ae6c360f593cde69159d6743c',
  ],
};

const X25519KeyAgreementKey2019 = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id:
    'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6LSnyFDbNfnxgA9MjPwxubimEn2HeDz82kcTgy5XviPUzMU',
  type: 'X25519KeyAgreementKey2019',
  controller: [
    'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6LSnyFDbNfnxgA9MjPwxubimEn2HeDz82kcTgy5XviPUzMU',
  ],
  publicKeyBase58: 'CJ5454rvsDSQGM2BSG5mSeZYSVgsRRaTaiFQ3U4rmcai',
  privateKeyBase58: 'Dw9WeBXLdBPr5wLVkPNAaTeC5vMhouJqngHrsyTNnXjN',
  name: 'My Encryption Key',
  image: 'https://issuer.interop.transmute.world/logo512.png',
  description: 'Generated from seed.',
  tags: ['inception'],
  correlation: [
    'urn:digest:d3288f0d87f58b50c5eeb8979e15fc8ce684a36ae6c360f593cde69159d6743c',
  ],
};

const unlockedContents = [
  Entropy,
  Ed25519VerificationKey2018,
  X25519KeyAgreementKey2019,
];

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
