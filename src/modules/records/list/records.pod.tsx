import React from 'react';
import { Button, Typography } from '@mui/material';
import { Spinner } from '#common/components';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { useCreateRecordContext } from '#modules/records/core/providers';
import { usePagination } from './use-pagination-hook';
import { TableComponent } from './components';
import { useColumns } from './records.columns';
import { CreateRecordPod } from '../create';
import * as innerClasses from './records.styles';

export const RecordsPod: React.FC = () => {
  const { recordCollection, currentPage, totalPages, isLoading, onPageChange } = usePagination();
  const { onOpen } = useCreateRecordContext();
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
        recordCollection={recordCollection.data}
        totalItems={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <CreateRecordPod />
    </div>
  );
};
