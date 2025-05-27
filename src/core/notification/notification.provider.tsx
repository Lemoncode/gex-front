import React from 'react';
import { SnackbarComponent, SnackbarProvider } from '#common/components';

interface Props {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<Props> = props => {
  const { children } = props;

  return (
    <SnackbarProvider>
      <SnackbarComponent />
      {children}
    </SnackbarProvider>
  );
};
