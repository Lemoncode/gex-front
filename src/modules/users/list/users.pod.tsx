import React from 'react';
import { Link } from '@tanstack/react-router';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import { getUsersRepository } from './users.repository';
import { Usuario } from './users.vm';
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
  { id: 'rol', name: 'Rol' },
  { id: 'commands', name: 'Comandos' },
];

export const usePagination = (initialPage: number = 0, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const [userCollection, setUserCollection] = React.useState<CollectionQuery<Usuario>>(
    createEmptyCollectionQuery<Usuario>
  );

  const loadUserCollection = async (page: number) => {
    const userCollection = await getUsersRepository(page, pageSize);
    setUserCollection(userCollection);
  };

  React.useEffect(() => {
    loadUserCollection(currentPage);
  }, [currentPage]);

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setCurrentPage(newPage - 1);

  return {
    userCollection,
    currentPage,
    totalPages: userCollection.pagination.totalPages,
    onPageChange: handleChangePage,
  };
};

export const UsersPod: React.FC = () => {
  const { userCollection, currentPage, totalPages, onPageChange } = usePagination();

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
            {userCollection.data.map(row => (
              <TableRow key={row.id} className={classes.row}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.apellido}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.rol}</TableCell>
                <TableCell className={classes.commands}>
                  <Link to="/users/$id" params={{ id: row.id }} className={classes.link}>
                    <EditIcon />
                  </Link>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination count={totalPages} page={currentPage + 1} onChange={onPageChange} className={classes.pagination} />
      </TableContainer>
    </div>
  );
};
