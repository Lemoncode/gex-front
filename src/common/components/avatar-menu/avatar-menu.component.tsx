import React from 'react';
import {
  Popper,
  ClickAwayListener,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

interface Props {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  userName: string;
  onLogout: () => void;
}

export const AvatarMenu: React.FC<Props> = props => {
  const { anchorEl, open, onClose, userName, onLogout } = props;

  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-end" style={{ zIndex: 1300 }}>
      <ClickAwayListener onClickAway={onClose}>
        <Paper elevation={3} sx={{ mt: 1 }}>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={userName} />
            </ListItem>
            <ListItemButton onClick={onLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Salir" />
            </ListItemButton>
          </List>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};
