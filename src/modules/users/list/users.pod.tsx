import React from 'react';
import { Link } from '@tanstack/react-router';
import * as classes from './users.styles';

export const UsersPod: React.FC = () => {
  return (
    <div className={classes.root}>
      <h1>Soy la página de listado de usuarios</h1>
      <Link to="/users/$id" params={{ id: '1' }}>
        Navegar a detalle de usuario
      </Link>
    </div>
  );
};
