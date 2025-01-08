import React from 'react';
import { AppBar, Drawer, SidebarMenu } from '#common/components';
import { useWithTheme } from '#core/theme';
import * as appLayoutClasses from './app.styles';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  const classes = useWithTheme(appLayoutClasses);
  const [isDrawerOpen, toggleDrawer] = React.useState<boolean>(false);

  const handleToggleDrawer = () => toggleDrawer(!isDrawerOpen);

  return (
    <div className={classes.appContainer}>
      <AppBar isDrawerOpen={isDrawerOpen} onToggleDrawer={handleToggleDrawer} />
      <main className={classes.main}>
        <Drawer isDrawerOpen={isDrawerOpen}>
          <SidebarMenu isDrawerOpen={isDrawerOpen} />
        </Drawer>
        <div className={classes.sceneContent}>{children}</div>
      </main>
    </div>
  );
};
