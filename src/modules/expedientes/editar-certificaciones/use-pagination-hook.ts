import React from 'react';
import { useCertificacionesQuery } from './editar-certificaciones.query.hook';

export const usePagination = (initialPage: number = 0, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const { certificacionCollection, isLoading } = useCertificacionesQuery({ page: currentPage, pageSize });

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setCurrentPage(newPage - 1);

  return {
    certificacionCollection,
    currentPage,
    totalPages: certificacionCollection.pagination.totalPages,
    isLoading,
    onPageChange: handleChangePage,
  };
};
