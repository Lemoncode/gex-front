import React from 'react';
import * as vm from './auth.vm';

const Context = React.createContext<vm.AuthContext>(undefined!);

export const useAuth = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<React.PropsWithChildren> = props => {
  const { children } = props;
  const onLogin = async (credentials: vm.Credentials) => {
    localStorage.setItem('isAuthenticated', 'true');
  };

  const onLogout = async () => {
    localStorage.setItem('isAuthenticated', 'false');
  };

  const isAuthenticated = async () => {
    // TODO: Improve auth
    return localStorage.getItem('isAuthenticated') === 'true';
  };

  return <Context.Provider value={{ isAuthenticated, onLogin, onLogout }}>{children}</Context.Provider>;
};
