export const usersQueryKeys = {
  all: ['users'],
  userCollection: (page?: number, pageSize?: number) => ['users', page, pageSize],
};
