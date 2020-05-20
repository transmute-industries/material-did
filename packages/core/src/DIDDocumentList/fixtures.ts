export const emptyList = [];
export const smallList = [
  {
    '@context': 'https://w3id.org/did/v1',
    id: 'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
    authentication: [
      {
        type: 'Secp256k1SignatureAuthentication2018',
        publicKey: [
          'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6#owner',
        ],
      },
    ],
    publicKey: [
      {
        id: 'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6#owner',
        type: 'Secp256k1VerificationKey2018',
        ethereumAddress: '0xe6fe788d8ca214a080b0f6ac7f48480b2aefa9a6',
        owner: 'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
      },
      {
        id: 'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6#delegate-1',
        type: 'Secp256k1VerificationKey2018',
        owner: 'did:ethr:0xE6Fe788d8ca214A080b0f6aC7F48480b2AEfa9a6',
        publicKeyHex:
          '0295dda1dca7f80e308ef60155ddeac00e46b797fd40ef407f422e88d2467a27eb',
      },
    ],
  },
  {
    '@context': ['https://w3id.org/did/v0.11'],
    id: 'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
    publicKey: [
      {
        id:
          'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD#z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
        type: 'Ed25519VerificationKey2018',
        controller: 'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
        publicKeyBase58: '9vZ5C4VRg1xTV438nMUQETrbHEyoRpjrMLFRBV8wDzbq',
      },
    ],
    authentication: [
      'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD#z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
    ],
    assertionMethod: [
      'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD#z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
    ],
    capabilityDelegation: [
      'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD#z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
    ],
    capabilityInvocation: [
      'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD#z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
    ],
    keyAgreement: [
      {
        id:
          'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD#zCEpqejzWrTNvbCgVgfDnwyo6FxycpFp6ybfPeApu8z9Ac',
        type: 'X25519KeyAgreementKey2019',
        controller: 'did:key:z6MkoNp7nJjs1ZSvbYsqTvSF5ZQb6pFeqhzD3MAM1m6x9DPD',
        publicKeyBase58: 'FL7wNohf5deA6dXEFjDypdQxihorh7VUhn6cKk6jsu4Q',
      },
    ],
  },
];
