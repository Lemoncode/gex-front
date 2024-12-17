import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material';

import { useDrawerContext } from '#common/hooks';
import * as classes from './drawer.styles';

interface Props {
  drawerWidth?: number;
  children: React.ReactNode;
}

export const Drawer: React.FC<Props> = (props: Props) => {
  const { drawerWidth = 240, children } = props;
  const { isDrawerOpen } = useDrawerContext();
  const theme = useTheme();
  return (
    <MuiDrawer
      variant="permanent"
      className={classes.responsiveAnimatedDrawer(isDrawerOpen, theme, drawerWidth)}
      open={isDrawerOpen}
    >
      {children}
    </MuiDrawer>
  );
};
