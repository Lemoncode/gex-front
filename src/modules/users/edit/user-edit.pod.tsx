import React from 'react';
import { Link } from '@tanstack/react-router';
import { useParams } from '@tanstack/react-router';
import { Tabs } from './components/tabs.component';
import * as classes from './user-edit.styles';

export const UserEditPod: React.FC = () => {
  const { id } = useParams({ from: '/_auth/edit-user/$id' });

  return (
    <div className={classes.root}>
      <h1>Soy la página de Edición de usuario</h1>
      <Tabs id={id} />
      <Link to="/users">Navegar a listado de usuarios</Link>
    </div>
  );
};
