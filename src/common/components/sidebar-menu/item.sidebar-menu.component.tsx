import React from 'react';
import { Link as RouterLink } from '@tanstack/react-router';

import MuiLink from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface ItemProps {
  text: string;
  IconComponent?: React.ComponentType;
  // TODO: implement router links with safe types
  linkPath: string;
}

export const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const { text, IconComponent, linkPath } = props;

  return (
    <MuiLink component={RouterLink} to={linkPath} underline="none" color="textPrimary">
      <ListItem key={text}>
        {/* TODO: implement 'active path matching' using the router hook. "/users" path is used below just as an example */}
        <ListItemButton selected={linkPath === '/users'}>
          {IconComponent && <ListItemIcon>{<IconComponent />}</ListItemIcon>}
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </MuiLink>
  );
};
