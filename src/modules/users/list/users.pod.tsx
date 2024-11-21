import React from 'react';
import { Link } from '@tanstack/react-router';
import { ColumnDef, useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import * as classes from './users.styles';

interface Data {
  id: number;
  name: string;
  age: number;
  city: string;
}

const data: Data[] = [
  { id: 1, name: 'Alice', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', age: 30, city: 'San Francisco' },
  { id: 3, name: 'Charlie', age: 35, city: 'Chicago' },
  { id: 4, name: 'Diana', age: 28, city: 'Los Angeles' },
  { id: 5, name: 'Eve', age: 22, city: 'Miami' },
  { id: 6, name: 'Frank', age: 27, city: 'Seattle' },
  { id: 7, name: 'Grace', age: 32, city: 'Boston' },
  { id: 8, name: 'Hank', age: 29, city: 'Denver' },
  { id: 9, name: 'Ivy', age: 24, city: 'Portland' },
  { id: 10, name: 'Jack', age: 31, city: 'Austin' },
  { id: 11, name: 'Kate', age: 26, city: 'Houston' },
  { id: 12, name: 'Lance', age: 33, city: 'Atlanta' },
];

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
];

export const UsersPod: React.FC = () => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [paginatedData, setPaginatedData] = React.useState<Data[]>([]);

  React.useEffect(() => {
    const start = pagination.pageIndex * pagination.pageSize;
    const end = start + pagination.pageSize;
    setPaginatedData(data.slice(start, end));
  }, [pagination]);

  const tableInstance = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount: data.length,
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  const { getAllColumns, getRowModel, getPageCount, getState } = tableInstance;

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPagination(prev => ({
      ...prev,
      pageIndex: newPage - 1,
    }));
  };

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
      </TableContainer>
      <Link to="/users/$id" params={{ id: '1' }}>
        Navegar a detalle de usuario
      </Link>
    </div>
  );
};
