import React from 'react';
import { generateRandomPassword } from './edit.helpers';

export const usePassword = (initialPassword?: string) => {
  const [password] = React.useState<string>(initialPassword || generateRandomPassword());
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleCopyPassword = () => navigator.clipboard.writeText(password);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return {
    password,
    showPassword,
    onCopyPassword: handleCopyPassword,
    toggleShowPassword,
  };
};
