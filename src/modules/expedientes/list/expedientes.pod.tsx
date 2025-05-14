import React from 'react';
import { Spinner } from '#common/components';
import { usePagination } from './use-pagination-hook';
import { Expedientes } from './expedientes.component';
import { CreateExpedientePod } from '../crear';
import * as classes from './expedientes.styles';

export const ExpedientesPod: React.FC = () => {
  const { expedienteCollection, currentPage, totalPages, isLoading, onPageChange } = usePagination();

  return (
    <div className={classes.root}>
      <Spinner isSpinnerShowing={isLoading} />
      <Expedientes
        expedienteCollection={expedienteCollection}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <CreateExpedientePod />
    </div>
  );
};
