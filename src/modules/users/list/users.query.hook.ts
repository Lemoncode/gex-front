import { useQuery } from '@tanstack/react-query';
import { usersQueryKeys } from '#core/react-query/index.ts';
import { getUsersRepository } from './users.repository';
import { createEmptyUsersQuery, UserQueryFilter, UsersQuery } from './users.vm';

interface UseUsersQueryResult {
  users: UsersQuery;
}

export const useUsersQuery = (userFilter: UserQueryFilter): UseUsersQueryResult => {
  const { page, pageSize } = userFilter;

  const { data: users = createEmptyUsersQuery() } = useQuery({
    queryKey: usersQueryKeys.users(page, pageSize),
    queryFn: () => getUsersRepository(page, pageSize),
  });

  return {
    users,
  };
};
