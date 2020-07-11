import React from 'react';
import { DIDDocumentPreview, IDIDDocumentPreviewProps } from '..';

export default {
  // id: 20,
  title: 'DID/Document',
  component: DIDDocumentPreview,
};

const smallList = [
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

export const Preview = (props?: Partial<IDIDDocumentPreviewProps>) => (
  <div>
    <DIDDocumentPreview didDocument={smallList[0]} {...props} />
  </div>
);
