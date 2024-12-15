import React from 'react';
import { useTheme } from '@mui/material';

import { AppBar } from '#common/appbar/';
import { Drawer } from '#common/drawer/';
import { SidebarMenu } from '#common/sidebar-menu/index.ts';

import * as classes from './app.styles';

interface Props {
  children: React.ReactNode;
}

// TODO: handle this 'isUserlogged' properly when auth is implemented
const isUserlogged: boolean = true;

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(open => !open);
  const theme = useTheme();
  return (
    <div className={classes.appContainer}>
      <AppBar open={open} handleMenu={toggleDrawer} isUserlogged={isUserlogged} />
      <main className={classes.main}>
        <Drawer open={open} drawerWidth={256}>
          <SidebarMenu open={open} />
        </Drawer>
        <div className={classes.sceneContent(theme)}>{children}</div>
      </main>
    </div>
  );
};
