import React from 'react';

export const usePassword = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return {
    showPassword,
    toggleShowPassword,
  };
};
