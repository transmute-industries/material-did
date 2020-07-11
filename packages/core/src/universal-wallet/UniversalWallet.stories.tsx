import React from 'react';
import { UniversalWallet } from '..';

import { UniversalWallet2020 } from '@transmute/universal-wallet';

export default {
  title: 'Universal Wallet/Wallet/Cards',
};

const image =
  'https://www.transmute.industries/svg/Logo-Transmute-icon-Purp.svg';

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

const Mnemonic = {
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

const Currency = {
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

const EthereumAddress = {
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

const Presentation = {
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

const MetaData = {
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

const Profile = {
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
  Profile,
  Entropy,
  EthereumAddress,
  Mnemonic,
  Ed25519VerificationKey2018,
  X25519KeyAgreementKey2019,
  Currency,
  Credential,
  Presentation,
  MetaData,
];

const lockedContents = [
  {
    id:
      'urn:digest:d3288f0d87f58b50c5eeb8979e15fc8ce684a36ae6c360f593cde69159d6743c',
    jwe: {
      protected: 'eyJlbmMiOiJYQzIwUCJ9',
      recipients: [
        {
          header: {
            kid:
              'did:key:z6Mkf7FWHfJANm9n4hPMt3dmtAcqnkNuyJLHSovSMnfq4Wws#z6LSpndE8VEdX3kBMMFNnBjvha2ZypXxhBZCfW7qeojX2V6J',
            alg: 'ECDH-ES+A256KW',
            epk: {
              kty: 'OKP',
              crv: 'X25519',
              x: 'FgUN-lPYL532zuTV1qdiv39c9fL4MQkCaP0LlzB222o',
            },
            apu: 'FgUN-lPYL532zuTV1qdiv39c9fL4MQkCaP0LlzB222o',
            apv:
              'ZGlkOmtleTp6Nk1rZjdGV0hmSkFObTluNGhQTXQzZG10QWNxbmtOdXlKTEhTb3ZTTW5mcTRXd3MjejZMU3BuZEU4VkVkWDNrQk1NRk5uQmp2aGEyWnlwWHhoQlpDZlc3cWVvalgyVjZK',
          },
          encrypted_key:
            'DkGWJZBTgzimoveBnB8NCW9aEDTQfDyy6f4oTMFY6BmlCXhutPznLw',
        },
      ],
      iv: 'f7giHN0QzPoBU-5BOmzS3zN0JbIm9vhx',
      ciphertext:
        'oOBUBCm7ybRRNw9iZjUIF8W6EpLz5PxF4I07AcD2SMJbwtCN4cWdh2SM-kmEqGqT55v4wZE6PcLsTeiZ15caRmK8IXwH_yaB2PV13uzZJT_FvepREavJBJd9Fd-sLLur1ffcrgUDcyB_YnoS-sw2JBkrRbxBx0yQ321EjtnpIy2WtwTBvUb4Av0UxZtzI5tP8WFbO1J-FpUhmd7DvwWMvAXOjIaBk69iBbbQ1aHO8BRQ5D-3LNEBdxyePx-wNLwByZMQrD0f27jVAa--h8BuTsvzqWe1-rBhyfc8kykzbCpmqYf7rY8odyCOR0N762DwKgvB4GOTZNaJ8n_dC7tP7f1DIcf5HLk-n7mzX-CHIUez55AnrgIuLsBFdlNNOtIoF6N4gzscq-ZRkOQmsISWe9FNZqNsypc8EV5i4tjQi7ByqniPjgEdgdrW7GtNHYe1KTFFjmivjaiOQMIelorhCGZiJL7lhTv_wr1TsoGG1GQt3k_s_-6LZfvGao3UAvVohu3a',
      tag: 'QFTODSot08yIp29ONRuDoA',
    },
  },
  {
    id:
      'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f',
    jwe: {
      protected: 'eyJlbmMiOiJYQzIwUCJ9',
      recipients: [
        {
          header: {
            kid:
              'did:key:z6Mkf7FWHfJANm9n4hPMt3dmtAcqnkNuyJLHSovSMnfq4Wws#z6LSpndE8VEdX3kBMMFNnBjvha2ZypXxhBZCfW7qeojX2V6J',
            alg: 'ECDH-ES+A256KW',
            epk: {
              kty: 'OKP',
              crv: 'X25519',
              x: '6ykSeNz_II136iSrD-myFJ7CuIol9tlrm9FyWGKyS2w',
            },
            apu: '6ykSeNz_II136iSrD-myFJ7CuIol9tlrm9FyWGKyS2w',
            apv:
              'ZGlkOmtleTp6Nk1rZjdGV0hmSkFObTluNGhQTXQzZG10QWNxbmtOdXlKTEhTb3ZTTW5mcTRXd3MjejZMU3BuZEU4VkVkWDNrQk1NRk5uQmp2aGEyWnlwWHhoQlpDZlc3cWVvalgyVjZK',
          },
          encrypted_key:
            'OXYQKiPs4MLjgNtguQ8OpQVN8VRPnaqW_M0mSHUWcBbkz0Z39lOYlw',
        },
      ],
      iv: 'PyRRaIRSXort2EJsJoMqbEreiY_pIKeB',
      ciphertext:
        'pT-q9MvpkBzvC9DLr7byBspVvJXgmCQEaB4tFCioiD6HHlAoyNjPDgek8MKulBzOFpRECo5YGKZhC2FWbhmrsL2S4_wmnB2vOjqud5QkbNZDEX4lB1RaKvjpjC_IGspfOCqw_ap9D5xTrkwucJl01i2JmPx878b4JXjcm7icf1mYz3cm-TjBkTo-_eXuWXEANT0z9imGxuUqS4lymFYPIp4S5phEXFTmeXnJxyqPqd6XX1Hu8Hmjvo1kRZSeVRMdCVv0fF8NSW3OLjQzxJVW0MRUs4uNTZOoAJ8M-_JkDi14AB74SUVeZMM6fIQW8VLAPAhkCD73Wlmkih2OBQpjLIJXjJNyXNAmwcjXEpT97rC9v5Bkon9SyDt6TwLPQk3QppggN6tH97datG2WRKcKHs8a_ZjusKsHGfj9MBLfar5xHCZy8db1DeJNJ912ifGu5ZV7F3-5pg5P1IlSJj6eM8EYeJrWWCysBm4vPhsx1jarE09GRpN7e_oI2fiu9z-IlfZB1n8tbuCXDGUvQ9XzlPQbj6PVqZAaxpbAyoLJwFzEAnFCLCKpc_5RMVSt-5CpuH3vPb_hgUmTYS2NQPmnq1m5zEU8n0Q8wlVTVFmOu9UlDp8W2jcZWumf1EBajKR9HezlgHr_T-zJtDw_K-yPx63qDwv0a5m-hpDhimHB707FMJgbLdx_hOL4V1YP8B0b2eIrMYfSTGpT545qNUFr4KewGZpqEmm9ilm0n2rf9_AIXyVxp2Wc3HMIve5YPczE36o3ZNRzgZpnKKXOnl6SYhhrxyRxiHF3zDWd9_guSpyMko5TCs1B3uqmwuVCRKjM_cfsf_8HBCyiMCJzM2b9kod7dYnD8Nv-1mMEPBOd1TG5gs2_u0PimwM9Fg',
      tag: 'hmkF8qyhATtA51z_Yds9IA',
    },
  },
  {
    id:
      'did:key:z6Mkn28V7Mk7TyvS82GH5CByFWgBeTbtUedc3HDvJz4bta5f#z6LSnyFDbNfnxgA9MjPwxubimEn2HeDz82kcTgy5XviPUzMU',
    jwe: {
      protected: 'eyJlbmMiOiJYQzIwUCJ9',
      recipients: [
        {
          header: {
            kid:
              'did:key:z6Mkf7FWHfJANm9n4hPMt3dmtAcqnkNuyJLHSovSMnfq4Wws#z6LSpndE8VEdX3kBMMFNnBjvha2ZypXxhBZCfW7qeojX2V6J',
            alg: 'ECDH-ES+A256KW',
            epk: {
              kty: 'OKP',
              crv: 'X25519',
              x: '9Pj-5_-MJVVGgGKViDkeCtuIaIhRyzMkq44TqmnQtGs',
            },
            apu: '9Pj-5_-MJVVGgGKViDkeCtuIaIhRyzMkq44TqmnQtGs',
            apv:
              'ZGlkOmtleTp6Nk1rZjdGV0hmSkFObTluNGhQTXQzZG10QWNxbmtOdXlKTEhTb3ZTTW5mcTRXd3MjejZMU3BuZEU4VkVkWDNrQk1NRk5uQmp2aGEyWnlwWHhoQlpDZlc3cWVvalgyVjZK',
          },
          encrypted_key:
            'OKcgBvtLpraB6GMrxj7W3z_zNGF7wkjAN39OoCktoRgDHcDp_DM1hQ',
        },
      ],
      iv: 'k6sQp86PHOUzX_WgPLTegu4J8sI7q5ay',
      ciphertext:
        '2Ly2TX8jhBP3kx4UzVx3YO-Klz1gK9XJRIQyQonbwdrkgn67iVDP-0kdG7hO3HprQZdI7y0fi9zyWVJ8XDhnBDos0BZ0iK4wOfnZjqEC1c0AC9LqT_9E0up8nx_1I4TEXsfss10k5gNAJW7bgL6QJj6qgdGu3-R1ojjTgc1mIWEdbEeXfEyDvPM8ZB5lOxELPRhGmkPBRw9qoaQWLwZWwX-BptuNMZ4QytZ0bJldXcRostWhdpLBoDb0x1vSu-Rbqh6rnjIn5872E2-r1EgVFiK5j1okUUdJ8cwOdTOz1jrDyqKfSYPGK1_CAStf7qwX34zmgMg8OfJ1uKB0Te3eiHVwvUXZ2mHqHLiZQpIpTOb0dPubJL5u8z5ZpHVbXhITHpKFdKQyoXpII5tP76_SfQWyYRG2MD4bcMuGtbdlzpHffSPf3yTDVboG_sN8Lf8CN2Q3E8NZD2KVs6cqnIKvmqq4Rub_dqX1mkRtrrvBxGys-fcr5gSQ82apEIrSP-Hjd0vz3e3a5iq0t-HcqtsG9DCYTQJrEPNYJCTLHikKXNRZz_KuwxjlAfxmQn-GJ4IByxfRs7qPwA6lTjXsNV8hFFrWJ5SxqnkrzQ-WHxaEAgv43iC0a72WhvtTL4_r7skm-qn2VwC_Y9Zv3kFTJwhrpfkQwNOdrUoipKQpL2CwG7NroQYxrDEBxoQ_t5o7lzVbLGO1faqYlorGS0hDFqeVDyEEuUxtpa_wDmudioBPtkZxPrDBXp_XeIpqZzixEgjeyoz6zZCTpfcCn4PyL70eb75ewYgaE0_Gy047puuNJPJuIV-gXvuOheo0Mq3ikGBKTA',
      tag: 'PSq9qyzsR5PSy8-wr4epxQ',
    },
  },
];

const Default = (props: any) => {
  const [walletState, setWalletState]: any = React.useState({
    status: props.status,
    contents: props.contents,
  });

  const toggleLockStatus = async ({ status, password, contents }: any) => {
    console.log('toggleLockStatus', { status, password, contents });
    let wallet = new UniversalWallet2020(contents);
    wallet.status = status;

    if (status === 'LOCKED') {
      await wallet.unlock(password);
    }
    if (status === 'UNLOCKED') {
      await wallet.lock(password);
    }
    // console.log(JSON.stringify(wallet.contents, null, 2));
    setWalletState({
      status: wallet.status,
      contents: wallet.contents,
    });
  };

  const deleteWallet = () => {
    console.log('deleteWallet');
    setWalletState({
      status: 'UNLOCKED',
      contents: [],
    });
  };

  const importWallet = async (encryptedWallet: string) => {
    console.log('importWallet', encryptedWallet);
    let wallet = new UniversalWallet2020();
    await wallet.import(encryptedWallet);
    // console.log('wallet', wallet);
    setWalletState({
      status: wallet.status,
      contents: wallet.contents,
    });
  };

  const exportWallet = (status: string, contents: any) => {
    console.log('exportWallet', status, contents);
    if (status !== 'LOCKED') {
      throw new Error('Cannot export unlocked wallet.');
    }
    let wallet: any = new UniversalWallet2020(contents);
    wallet.status = status;
    return wallet.export();
  };

  const generateWallet = async (seed?: any) => {
    console.log('generateWallet');

    let _seed = seed;
    if (!seed) {
      const password = 'storybook';
      _seed = await UniversalWallet2020.passwordToSeed(password);
    }

    let wallet = await UniversalWallet2020.generate(_seed);
    setWalletState({
      status: wallet.status,
      contents: wallet.contents,
    });
  };

  const saveWallet = (contents: any) => {
    console.log('saveWallet', contents);
    setWalletState({
      contents,
    });
  };

  const issueCredential = async ({ credential, options }: any) => {
    console.log('issueCredential', { credential, options });
    let wallet = new UniversalWallet2020(walletState.contents);
    const verifiableCredential = await wallet.issue({
      credential,
      options,
    });
    console.log('verifiableCredential: ', verifiableCredential);
    setWalletState({
      contents: [verifiableCredential, ...walletState.contents],
    });
  };

  const proveVerifiableCredential = async ({
    verifiableCredential,
    options,
  }: any) => {
    console.log('proveVerifiableCredential', { verifiableCredential, options });
    let wallet = new UniversalWallet2020(walletState.contents);
    const verifiablePresentation = await wallet.prove({
      verifiableCredential,
      options,
    });
    // console.log(JSON.stringify(verifiablePresentation, null, 2));
    setWalletState({
      contents: [verifiablePresentation, ...walletState.contents],
    });
  };

  return (
    <div>
      <UniversalWallet
        walletState={walletState}
        image={image}
        importWallet={importWallet}
        exportWallet={exportWallet}
        toggleLockStatus={toggleLockStatus}
        saveWallet={saveWallet}
        deleteWallet={deleteWallet}
        generateWallet={generateWallet}
        issueCredential={issueCredential}
        proveVerifiableCredential={proveVerifiableCredential}
        {...props}
      />
    </div>
  );
};

export const Empty = () => {
  return <Default status={'UNLOCKED'} contents={[]} />;
};

export const Unlocked = () => {
  return <Default status={'UNLOCKED'} contents={unlockedContents} />;
};

export const Locked = () => {
  return <Default status="LOCKED" contents={lockedContents} />;
};
