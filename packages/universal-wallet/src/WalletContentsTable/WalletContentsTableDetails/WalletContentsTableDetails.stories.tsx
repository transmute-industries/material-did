import React from 'react';
import {
  WalletContentsTableDetails,
  IWalletContentsTableDetailsProps,
} from './WalletContentsTableDetails';

export default {
  // id: 20,
  title: 'Universal Wallet/Data Model',
  component: WalletContentsTableDetails,
};

const entropy = {
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

const mnemonic = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id: 'urn:uuid:c410e44a-9525-11ea-bb37-0242ac130002',
  name: 'My Ropsten Mnemonic 1',
  image: 'https://issuer.interop.transmute.world/logo512.png',
  description: 'For testing only, totally compromised.',
  tags: ['professional', 'organization', 'compromised'],
  correlation: ['4058a72a-9523-11ea-bb37-0242ac130002'],
  type: 'Mnemonic',
  value:
    'humble piece toy mimic miss hurdle smile awkward patch drama hurry mixture',
};

const ed25519VerificationKey2018 = {
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

const x25519KeyAgreementKey2019 = {
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

const currency = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id:
    'https://ropsten.etherscan.io/address/0x3b4477c4cd54718d32d4df393415796b9bfcb63c',
  type: 'Currency',
  amount: '4.999356509',
  currency: 'ETH',
  controller: ['did:ethr:0x3b4477c4cd54718d32d4df393415796b9bfcb63c'],
  name: 'MetaMask Balance',
  image: 'https://metamask.io/images/webclip.png',
  description: 'Hot wallet funds.',
};

const ethereumAddress = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id: 'did:ethr:0x3b4477c4cd54718d32d4df393415796b9bfcb63c',
  type: 'EthereumAddress',
  controller: ['did:ethr:0x3b4477c4cd54718d32d4df393415796b9bfcb63c'],
  name: 'MetaMask Account',
  image: 'https://metamask.io/images/webclip.png',
  description: 'My ropsten testnet account.',
  privateKeyBrowser: 'urn:metamask:0x3b4477c4cd54718d32d4df393415796b9bfcb63c',
};

const credential = {
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

const presentation = {
  '@context': ['https://www.w3.org/2018/credentials/v1'],
  type: ['VerifiablePresentation'],
  holder: 'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
  verifiableCredential: [
    {
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
    },
  ],
  proof: {
    type: 'Ed25519Signature2018',
    created: '2020-05-27T01:56:22Z',
    challenge: '99612b24-63d9-11ea-b99f-4f66f3e4f81a',
    domain: 'verifier.example.com',
    jws:
      'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Q-Kpm1ETAych4Jiat4wAtovQ62FVMF4yMKhFsc8YGh-BmPdOIADTdurLl7iw3RNQVhqE98x81zDa6fN92zBXAw',
    proofPurpose: 'authentication',
    verificationMethod:
      'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
  },
};

const metaData = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id: 'urn:uuid:2905324a-9524-11ea-bb37-0242ac130002',
  type: 'MetaData',
  name: 'Degree Notes',
  image: 'https://issuer.interop.transmute.world/logo512.png',
  description: 'Personal notes about this degree.',
  tags: ['professional', 'organization'],
  correlation: ['urn:uuid:4058a72a-9523-11ea-bb37-0242ac130002'],
  note:
    "I've shared this degree, with many websites that have been breached. It should be considered public information at this point :(",
};

const profile = {
  '@context': [
    'https://transmute-industries.github.io/universal-wallet/contexts/wallet-v1.json',
  ],
  id: 'did:example:123456789abcdefghi',
  type: 'Person',
  name: 'John Smith',
  image: 'https://issuer.interop.transmute.world/logo512.png',
  description: 'Professional software developer for Acme Corp.',
  tags: ['professional', 'person'],
  correlation: ['4058a72a-9523-11ea-bb37-0242ac130002'],
};
const unlockedContents = [
  profile,
  entropy,
  ethereumAddress,
  mnemonic,
  ed25519VerificationKey2018,
  x25519KeyAgreementKey2019,
  currency,
  credential,
  presentation,
  metaData,
];

export const Profile = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Person';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Entropy = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Entropy';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Mnemonic = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Mnemonic';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Currency = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'Currency';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Key = (props?: Partial<IWalletContentsTableDetailsProps>) => {
  const document = unlockedContents.find((item: any) => {
    return item.type === 'X25519KeyAgreementKey2019';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Credential = (
  props?: Partial<IWalletContentsTableDetailsProps>
) => {
  const document = unlockedContents.find((item: any) => {
    return Array.isArray(item.type) && item.type[0] === 'VerifiableCredential';
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};

export const Presentation = (
  props?: Partial<IWalletContentsTableDetailsProps>
) => {
  const document = unlockedContents.find((item: any) => {
    return (
      Array.isArray(item.type) && item.type[0] === 'VerifiablePresentation'
    );
  });
  return (
    <div>
      <WalletContentsTableDetails document={document} {...props} />
    </div>
  );
};
