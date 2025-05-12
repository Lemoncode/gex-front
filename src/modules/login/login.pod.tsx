import React from 'react';
import { useAuth } from '#core/auth';
import { Login } from './login.component';
import { UserCredentials } from '#core/auth';

export const LoginPod: React.FC = () => {
  const { doLogin } = useAuth();

  const handleSubmit = (userCredentials: UserCredentials) => doLogin(userCredentials);

  return <Login onSubmit={handleSubmit} />;
};
