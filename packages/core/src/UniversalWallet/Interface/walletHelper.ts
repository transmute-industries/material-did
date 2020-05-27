import { UniversalWallet2020 } from '@transmute/universal-wallet';

const SIGNING_KEY_TYPES = ['Ed25519VerificationKey2018'];

export const getSigningKeys = (walletState: any) => {
  let wallet = new UniversalWallet2020([...walletState.contents]);
  const initialValue = {
    signingKeys: [],
  };
  const results = wallet.query(
    (content: any) => {
      if (SIGNING_KEY_TYPES.indexOf(content.type) !== -1) {
        return content;
      }
      return false;
    },
    (initialValue: any, item: any) => {
      if (item) {
        initialValue.signingKeys.push(item);
      }
      return initialValue;
    },
    initialValue
  );
  return { ...results };
};

export const getVerifiableCredentials = (walletState: any) => {
  let wallet = new UniversalWallet2020([...walletState.contents]);
  const initialValue = {
    credentials: [],
  };
  const results = wallet.query(
    (content: any) => {
      if (
        Array.isArray(content.type) &&
        content.type[0] === 'VerifiableCredential'
      ) {
        return content;
      }
      return false;
    },
    (initialValue: any, item: any) => {
      if (item) {
        initialValue.credentials.push(item);
      }
      return initialValue;
    },
    initialValue
  );
  return { ...results };
};

export const getCurrencies = (walletState: any) => {
  let wallet = new UniversalWallet2020([...walletState.contents]);
  const initialValue = {
    currencies: [],
  };
  const results = wallet.query(
    (content: any) => {
      if (content.type === 'Currency') {
        return content;
      }
      return false;
    },
    (initialValue: any, item: any) => {
      if (item) {
        initialValue.currencies.push(item);
      }
      return initialValue;
    },
    initialValue
  );
  return { ...results };
};

export const getDefaultCredential = () => {
  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://www.w3.org/2018/credentials/examples/v1',
    ],
    id: 'http://example.gov/credentials/' + Math.random().toString(),
    type: ['VerifiableCredential', 'UniversityDegreeCredential'],
    issuer: 'did:example:123',
    issuanceDate: '2020-03-10T04:24:12.164Z',
    credentialSubject: {
      id: 'did:example:456',
      degree: {
        type: 'BachelorDegree',
        name: 'Bachelor of Science and Arts',
      },
    },
  };
};
