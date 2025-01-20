import React from 'react';
import { TabsObjectProps } from '#common/models';
import { Link } from '@tanstack/react-router';
import { useParams } from '@tanstack/react-router';
import * as classes from './user-edit.styles';
import { Tabs } from '#common/components/';

export const UserEditPod: React.FC = () => {
  const { id } = useParams({ strict: false });

  const tabsContents: TabsObjectProps[] = [
    {
      label: 'Ficha usuario',
      panel: `User ID: ${id}`,
    },
    {
      label: 'Resetear clave',
      panel: 'Resetear clave',
    },
  ];

  return (
    <div className={classes.root}>
      <h1>Soy la página de Edición de usuario</h1>
      <Tabs contents={tabsContents} />
      <Link to="/users">Navegar a listado de usuarios</Link>
    </div>
  );
};
