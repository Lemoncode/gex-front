import React from 'react';
import { useUsersQuery } from './users.query.hook';

export const usePagination = (initialPage: number = 0, pageSize: number = 10) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  const { userCollection, isLoading } = useUsersQuery({ page: currentPage, pageSize });

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => setCurrentPage(newPage - 1);

  return {
    userCollection,
    currentPage,
    totalPages: userCollection.pagination.totalPages,
    isLoading,
    onPageChange: handleChangePage,
  };
};
