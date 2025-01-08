import { useQuery } from '@tanstack/react-query';
import { CollectionQuery, createEmptyCollectionQuery } from '#common/models';
import { getUsersRepository } from './users.repository';
import { usersQueryKeys } from '../users-keys';
import { UserQueryFilter, Usuario } from './users.vm';

interface UseUsersQueryResult {
  userCollection: CollectionQuery<Usuario>;
  isLoading: boolean;
}

export const useUsersQuery = (userFilter: UserQueryFilter): UseUsersQueryResult => {
  const { page, pageSize } = userFilter;

  const { data: userCollection = createEmptyCollectionQuery(), isLoading } = useQuery({
    queryKey: usersQueryKeys.userCollection(page, pageSize),
    queryFn: () => getUsersRepository(page, pageSize),
  });

  return {
    userCollection,
    isLoading,
  };
};
