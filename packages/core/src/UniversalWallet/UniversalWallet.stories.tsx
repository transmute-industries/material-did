import React from 'react';
import { UniversalWallet } from '.';

import { UniversalWallet2020 } from '@transmute/universal-wallet';

import { unlockedContents, lockedContents } from './fixtures';

export default {
  title: 'Components|Universal Wallet.Wallet',
};

const image =
  'https://www.transmute.industries/svg/Logo-Transmute-icon-Purp.svg';

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

  const generateWallet = async () => {
    console.log('generateWallet');
    const password = 'storybook';
    const seed = await UniversalWallet2020.passwordToSeed(password);
    let wallet = await UniversalWallet2020.generate(seed);
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
