import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material';
import * as classes from './drawer.styles';

interface Props {
  isDrawerOpen: boolean;
  children: React.ReactNode;
}

export const Drawer: React.FC<Props> = (props: Props) => {
  const { isDrawerOpen, children } = props;

  const theme = useTheme();
  return (
    <MuiDrawer
      variant="permanent"
      className={classes.responsiveAnimatedDrawer(isDrawerOpen, theme)}
      open={isDrawerOpen}
    >
      {children}
    </MuiDrawer>
  );
};
