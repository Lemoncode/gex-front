import React, { useEffect } from 'react';
import { AppBar, Drawer, SidebarMenu } from '#common/components';
import { useWithTheme } from '#core/theme';
import * as appLayoutClasses from './app.styles';
import { useToggle } from '#common/hooks/toogle.hook.ts';
import { useAuth } from '#core/auth';
import { useNavigate } from '@tanstack/react-router';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = props => {
  const { children } = props;
  const classes = useWithTheme(appLayoutClasses);

  const { isOpen: isDrawerOpen, onToggle: toggleDrawer } = useToggle(false);
  const { isOpen: isListOpen, onToggle: toggleList, setIsOpen: setListOpen } = useToggle(false);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleAvatarMenu = (action: 'toggle' | 'close') => {
    if (action === 'toggle') toggleList();
    if (action === 'close') setListOpen(false);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: '/login' });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={classes.appContainer}>
      <AppBar
        isDrawerOpen={isDrawerOpen}
        onToggleDrawer={toggleDrawer}
        isListOpen={isListOpen}
        onAvatarMenuAction={handleAvatarMenu}
      />
      <main className={classes.main}>
        <Drawer isDrawerOpen={isDrawerOpen}>
          <SidebarMenu isDrawerOpen={isDrawerOpen} />
        </Drawer>
        <div className={classes.sceneContent}>{children}</div>
      </main>
    </div>
  );
};
