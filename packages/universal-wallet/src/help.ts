export const getWalletStateContext = (walletState: any) => {
  if (
    !walletState ||
    (walletState.contents && walletState.contents.length === 0)
  ) {
    return {
      status: 'empty',
      title: 'You have no keys',
      subheader:
        'If you want to use keys generated by another application use import. If you want to generate a walletState for the first time, click create.',
      passwordPrompt: '',
    };
  }

  if (walletState.status === 'LOCKED') {
    return {
      status: 'locked',
      title: 'You have encrypted keys',
      subheader:
        'You will need to unlock your keys with your password before they can be used. You can export them while they are locked, but not after you unlock them.',
      passwordPrompt:
        'Enter the password used when the walletState was created or last locked.',
    };
  }

  return {
    status: 'unlocked',
    title: 'You have keys',
    subheader:
      'Your keys are ready for use. If you wish to reuse these keys in another application, you must lock this walletState and then export it.',
    passwordPrompt: 'Enter a password to lock this walletState.',
  };
};

export const download = (filename: string, text: string) => {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};
