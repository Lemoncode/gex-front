import * as React from 'react';

export const useToggle = (initialState: boolean) => {
  const [isOpen, setIsOpen] = React.useState(initialState);

  const onToggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    onToggle,
    setIsOpen,
  };
};
