import React from 'react';

export const useDrawerHandler = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(open => !open);

  // TODO: decide whether it is worth saving a UI preference cookie about the state of the drawer.
  return { isDrawerOpen: open, toggleDrawer };
};
