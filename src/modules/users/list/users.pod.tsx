import React from 'react';
import { Link } from '@tanstack/react-router';
//import { ColumnDef, useReactTable, getCoreRowModel } from '@tanstack/react-table';
//import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import * as classes from './users.styles';
import { createEmptyUsersQuery, UsersQuery } from './list.vm';
import { getUsersRepository } from './list.repository';
//import { User } from './list.vm';

// const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: 'id',
//     header: 'ID',
//   },
//   {
//     accessorKey: 'nombre',
//     header: 'Nombre',
//   },
//   {
//     accessorKey: 'apellidos',
//     header: 'Apellidos',
//   },
//   {
//     accessorKey: 'email',
//     header: 'Email',
//   },
//   {
//     accessorKey: 'telefonoFijo',
//     header: 'Teléfono fijo',
//   },
//   {
//     accessorKey: 'telefonoMovil',
//     header: 'Teléfono móvil',
//   },
//   {
//     accessorKey: 'telefonoInstitucional',
//     header: 'Teléfono institucional',
//   },
//   {
//     accessorKey: 'rol',
//     header: 'Rol',
//   },
//   {
//     accessorKey: 'esResponsable',
//     header: 'Responsable',
//   },
//   {
//     accessorKey: 'esAutorizante',
//     header: 'Autorizante',
//   },
// ];

export const UsersPod: React.FC = () => {
  const [users, setUsers] = React.useState<UsersQuery>(createEmptyUsersQuery);

  const loadUsers = async (page?: number, pageSize?: number) => await getUsersRepository(page, pageSize).then(setUsers);

  React.useEffect(() => {
    loadUsers(1, 10);
  }, []);

  console.log(users);

  // const [pagination, setPagination] = React.useState({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });

  // const tableInstance = useReactTable({
  //   data: paginatedData,
  //   columns,
  //   getCoreRowModel: getCoreRowModel(),
  //   manualPagination: true,
  //   rowCount: data.length,
  //   onPaginationChange: setPagination,
  //   state: {
  //     pagination,
  //   },
  // });

  // const { getAllColumns, getRowModel, getPageCount, getState } = tableInstance;

  // const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
  //   setPagination(prev => ({
  //     ...prev,
  //     pageIndex: newPage - 1,
  //   }));
  // };

  return (
    <div className={classes.root}>
      <h1>Soy la página de listado de usuarios</h1>
      {/* <TableContainer component={Paper}>
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
                <TableCell>{row.original.name}</TableCell>
                <TableCell>{row.original.age}</TableCell>
                <TableCell>{row.original.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={getPageCount()}
          page={getState().pagination.pageIndex + 1}
          onChange={handleChangePage}
          className={classes.pagination}
        />
      </TableContainer> */}
      <Link to="/users/$id" params={{ id: '1' }}>
        Navegar a detalle de usuario
      </Link>
    </div>
  );
};
