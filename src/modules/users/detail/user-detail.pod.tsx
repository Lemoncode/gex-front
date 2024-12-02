import React from 'react';
import { Link } from '@tanstack/react-router';
import * as classes from './user-detail.styles';

export const UserDetailPod: React.FC = () => {
  return (
    <div className={classes.root}>
      <h1>Soy la página de detalle de usuario</h1>
      <Link to="/users">Navegar a listado de usuarios</Link>
    </div>
  );
};
