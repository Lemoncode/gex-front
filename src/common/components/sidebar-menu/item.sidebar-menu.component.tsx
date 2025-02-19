import React from 'react';
import { Link as RouterLink, useLocation } from '@tanstack/react-router';

import MuiLink from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface ItemProps {
  text: string;
  IconComponent?: React.ComponentType;
  linkPath: string;
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { text, IconComponent, linkPath } = props;
  const location = useLocation();
  const isSelected = location.pathname === linkPath;

  return (
    <MuiLink component={RouterLink} to={linkPath} underline="none" color="textPrimary">
      <ListItem key={text}>
        <ListItemButton selected={isSelected}>
          {IconComponent && <ListItemIcon>{<IconComponent />}</ListItemIcon>}
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </MuiLink>
  );
};
