import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// TODO: implement router links
interface Props {
  text: string;
  IconComponent?: React.ComponentType;
  isSelected: boolean;
}

export const Item: React.FC<Props> = (props: Props) => {
  const { text, IconComponent, isSelected } = props;
  return (
    <ListItem key={text}>
      <ListItemButton selected={isSelected}>
        {IconComponent && <ListItemIcon>{<IconComponent />}</ListItemIcon>}
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
