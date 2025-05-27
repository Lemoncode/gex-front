import React from 'react';
import { Button } from '@mui/material';
import { NavigationButton, Spinner } from '#common/components';
import { usePagination } from './use-pagination-hook';
import { TableComponent } from './components';
import { useColumns } from './editar-certificaciones.columns';
import * as classes from './editar-certificaciones.styles';

export const EditarCertificacionesPod: React.FC = () => {
  const { certificacionCollection, currentPage, totalPages, isLoading, onPageChange } = usePagination();
  const columns = useColumns();

  return (
    <div className={classes.root}>
      <Spinner isSpinnerShowing={isLoading} />
      <TableComponent
        columns={columns}
        certificacionCollection={certificacionCollection.data}
        totalItems={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <section className={classes.buttonContainer}>
        <NavigationButton path="/expedientes" text="Volver" variant="text" />
        <Button type="submit" variant="contained">
          Guardar
        </Button>
      </section>
    </div>
  );
};
