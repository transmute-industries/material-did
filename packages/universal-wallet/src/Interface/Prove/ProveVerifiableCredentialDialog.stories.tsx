import React from 'react';
import Button from '@material-ui/core/Button';
import {
  ProveVerifiableCredentialDialog,
  IProveVerifiableCredentialDialogProps,
} from '.';

export default {
  title: 'Universal Wallet/Interface/Credentials',
  component: ProveVerifiableCredentialDialog,
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

const Credential = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://www.w3.org/2018/credentials/examples/v1',
  ],
  id: 'http://example.gov/credentials/0.6012887606574315',
  type: ['VerifiableCredential', 'UniversityDegreeCredential'],
  issuer: 'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
  issuanceDate: '2020-03-10T04:24:12.164Z',
  credentialSubject: {
    id: 'did:example:456',
    degree: {
      type: 'BachelorDegree',
      name: 'Bachelor of Science and Arts',
    },
  },
  proof: {
    type: 'Ed25519Signature2018',
    created: '2020-05-27T01:53:59Z',
    jws:
      'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..yTwDh8nXoncrBWZYEmXLTaGcJh7L4y7PJ--FVjw8CpcAvfPNdv_jUTkRkjSFyjO6VMiE0isiiYw5nUClzXCmAg',
    proofPurpose: 'assertionMethod',
    verificationMethod:
      'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
  },
};

const unlockedContents = [
  Entropy,
  Ed25519VerificationKey2018,
  X25519KeyAgreementKey2019,
  Credential,
];
const walletState = {
  status: 'UNLOCKED',
  contents: unlockedContents,
};

export const Prove = (
  props?: Partial<IProveVerifiableCredentialDialogProps>
) => {
  const onSubmit = (data: any) => {
    console.log('onSubmit: ', data);
  };
  return (
    <div>
      <ProveVerifiableCredentialDialog
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
