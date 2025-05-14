import React from 'react';
import { Button, Typography } from '@mui/material';
import { CollectionQuery } from '#common/models';
import { useCreateExpedienteContext } from '../core/providers';
import { useColumns } from './expedientes.columns';
import { TableComponent } from './components';
import { Expediente } from './expedientes.vm';
import * as classes from './expedientes.styles';

interface Props {
  expedienteCollection: CollectionQuery<Expediente>;
  currentPage: number;
  totalPages: number;
  onPageChange: (_: React.ChangeEvent<unknown>, newPage: number) => void;
}

export const Expedientes: React.FC<Props> = props => {
  const { expedienteCollection, currentPage, totalPages, onPageChange } = props;
  const { onOpen } = useCreateExpedienteContext();
  const columns = useColumns();
  return (
    <>
      <div className={classes.header}>
        <Typography variant="h4">Expedientes</Typography>
        <Button variant="contained" color="primary" onClick={onOpen}>
          Nuevo expediente
        </Button>
      </div>
      <TableComponent
        columns={columns}
        expedienteCollection={expedienteCollection.data}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};
