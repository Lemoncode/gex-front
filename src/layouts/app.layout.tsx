import React from 'react';
import { useTheme } from '@mui/material';

import { AppBar } from '#common/appbar/';
import { Drawer } from '#common/drawer/';
import { SidebarMenu } from '#common/sidebar-menu/';

import * as classes from './app.styles';
import { DrawerProvider } from '#common/drawer/drawer-provider.component.tsx';

interface Props {
  children: React.ReactNode;
}

// TODO: handle this 'isUserlogged' properly when auth is implemented
const isUserlogged: boolean = true;

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  const theme = useTheme();
  return (
    <div className={classes.appContainer}>
      <DrawerProvider>
        <AppBar isUserlogged={isUserlogged} />
        <main className={classes.main}>
          <Drawer drawerWidth={256}>
            <SidebarMenu />
          </Drawer>
          <div className={classes.sceneContent(theme)}>{children}</div>
        </main>
      </DrawerProvider>
    </div>
  );
};
