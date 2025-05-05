import React from 'react';
import { Typography } from '@mui/material';
import { NavigationButton, Spinner } from '#common/components';
import { useWithTheme } from '#core/theme/theme.hooks.ts';
import { usePagination } from './use-pagination.hook';
import { TableComponent } from './components';
import { useColumns } from './users.columns';
import * as innerClasses from './users.styles';

export const UsersPod: React.FC = () => {
  const { userCollection, currentPage, totalPages, isLoading, onPageChange } = usePagination();
  const classes = useWithTheme(innerClasses);
  const columns = useColumns();

  return (
    <div className={classes.root}>
      <Spinner isSpinnerShowing={isLoading} />
      <div className={classes.header}>
        <Typography variant="h4">Usuarios</Typography>
        <NavigationButton text="Nuevo Usuario" path="/create-user" />
      </div>
      <TableComponent
        columns={columns}
        userCollection={userCollection.data}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
