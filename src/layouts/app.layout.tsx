import React from 'react';
import { useTheme } from '@mui/material';

import { AppBar } from '#common/appbar/';
import { Drawer } from '#common/drawer/';
import { SidebarMenu } from '#common/sidebar-menu/';

import * as classes from './app.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  const theme = useTheme();
  const [isDrawerOpen, toggleDrawer] = React.useState<boolean>(false);

  const handleToggleDrawer = () => toggleDrawer(!isDrawerOpen);

  return (
    <div className={classes.appContainer}>
      <AppBar isDrawerOpen={isDrawerOpen} onToggleDrawer={handleToggleDrawer} />
      <main className={classes.main}>
        <Drawer isDrawerOpen={isDrawerOpen} drawerWidth={256}>
          <SidebarMenu isDrawerOpen={isDrawerOpen} />
        </Drawer>
        <div className={classes.sceneContent(theme)}>{children}</div>
      </main>
    </div>
  );
};
