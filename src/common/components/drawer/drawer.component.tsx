import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './drawer.styles';

interface Props {
  isDrawerOpen: boolean;
  children: React.ReactNode;
}

export const Drawer: React.FC<Props> = (props: Props) => {
  const { isDrawerOpen, children } = props;
  const classes = useWithTheme(innerClasses, {
    isDrawerOpen,
  });

  return (
    <MuiDrawer variant="permanent" className={classes.responsiveAnimatedDrawer} open={isDrawerOpen}>
      {children}
    </MuiDrawer>
  );
};
