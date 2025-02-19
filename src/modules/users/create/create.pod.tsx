import React from 'react';
import { Spinner } from '#common/components';
import { CreateUser } from './create.component';
import { useSaveUserMutation } from './create.query.hook';
import { Usuario } from './create.vm';
import { useUnidadRolList } from '#core/api/lookups/unidad-rol';

export const CreateUserPod: React.FC = () => {
  const { unidadRolList, isLoading } = useUnidadRolList();
  const { saveUser, isPending } = useSaveUserMutation();

  const handleSubmit = (newUser: Usuario) => saveUser(newUser);

  return (
    <>
      <Spinner isSpinnerShowing={isLoading || isPending} />
      <CreateUser unidadRolList={unidadRolList} onSubmit={handleSubmit} />
    </>
  );
};
