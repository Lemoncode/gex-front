import React, { useRef } from 'react';
import {
  AppBar as MUIAppbar,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  ClickAwayListener,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as classes from './appbar.styles';
import { useAuth } from '../../../core/auth';

interface AppBarProps {
  isDrawerOpen: boolean;
  isListOpen: boolean;
  onToggleDrawer: () => void;
  onAvatarMenuAction: (action: 'toggle' | 'close') => void;
}

export const AppBar: React.FC<AppBarProps> = props => {
  const { isDrawerOpen, isListOpen, onToggleDrawer, onAvatarMenuAction } = props;

  const { user } = useAuth();
  const avatarRef = useRef<HTMLDivElement | null>(null);

  const getInitials = (nombre: string, apellido: string): string => {
    const first = nombre?.trim()?.[0] ?? '';
    const last = apellido?.trim()?.[0] ?? '';
    return `${first}${last}`.toUpperCase();
  };

  return (
    <>
      <MUIAppbar className={classes.appBarContainer} position="static" color="default" square elevation={1}>
        <Toolbar disableGutters className={classes.toolbar} variant="regular">
          <div className={classes.leftGroup}>
            <IconButton color="inherit" onClick={onToggleDrawer}>
              {isDrawerOpen ? <MenuIcon /> : <MenuOpenIcon />}
            </IconButton>
            <Typography variant="body1" fontWeight={'bold'}>
              GEX
            </Typography>
          </div>
          <Avatar ref={avatarRef} onClick={() => onAvatarMenuAction('toggle')} sx={{ cursor: 'pointer' }}>
            {getInitials(user.nombre, user.apellido)}
          </Avatar>
        </Toolbar>
      </MUIAppbar>

      <Popper open={isListOpen} anchorEl={avatarRef.current} placement="bottom-end" style={{ zIndex: 1300 }}>
        <ClickAwayListener onClickAway={() => onAvatarMenuAction('close')}>
          <Paper elevation={3} sx={{ mt: 1 }}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={user.nombre} />
              </ListItem>
              <ListItemButton onClick={() => console.log('Logout')}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Salir" />
              </ListItemButton>
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};
