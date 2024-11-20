import { useAuth } from '@/core/auth';
import { Button } from '@mui/material';
import { Link } from '@tanstack/react-router';
import React from 'react';

export const LoginPod: React.FC = () => {
  const { onLogin } = useAuth();

  const handleClick = () => {
    onLogin({ email: 'admin', password: 'test' });
  };

  return (
    <Button onClick={handleClick}>
      <Link to="/users">Login</Link>
    </Button>
  );
};
