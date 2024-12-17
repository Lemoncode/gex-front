import React from 'react';
import { useTheme } from '@mui/material';

import { AppBar } from '#common/appbar/';
import { Drawer } from '#common/drawer/';
import { SidebarMenu } from '#common/sidebar-menu/';

import * as classes from './app.styles';
import { useDrawerHandler } from '#common/hooks';

interface Props {
  children: React.ReactNode;
}

// TODO: handle this 'isUserlogged' properly when auth is implemented
const isUserlogged: boolean = true;

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  const theme = useTheme();
  const { isDrawerOpen, toggleDrawer } = useDrawerHandler();
  return (
    <div className={classes.appContainer}>
      <AppBar isMenuActive={isDrawerOpen} menuButtonAction={toggleDrawer} isUserlogged={isUserlogged} />
      <main className={classes.main}>
        <Drawer drawerWidth={256} open={isDrawerOpen}>
          <SidebarMenu isParentMenuOpen={isDrawerOpen} selectionSideEffects={toggleDrawer} />
        </Drawer>
        <div className={classes.sceneContent(theme)}>{children}</div>
      </main>
    </div>
  );
};
