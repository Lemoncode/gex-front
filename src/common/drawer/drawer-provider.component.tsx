import React, { createContext } from 'react';

interface DrawerContext {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export const drawerContext = createContext<DrawerContext>({
  isDrawerOpen: false,
  toggleDrawer: () => console.log('Use this context within its provider'),
});

interface DrawerProviderProps {
  children: React.ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = (props: DrawerProviderProps) => {
  const { children } = props;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setIsDrawerOpen(open => !open);

  return <drawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>{children}</drawerContext.Provider>;
};
