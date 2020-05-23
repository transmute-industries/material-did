import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

import { EditContentsDialog } from './EditContentsDialog';
import { ToggleLockDialog } from './ToggleLockDialog';
export const InterfaceMenu = ({
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
          <EditContentsDialog keystore={keystore} saveKeystore={saveKeystore} />
        )}
        {status !== 'empty' && (
          <ToggleLockDialog
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
