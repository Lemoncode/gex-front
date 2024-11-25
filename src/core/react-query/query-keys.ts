export const usersQueryKeys = {
  all: ['users'],
  users: (page: number, pageSize: number) => ['users', page, pageSize],
};
