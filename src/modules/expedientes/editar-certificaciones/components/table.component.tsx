import React from 'react';
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { Certificacion } from '../editar-certificaciones.vm';
import * as classes from './table.styles';

interface Props {
  columns: ColumnDef<Certificacion>[];
  certificacionCollection: Certificacion[];
  totalItems: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const TableComponent: React.FC<Props> = props => {
  const { columns, certificacionCollection: data, totalItems, currentPage, onPageChange } = props;
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
