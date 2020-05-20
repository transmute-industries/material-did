import React from 'react';
import { WebKeystore } from '.';

import didWallet from '@transmute/did-wallet';

export default {
  title: 'Components|Web Keystore',
};

const image =
  'https://www.transmute.industries/svg/Logo-Transmute-icon-Purp.svg';

const Default = (props: any) => {
  const [keystore, setKeystore]: any = React.useState({
    data: props.data,
  });

  const toggleLockStatus = ({ status, password, data }: any) => {
    console.log('toggleLockStatus', { status, password, data });

    let walletInput =
      typeof data === 'string' ? data : { keys: Object.values(data) };
    let wallet = didWallet.create(walletInput);
    if (status === 'locked') {
      wallet.unlock(password);
    }
    if (status === 'unlocked') {
      wallet.lock(password);
    }
    setKeystore({
      data: wallet.keys || wallet.ciphered,
    });
  };

  const deleteKeystore = () => {
    console.log('deleteKeystore');
    setKeystore({
      data: null,
    });
  };

  const importKeystore = (data: any) => {
    console.log('importKeystore');
    setKeystore({
      data,
    });
  };

  const generateKeystore = () => {
    console.log('generateKeystore');
    setKeystore({
      data: {
        '_LADeiXXWZbYimL1365vhl34eU-lx1N8YgchNXTVjPo': {
          type: 'assymetric',
          encoding: 'base58',
          didPublicKeyEncoding: 'publicKeyBase58',
          publicKey: 'EoHHRdS6qwJm1eXRndhD8erQ6unXgb9BMr8eWx62DqG4',
          privateKey:
            'B1YyKWryqgGQVQJMs9gCdXiPLYqLCaKtkSBcVC11G6GLYJVZdmi7NwDs5ZVGWdw4pMjQkxLbAvu5Sy9RQkgADL4',
          tags: [
            'Ed25519VerificationKey2018',
            'did:key:z6MktFYL1sgYBUoE89N8UCf3ykQPvV4P6UPY3s3aME43943S#z6MktFYL1sgYBUoE89N8UCf3ykQPvV4P6UPY3s3aME43943S',
            'web',
          ],
          notes: '',
          kid: '_LADeiXXWZbYimL1365vhl34eU-lx1N8YgchNXTVjPo',
        },
      },
    });
  };

  const saveKeystore = (data: any) => {
    console.log('saveKeystore', data);
    setKeystore({
      data,
    });
  };

  return (
    <div>
      <WebKeystore
        keystore={keystore}
        image={image}
        importKeystore={importKeystore}
        toggleLockStatus={toggleLockStatus}
        saveKeystore={saveKeystore}
        deleteKeystore={deleteKeystore}
        generateKeystore={generateKeystore}
        {...props}
      />
    </div>
  );
};

export const Empty = () => {
  return <Default data={null} />;
};

export const Locked = () => {
  return (
    <Default
      data={
        '36gfo5YnPmx9MJQgWrVyxBXzTVEvMb1kUjsGQq3tZ7zFMq_emhK46yTF0CTVvErJhffJ_ux1L1DC4nI53PdcY72xJRZfrkdSsKhlFSHF1ssi6dvnnS0XMGyn43EEc_ZnMhNImpYWq0mwDWswCVQqF4KnXnFz288WmpTjjORqK9fu09C6srDTSss5bRdvIENAWk2Rx1qkO4ufKWeYH4Q3Dhq06Bwd8SWxDfRKcffKnDN6J8pumy94x5yNKotnZUYoI7usXUV6H1uWlnZih4uEur0yPmVEexSJu9N2j6kOmswIi9fmQhRKvUB7umSWNEhuQeEqZ2fOdPKBIXU9PG3k_KObc5CPkVdKySM08p7Norqc6r1TnyLzjIrdPP8AJ1DP-XApihK9t2T46hcdnIK9wKJGCUIq6ETyXoUMmK5dxm7vsanNZa4p0oBLslgvmUTD55G7IeqcwSEe2r7DgP7p1hvL0TXL38XfalbO0lbtoMxtED3yWb8hqlNKIJzIAYY1DTjMWddGrCjM-wLym01cDnCDWFY0t-RtF84IApRmVI3toSz-8Hdq5SuXJ3KZsWXik29aLxZQeVEiiPC10GpQM9ua5S-iV0Uop7m-QzuYay8-bV4npRJ-dpj-e9TtiWmAoYXpFLOwbnELskCavneKvKkQwvc1xmBVGJEnby4D-zg'
      }
    />
  );
};

export const Unlocked = () => {
  return (
    <Default
      data={{
        '_LADeiXXWZbYimL1365vhl34eU-lx1N8YgchNXTVjPo': {
          type: 'assymetric',
          encoding: 'base58',
          didPublicKeyEncoding: 'publicKeyBase58',
          publicKey: 'EoHHRdS6qwJm1eXRndhD8erQ6unXgb9BMr8eWx62DqG4',
          privateKey:
            'B1YyKWryqgGQVQJMs9gCdXiPLYqLCaKtkSBcVC11G6GLYJVZdmi7NwDs5ZVGWdw4pMjQkxLbAvu5Sy9RQkgADL4',
          tags: [
            'Ed25519VerificationKey2018',
            'did:key:z6MktFYL1sgYBUoE89N8UCf3ykQPvV4P6UPY3s3aME43943S#z6MktFYL1sgYBUoE89N8UCf3ykQPvV4P6UPY3s3aME43943S',
            'web',
          ],
          notes: '',
          kid: '_LADeiXXWZbYimL1365vhl34eU-lx1N8YgchNXTVjPo',
        },
      }}
    />
  );
};
