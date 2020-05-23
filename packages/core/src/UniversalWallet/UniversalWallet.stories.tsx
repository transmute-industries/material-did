import React from 'react';
import { UniversalWallet } from '.';

import { UniversalWallet2020 } from '@transmute/universal-wallet';

import { unlockedContents, lockedContents } from './fixtures';

export default {
  title: 'Components|Universal Wallet',
};

const image =
  'https://www.transmute.industries/svg/Logo-Transmute-icon-Purp.svg';

const Default = (props: any) => {
  const [keystore, setWalletState]: any = React.useState({
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

  const deleteKeystore = () => {
    console.log('deleteKeystore');
    setWalletState({
      status: 'UNLOCKED',
      contents: [],
    });
  };

  const importKeystore = async (encryptedWallet: string) => {
    console.log('importKeystore', encryptedWallet);
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

  const generateKeystore = async () => {
    console.log('generateKeystore');
    const password = 'storybook';
    const seed = await UniversalWallet2020.passwordToSeed(password);
    let wallet = await UniversalWallet2020.generate(seed);
    setWalletState({
      status: wallet.status,
      contents: wallet.contents,
    });
  };

  const saveKeystore = (contents: any) => {
    console.log('saveKeystore', contents);
    setWalletState({
      contents,
    });
  };

  return (
    <div>
      <UniversalWallet
        keystore={keystore}
        image={image}
        importKeystore={importKeystore}
        exportWallet={exportWallet}
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
  return <Default status={'UNLOCKED'} contents={[]} />;
};

export const Unlocked = () => {
  return <Default status={'UNLOCKED'} contents={unlockedContents} />;
};

export const Locked = () => {
  return <Default status="LOCKED" contents={lockedContents} />;
};
