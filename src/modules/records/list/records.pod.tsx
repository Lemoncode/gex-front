import React from 'react';
import { Typography } from '@mui/material';
import { NavigationButton, Spinner } from '#common/components';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { usePagination } from './use-pagination-hook';
import { TableComponent } from './components';
import { useColumns } from './records.columns';
import * as innerClasses from './records.styles';

export const RecordsPod: React.FC = () => {
  const { recordCollection, currentPage, totalPages, isLoading, onPageChange } = usePagination();
  const classes = useWithTheme(innerClasses);
  const columns = useColumns();

  return (
    <div className={classes.root}>
      <Spinner isSpinnerShowing={isLoading} />
      <div className={classes.header}>
        <Typography variant="h4">Expedientes</Typography>
        {/* Implement new path to create record */}
        <NavigationButton text="Nuevo Expediente" path="/records" />
      </div>
      <TableComponent
        columns={columns}
        recordCollection={recordCollection.data}
        totalItems={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
