export const commonQueryKeys = {
  all: ['common'],
  unidadRolList: () => ['common', 'unidadRolList'],
};

export const usersQueryKeys = {
  all: ['users'],
  userCollection: (page?: number, pageSize?: number) => ['users', page, pageSize],
  user: (id: string) => ['user', id],
};

export const expedientesQueryKeys = {
  all: ['expedientes'],
  expedienteCollection: (page?: number, pageSize?: number) => ['expedientes', page, pageSize],
};

export const certificacionesQueryKeys = {
  all: ['certificaciones'],
  certificacionCollection: (page?: number, pageSize?: number) => ['certificaciones', page, pageSize],
};

export const authQueryKeys = {
  all: ['auth'],
  doLogin: () => ['auth', 'doLogin'],
  // todo: add doLogout
  whoami: () => ['auth', 'whoami'],
};
