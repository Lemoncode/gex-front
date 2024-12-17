import React from 'react';

import List from '@mui/material/List';
import { Divider, useTheme } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PersonIcon from '@mui/icons-material/Person';

import { Item, ExpandableItem } from './item.sidebar-menu.component';

import * as classes from './sidebar-menu.styles';

interface Props {
  isParentMenuOpen: boolean;
  selectionSideEffects?: () => void;
}

// TODO: Provisional. Pending to implement routing links
export const SidebarMenu: React.FC<Props> = (props: Props) => {
  const { isParentMenuOpen = false, selectionSideEffects } = props;
  const theme = useTheme();
  return (
    <List className={classes.list(theme, isParentMenuOpen)}>
      <Item text="Principal" IconComponent={HomeIcon} linkPath={'/'} />
      <ExpandableItem
        text="Expedientes"
        IconComponent={FolderIcon}
        linkPath={'/'}
        isParentVisible={isParentMenuOpen}
        selectionSideEffects={selectionSideEffects}
      >
        <Item text="Listado" linkPath={'/'} />
        <Item text="Nuevo ACF" linkPath={'/'} />
        <Item text="..." linkPath={'/'} />
      </ExpandableItem>

      <Item text="Empresas" IconComponent={ApartmentIcon} linkPath={'/'} />
      <Item text="Informes" IconComponent={LeaderboardIcon} linkPath={'/'} />

      <Divider variant="middle" />

      <Item text="Usuarios" IconComponent={PersonIcon} linkPath={'/users'} />
    </List>
  );
};
