import { queryClient } from '#core/react-query/query.ts';
import { getUsersRepository } from '#modules/users/list/users.repository.ts';
import { usersQueryKeys } from '#modules/users/users-keys.ts';

const isAlreadyExistingEmail = async (email: string) => {
  const { data: userCollection } = await queryClient.fetchQuery({
    queryKey: usersQueryKeys.userCollection(0, 10),
    queryFn: () => getUsersRepository(0, 10),
  });
  return userCollection.some(item => item.email === email);
};

export const validateEmailAvailability = async ({ value }: { value: string }) => {
  const isEmailUsed = await isAlreadyExistingEmail(value);

  return {
    type: 'checkEmail',
    succeeded: !isEmailUsed,
    message: isEmailUsed ? 'Email no disponible, ya está asignado a otro usuario.' : '',
  };
};
