import React from 'react';
import { Spinner } from '#common/components';
import { EditUser } from './edit.component';
import { useSaveUserMutation, useUnidadRolList } from './edit.query.hook';
import { Usuario } from './edit.vm';

export const EditUserPod: React.FC = () => {
  const { unidadRolList, isLoading } = useUnidadRolList();
  const { saveUser, isPending } = useSaveUserMutation();

  const handleSubmit = (newUser: Usuario) => saveUser(newUser);

  return (
    <>
      <Spinner isSpinnerShowing={isLoading || isPending} />
      <EditUser unidadRolList={unidadRolList} onSubmit={handleSubmit} />
    </>
  );
};
