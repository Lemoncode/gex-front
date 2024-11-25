import React from 'react';
import { Link } from '@tanstack/react-router';
import { ColumnDef, useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import { createEmptyUsersQuery, User, UsersQuery } from './list.vm';
import { getUsersRepository } from './list.repository';
import * as classes from './users.styles';

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'ID',
    header: 'id',
  },
  {
    accessorKey: 'Nombre',
    header: 'nombre',
  },
  {
    accessorKey: 'Apellidos',
    header: 'apellidos',
  },
  {
    accessorKey: 'Email',
    header: 'email',
  },
  {
    accessorKey: 'Teléfono fijo',
    header: 'telefonofijo',
  },
  {
    accessorKey: 'Telefono móvil',
    header: 'telefonomovil',
  },
  {
    accessorKey: 'Telefono institucional',
    header: 'telefonoinstitucional',
  },
  {
    accessorKey: 'Rol',
    header: 'rol',
  },
];

export const UsersPod: React.FC = () => {
  const [users, setUsers] = React.useState<UsersQuery>(createEmptyUsersQuery);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const loadUsers = async (page?: number, pageSize?: number) => await getUsersRepository(page, pageSize).then(setUsers);

  const tableInstance = useReactTable({
    data: users.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount: users.pagination.totalItems,
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const { getAllColumns, getRowModel, getPageCount, setPageIndex, getState } = tableInstance;

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setPageIndex(newPage);

  React.useEffect(() => {
    loadUsers(getState().pagination.pageIndex, getState().pagination.pageSize);
  }, [getState().pagination.pageIndex, getState().pagination.pageSize]);

  return (
    <div className={classes.root}>
      <h1>Soy la página de listado de usuarios</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {getAllColumns().map(column => (
                <TableCell key={column.id} className={classes.head}>
                  {column.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getRowModel().rows.map(row => (
              <TableRow key={row.id} className={classes.row}>
                <TableCell>{row.original.id}</TableCell>
                <TableCell>{row.original.nombre}</TableCell>
                <TableCell>{row.original.apellidos}</TableCell>
                <TableCell>{row.original.email}</TableCell>
                <TableCell>{row.original.telefonoFijo}</TableCell>
                <TableCell>{row.original.telefonoMovil}</TableCell>
                <TableCell>{row.original.telefonoInstitucional}</TableCell>
                <TableCell>{row.original.rol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={getPageCount()}
          page={getState().pagination.pageIndex}
          onChange={handleChangePage}
          className={classes.pagination}
        />
      </TableContainer>
      <Link to="/users/$id" params={{ id: '1' }}>
        Navegar a detalle de usuario
      </Link>
    </div>
  );
};
