import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material';

import * as classes from './drawer.styles';

interface Props {
  open?: boolean;
  drawerWidth?: number;
  children: React.ReactNode;
}

export const Drawer: React.FC<Props> = (props: Props) => {
  const { open = false, drawerWidth = 240, children } = props;
  const theme = useTheme();
  return (
    <MuiDrawer variant="permanent" className={classes.responsiveAnimatedDrawer(open, theme, drawerWidth)} open={open}>
      {children}
    </MuiDrawer>
  );
};
