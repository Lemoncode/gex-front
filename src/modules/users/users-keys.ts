export const usersQueryKeys = {
  all: ['users'],
  userCollection: (page?: number, pageSize?: number) => ['users', page, pageSize],
  user: (id: string) => ['user', id],
};
