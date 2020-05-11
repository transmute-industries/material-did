import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import { EditKeystoreDialog } from './EditKeystoreDialog';
import { ToggleKeystoreLockDialog } from './ToggleKeystoreLockDialog';
export const KeystoreMenu = ({
  status,
  keystore,
  passwordPrompt,
  toggleLockStatus,
  deleteKeystore,
  saveKeystore,
}: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={deleteKeystore}>Delete</MenuItem>
        {status === 'unlocked' && (
          <EditKeystoreDialog keystore={keystore} saveKeystore={saveKeystore} />
        )}
        {status !== 'empty' && (
          <ToggleKeystoreLockDialog
            status={status}
            passwordPrompt={passwordPrompt}
            toggleLockStatus={toggleLockStatus}
            keystore={keystore}
          />
        )}
      </Menu>
    </div>
  );
};
