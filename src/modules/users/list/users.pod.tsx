import React from 'react';
import { Link } from '@tanstack/react-router';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import { createEmptyUsersQuery, UsersQuery } from './users.vm';
import { getUsersRepository } from './users.repository';
import * as classes from './users.styles';

interface Lookup {
  id: string;
  name: string;
}

const columns: Lookup[] = [
  { id: 'id', name: 'ID' },
  { id: 'nombre', name: 'Nombre' },
  { id: 'apellidos', name: 'Apellidos' },
  { id: 'email', name: 'Email' },
  { id: 'telefonoFijo', name: 'Teléfono Fijo' },
  { id: 'telefonoMovil', name: 'Teléfono Móvil' },
  { id: 'telefonoInstitucional', name: 'Teléfono Institucional' },
  { id: 'rol', name: 'Rol' },
];

export const usePagination = (initialPage: number = 0, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const [users, setUsers] = React.useState<UsersQuery>(createEmptyUsersQuery);

  const loadUsers = async (page: number) => {
    const result = await getUsersRepository(page, pageSize);
    setUsers(result);
  };

  React.useEffect(() => {
    loadUsers(currentPage);
  }, [currentPage]);

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setCurrentPage(newPage - 1);

  return {
    users,
    currentPage,
    onPageChange: handleChangePage,
  };
};

export const UsersPod: React.FC = () => {
  const { users, currentPage, onPageChange } = usePagination();

  return (
    <div className={classes.root}>
      <h1>Soy la página de listado de usuarios</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map(header => (
                <TableCell key={header.id} className={classes.head}>
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.data.map(row => (
              <TableRow key={row.id} className={classes.row}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.apellidos}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.telefonoFijo}</TableCell>
                <TableCell>{row.telefonoMovil}</TableCell>
                <TableCell>{row.telefonoInstitucional}</TableCell>
                <TableCell>{row.rol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={users.pagination.totalItems}
          page={currentPage + 1}
          onChange={onPageChange}
          className={classes.pagination}
        />
      </TableContainer>
      <Link to="/users/$id" params={{ id: '1' }}>
        Navegar a detalle de usuario
      </Link>
    </div>
  );
};
