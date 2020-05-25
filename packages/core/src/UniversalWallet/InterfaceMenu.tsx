import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import { EditContentsDialog } from './Interface/Edit';
import { IssueVerifiableCredentialDialog } from './Interface/Issue';
import { ToggleLockDialog } from './Interface/Toggle';

export const InterfaceMenu = ({
  status,
  walletState,
  passwordPrompt,
  toggleLockStatus,
  deleteWallet,
  saveWallet,
  issueCredential,
}: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let verificationMethodOptions: any = [];
  let issueCredentialOptions = {};
  let credential = {};

  if (walletState.status === 'UNLOCKED' && walletState.contents.length) {
    const firstKey = walletState.contents.find((c: any) => {
      return c.type === 'Ed25519VerificationKey2018';
    });

    verificationMethodOptions = [firstKey];

    issueCredentialOptions = {
      verificationMethod: firstKey.id,
    };
    const firstCredential = walletState.contents.find((c: any) => {
      return Array.isArray(c.type) && c.type[0] === 'VerifiableCredential';
    });
    if (firstCredential) {
      credential = {
        ...firstCredential,
      };
      delete firstCredential.proof;
    }
  }

  const menuItems = [
    <MenuItem key={'delete'} onClick={deleteWallet}>
      Delete
    </MenuItem>,
  ];

  if (status === 'unlocked') {
    menuItems.push(
      <EditContentsDialog
        key={'edit'}
        walletState={walletState}
        saveWallet={saveWallet}
      />
    );
    menuItems.push(
      <IssueVerifiableCredentialDialog
        key={'issue'}
        verificationMethodOptions={verificationMethodOptions}
        issueCredentialOptions={issueCredentialOptions}
        credential={credential}
        component={MenuItem}
        componentProps={{}}
        onSubmit={({ credential, options }: any) => {
          issueCredential({ credential, options });
          setAnchorEl(null);
        }}
      />
    );
  }

  if (status !== 'empty') {
    menuItems.push(
      <ToggleLockDialog
        key={'toggle'}
        status={status}
        passwordPrompt={passwordPrompt}
        toggleLockStatus={toggleLockStatus}
        walletState={walletState}
      />
    );
  }

  // console.log(credential);
  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems}
      </Menu>
    </div>
  );
};
