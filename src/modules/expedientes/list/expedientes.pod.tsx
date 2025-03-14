import React from 'react';
import { Button, Typography } from '@mui/material';
import { Spinner } from '#common/components';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { useCreateExpedienteContext } from '#modules/expedientes/core/providers';
import { usePagination } from './use-pagination-hook';
import { TableComponent } from './components';
import { useColumns } from './expedientes.columns';
import { CreateExpedientePod } from '../crear';
import * as innerClasses from './expedientes.styles';

export const ExpedientesPod: React.FC = () => {
  const { expedienteCollection, currentPage, totalPages, isLoading, onPageChange } = usePagination();
  const { onOpen } = useCreateExpedienteContext();
  const classes = useWithTheme(innerClasses);
  const columns = useColumns();

  return (
    <div className={classes.root}>
      <Spinner isSpinnerShowing={isLoading} />
      <div className={classes.header}>
        <Typography variant="h4">Expedientes</Typography>
        <Button variant="contained" color="primary" onClick={onOpen}>
          Nuevo expediente
        </Button>
      </div>
      <TableComponent
        columns={columns}
        expedienteCollection={expedienteCollection.data}
        totalItems={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <CreateExpedientePod />
    </div>
  );
};
