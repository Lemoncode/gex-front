import React from 'react';
import { useRecordsQuery } from './records.query.hook';

export const usePagination = (initialPage: number = 0, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const { recordCollection, isLoading } = useRecordsQuery({ page: currentPage, pageSize });

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setCurrentPage(newPage - 1);

  return {
    recordCollection,
    currentPage,
    totalPages: recordCollection.pagination.totalPages,
    isLoading,
    onPageChange: handleChangePage,
  };
};
