import React from 'react';
import { Link } from '@tanstack/react-router';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { NavigationButton } from '#common/components';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './users.styles';
import { useUsersQuery } from './users.query.hook';

interface Lookup {
  id: string;
  name: string;
}

const columns: Lookup[] = [
  { id: 'nombre', name: 'Nombre' },
  { id: 'apellidos', name: 'Apellidos' },
  { id: 'unidad', name: 'Unidad' },
  { id: 'email', name: 'Email' },
  { id: 'commands', name: 'Comandos' },
];

export const usePagination = (initialPage: number = 0, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const { userCollection, isLoading } = useUsersQuery({ page: currentPage, pageSize });

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setCurrentPage(newPage - 1);

  return {
    userCollection,
    currentPage,
    totalPages: userCollection.pagination.totalPages,
    isLoading,
    onPageChange: handleChangePage,
  };
};

export const UsersPod: React.FC = () => {
  const { userCollection, currentPage, totalPages, onPageChange } = usePagination();
  const classes = useWithTheme(innerClasses);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h4">Usuarios</Typography>
        <NavigationButton text="Nuevo Usuario" path="/create-user" />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map(header => (
                <TableCell key={header.id}>{header.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userCollection.data.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.apellido}</TableCell>
                <TableCell>
                  <Chip label={row.unidad} />
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <VisibilityIcon />
                    <Link to="/users/$id" params={{ id: row.id }} className={classes.link}>
                      <EditIcon />
                    </Link>
                    <DeleteIcon />
                  </Box>
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
