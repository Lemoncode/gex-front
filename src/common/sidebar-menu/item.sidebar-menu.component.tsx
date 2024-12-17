import React, { useEffect } from 'react';
import { Link as RouterLink } from '@tanstack/react-router';

import MuiLink from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, useTheme } from '@mui/material';

import * as classes from './item.sidebar-menu.styles';

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

interface ExpandableItemProps extends ItemProps {
  isParentVisible: boolean;
  //Prop aimed to cause an effect on ancestors, like directly opening a drawer when selected
  selectionSideEffects?: () => void;
  children: React.ReactNode;
}

export const ExpandableItem: React.FC<ExpandableItemProps> = (props: ExpandableItemProps) => {
  const { text, IconComponent, isParentVisible: isParentVisible, selectionSideEffects, children } = props;
  const [isListExpanded, setIsListExpanded] = React.useState(false);
  const theme = useTheme();
  const handleClick = () => {
    setIsListExpanded(!isListExpanded);
    if (selectionSideEffects && !isParentVisible) selectionSideEffects();
  };

  useEffect(() => {
    if (!isParentVisible) {
      setIsListExpanded(false);
    }
  }, [isParentVisible]);

  return (
    <ListItem key={text}>
      <ListItemButton onClick={handleClick}>
        {IconComponent && <ListItemIcon>{<IconComponent />}</ListItemIcon>}
        <ListItemText primary={text} />
        {isParentVisible ? isListExpanded ? <ExpandLess /> : <ExpandMore /> : ''}
      </ListItemButton>
      {isParentVisible && (
        <Collapse in={isListExpanded} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemsExtraIndent(theme)} disablePadding>
            {children}
          </List>
        </Collapse>
      )}
    </ListItem>
  );
};
