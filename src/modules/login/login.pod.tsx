import React from 'react';
import { Link } from '@tanstack/react-router';
import { Typography } from '@mui/material';
import * as classes from './login.styles';

export const LoginPod: React.FC = () => {
  return (
    <div className={classes.root}>
      <Typography variant="h3">Soy la página de login</Typography>
      <Link to="/users">Navegar a listado usuarios</Link>
    </div>
  );
};
