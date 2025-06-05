import React, { useRef } from 'react';
import { AppBar as MUIAppbar, IconButton, Toolbar, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import * as classes from './appbar.styles';
import { useAuth } from '../../../core/auth';
import { AvatarMenu } from '../avatar-menu';

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

      <AvatarMenu
        open={isListOpen}
        anchorEl={avatarRef.current}
        onClose={() => onAvatarMenuAction('close')}
        userName={`${user.nombre} ${user.apellido}`}
        onLogout={() => console.log('Logout')}
      />
    </>
  );
};
