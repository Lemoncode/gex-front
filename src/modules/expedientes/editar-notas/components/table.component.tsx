import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import React, { useEffect } from 'react';
import { Nota } from '../editar.notas.vm';
import { Table, TableContainer, Paper, TableHead, TableCell, TableRow, TableBody, TablePagination, Typography, Box } from '@mui/material';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import * as innerClasses from './table.styles';

interface Props {
  columns: ColumnDef<Nota>[];
  notesCollection: Nota[];
  totalItems: number;
  currentPage: number;
  handlePageChange: (event: unknown, page: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TableComponent: React.FC<Props> = props => {

  const { columns, notesCollection: data, totalItems, currentPage, handlePageChange, handleChangeRowsPerPage } = props;
  const classes = useWithTheme(innerClasses);

  const tableInstance = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: totalItems,
  })

  const { getRowModel, getHeaderGroups, getPageCount } = tableInstance;

  useEffect(() => {

    getRowModel().rows.map(row => (
      row.getVisibleCells().map(cell => (
        console.log(cell.column.id)
      ))
    ))

  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          {
            getHeaderGroups().map(headerGroup => (

              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  header.id == 'nota' ?
                    <TableCell
                      key={header.id}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCell>
                    :
                    <TableCell style={{ width: 120, textAlign: 'left' }}
                      key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCell>
                ))}
              </TableRow>
            ))
          }
        </TableHead>
        <TableBody>
          {
            getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  cell.column.id == 'nota' ?
                    <TableCell key={cell.id} >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                    :
                    <TableCell key={cell.id} align='right' style={{ textAlign: 'left' }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                ))}
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Typography fontSize="13px" color='gray'>Total de notas:
          <span style={{ color: 'black' }}> 4</span>
        </Typography>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          rowsPerPage={5}
          count={getPageCount()}
          page={currentPage + 1}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={classes.pagination}
          sx={{
            ".MuiTablePagination-selectLabel": {
              fontSize: "13px", // Cambia el tamaño del texto
              color: "gray"
            },
            ".MuiTablePagination-displayedRows": {
              fontSize: "13px",
            },
            ".MuiTablePagination-actions": {
              "& button": {
                padding: "4px", // Ajusta el tamaño de los botones de paginación
              },
            },
          }}
        />
      </Box>

    </TableContainer>
  )

}
