import React from 'react';

export const useDrawerHandler = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setIsDrawerOpen(open => !open);

  // TODO: decide whether it is worth saving a UI preference cookie about the state of the drawer.
  return { isDrawerOpen, toggleDrawer };
};
