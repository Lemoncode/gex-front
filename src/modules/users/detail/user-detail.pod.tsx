import React from 'react';
import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button,
} from '@mui/material';
import { ColumnDef, getCoreRowModel, RowSelectionState, useReactTable } from '@tanstack/react-table';
import { Link } from '@tanstack/react-router';
import * as classes from './user-detail.styles';

interface Data {
  id: number;
  name: string;
  age: number;
  city: string;
  exported: boolean;
  unavailable?: boolean;
}

const data: Data[] = [
  { id: 1, name: 'Alice', age: 25, city: 'New York', exported: false, unavailable: false },
  { id: 2, name: 'Bob', age: 30, city: 'San Francisco', exported: false, unavailable: false },
  { id: 3, name: 'Charlie', age: 35, city: 'Chicago', exported: true, unavailable: false },
  { id: 4, name: 'Diana', age: 28, city: 'Los Angeles', exported: true, unavailable: false },
  { id: 5, name: 'Eve', age: 22, city: 'Miami', exported: false, unavailable: false },
  { id: 6, name: 'Frank', age: 27, city: 'Seattle', exported: false, unavailable: false },
  { id: 7, name: 'Grace', age: 32, city: 'Boston', exported: false, unavailable: true },
  { id: 8, name: 'Hank', age: 29, city: 'Denver', exported: false, unavailable: false },
  { id: 9, name: 'Ivy', age: 24, city: 'Portland', exported: false, unavailable: true },
  { id: 10, name: 'Jack', age: 31, city: 'Austin', exported: false, unavailable: false },
  { id: 11, name: 'Kate', age: 26, city: 'Houston', exported: false, unavailable: false },
  { id: 12, name: 'Lance', age: 33, city: 'Atlanta', exported: false, unavailable: false },
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

export const UserDetailPod: React.FC = () => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [paginatedData, setPaginatedData] = React.useState<Data[]>([]);
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});

  React.useEffect(() => {
    const start = pagination.pageIndex * pagination.pageSize;
    const end = start + pagination.pageSize;
    setPaginatedData(data.slice(start, end));
  }, [pagination]);

  React.useEffect(() => {
    const initialSelection: RowSelectionState = {};
    data.forEach(user => {
      if (user.exported) {
        initialSelection[user.id] = true;
      }
    });
    setRowSelection(initialSelection);
  }, []);

  const tableInstance = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount: data.length,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: row => row.original.unavailable !== true,
    getRowId: row => row.id.toString(),
    state: {
      pagination,
      rowSelection,
    },
  });

  const {
    getAllColumns,
    getRowModel,
    getPageCount,
    getState,
    getIsSomePageRowsSelected,
    getIsAllRowsSelected,
    getToggleAllRowsSelectedHandler,
  } = tableInstance;

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    setPagination(prev => ({
      ...prev,
      pageIndex: newPage - 1,
    }));
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h1>Soy la página de detalle de usuario</h1>
        <Button variant="contained" color="primary" onClick={() => console.log(getState().rowSelection)}>
          Select users
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>
                <Checkbox
                  color="error"
                  checked={getIsAllRowsSelected()}
                  indeterminate={getIsSomePageRowsSelected()}
                  onChange={getToggleAllRowsSelectedHandler()}
                />
              </TableCell>
              {getAllColumns().map(column => (
                <TableCell key={column.id} className={classes.head}>
                  {column.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getRowModel().rows.map(row => (
              <TableRow key={row.original.id} className={classes.row}>
                <TableCell>
                  <Checkbox
                    checked={row.getIsSelected() ?? false}
                    onChange={row.getToggleSelectedHandler()}
                    disabled={!row.getCanSelect()}
                  />
                </TableCell>
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
      <Link to="/users">Navegar a listado de usuarios</Link>
    </div>
  );
};
