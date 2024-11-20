import React from 'react';
import { Link } from '@tanstack/react-router';
import * as classes from './users.styles';

export const UsersPod: React.FC = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json));
  }, []);

  return (
    <div className={classes.root}>
      <h1>Soy la página de listado de usuarios {users}</h1>
      <Link to="/users/$id" params={{ id: '1' }}>
        Navegar a detalle de usuario
      </Link>
    </div>
  );
};
