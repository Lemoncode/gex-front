import React from 'react';
import { useExpedientesQuery } from './expedientes.query.hook';

export const usePagination = (initialPage: number = 0, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const { expedienteCollection, isLoading } = useExpedientesQuery({ page: currentPage, pageSize });

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setCurrentPage(newPage - 1);

  return {
    expedienteCollection,
    currentPage,
    totalPages: expedienteCollection.pagination.totalPages,
    isLoading,
    onPageChange: handleChangePage,
  };
};
