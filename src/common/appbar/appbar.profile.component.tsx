import React from 'react';
import { IconButton, Menu, MenuItem, Tooltip, Typography, Avatar as MuiAvatar } from '@mui/material';

import * as classes from './appbar.profile.styles';

// TODO: Provisional implementation
const loginSettings = ['Perfil', 'Dashboard', 'Salir'];
interface Props {
  username: string;
  role?: string;
}

export const AppBarProfile: React.FC<Props> = (props: Props) => {
  const { username } = props;
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={classes.appBarContainer}>
      <Tooltip title="Configuración del usuario" placement="left-end">
        <IconButton onClick={handleOpenUserMenu} className={classes.iconButton}>
          <MuiAvatar>{username}</MuiAvatar>
        </IconButton>
      </Tooltip>
      <Menu
        className={classes.menu}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {loginSettings.map(setting => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography className={classes.menu__text}>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
