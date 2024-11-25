import React from 'react';
import { Link } from '@tanstack/react-router';
import { useReactTable, getCoreRowModel, getPaginationRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import { createEmptyUsersQuery, User, UsersQuery } from './users.vm';
import { getUsersRepository } from './users.repository';
import * as classes from './users.styles';

const columns: ColumnDef<User>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'nombre', header: 'Nombre' },
  { accessorKey: 'apellidos', header: 'Apellidos' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'telefonoFijo', header: 'Teléfono Fijo' },
  { accessorKey: 'telefonoMovil', header: 'Teléfono Móvil' },
  { accessorKey: 'telefonoInstitucional', header: 'Teléfono Institucional' },
  { accessorKey: 'rol', header: 'Rol' },
];

interface CommonTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  totalItems: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  className?: string;
}

export const CommonTable = <T,>({
  columns,
  data,
  totalItems,
  currentPage,
  onPageChange,
  className,
}: CommonTableProps<T>) => {
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: totalItems,
  });

  const { getRowModel, getHeaderGroups, getPageCount } = tableInstance;

  return (
    <TableContainer component={Paper} className={className}>
      <Table className={classes.table}>
        <TableHead>
          {getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id} className={classes.head}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map(row => (
            <TableRow key={row.id} className={classes.row}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        count={getPageCount()}
        page={currentPage + 1}
        onChange={onPageChange}
        className={classes.pagination}
      />
    </TableContainer>
  );
};

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
    onChangePage: handleChangePage,
  };
};

export const UsersPod: React.FC = () => {
  const { users, currentPage, onChangePage } = usePagination();

  return (
    <div className={classes.root}>
      <h1>Soy la página de listado de usuarios</h1>
      <CommonTable
        columns={columns}
        data={users.data}
        totalItems={users.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={onChangePage}
      />
      <Link to="/users/$id" params={{ id: '1' }}>
        Navegar a detalle de usuario
      </Link>
    </div>
  );
};
