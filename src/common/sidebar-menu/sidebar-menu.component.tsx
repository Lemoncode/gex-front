import React from 'react';

import List from '@mui/material/List';
import { Divider, useTheme } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PersonIcon from '@mui/icons-material/Person';

import { Item } from './item.sidebar-menu.component';

import * as classes from './sidebar-menu.styles';

interface Props {
  open: boolean;
}

// TODO: Provisional. Pending to implement with dropdown menus and proper Icons
export const SidebarMenu: React.FC<Props> = (props: Props) => {
  const { open = false } = props;
  const theme = useTheme();
  return (
    <List className={classes.list(theme, open)}>
      <Item text="Principal" IconComponent={HomeIcon} isSelected={false} />
      <Item text="Expedientes" IconComponent={FolderIcon} isSelected={false} />
      <Item text="Empresas" IconComponent={ApartmentIcon} isSelected={false} />
      <Item text="Informes" IconComponent={LeaderboardIcon} isSelected={false} />

      <Divider variant="middle" />

      <Item text="Usuarios" IconComponent={PersonIcon} isSelected={true} />
    </List>
  );
};
