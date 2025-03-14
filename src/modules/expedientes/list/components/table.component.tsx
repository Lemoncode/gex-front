import React from 'react';
import { useWithTheme } from '#core/theme';
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Expediente } from '../expedientes.vm';
import * as innerClasses from './table.styles';

interface Props {
  columns: ColumnDef<Expediente>[];
  expedienteCollection: Expediente[];
  totalItems: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const TableComponent: React.FC<Props> = props => {
  const { columns, expedienteCollection: data, totalItems, currentPage, onPageChange } = props;
  const classes = useWithTheme(innerClasses);
  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: totalItems,
  });

  const { getRowModel, getHeaderGroups, getPageCount } = tableInstance;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          {getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map(row => (
            <TableRow key={row.id}>
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
