export const commonQueryKeys = {
  all: ['common'],
  unidadRolList: () => ['common', 'unidadRolList'],
};

export const usersQueryKeys = {
  all: ['users'],
  userCollection: (page?: number, pageSize?: number) => ['users', page, pageSize],
  user: (id: string) => ['user', id],
};
