import React from 'react';
import { AuthContextModel } from './auth.model';
import { useLoginMutation, useWhoamiQuery } from './auth.query.hook';

const AuthContext = React.createContext<AuthContextModel | null>(null);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = props => {
  const { children } = props;

  const { doLogin } = useLoginMutation();
  const { user, isAuthenticated, isLoading } = useWhoamiQuery();

  const isReady = !isLoading;

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        doLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextModel => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
