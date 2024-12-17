import { useContext } from 'react';
import { drawerContext } from '#common/drawer';

export const useDrawerContext = () => {
  const { isDrawerOpen, toggleDrawer } = useContext(drawerContext);

  // TODO: decide whether it is worth saving a UI-preference-cookie about the state of the drawer.
  return { isDrawerOpen, toggleDrawer };
};
