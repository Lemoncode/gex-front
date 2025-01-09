import React from 'react';
import { Spinner } from '#common/components';
import { EditUser } from './edit.component';
import { useUnidadRolList } from './edit.query.hook';
import { Usuario } from './edit.vm';

export const EditUserPod: React.FC = () => {
  const { unidadRolList, isLoading } = useUnidadRolList();

  const handleSubmit = (values: Usuario) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <EditUser unidadRolList={unidadRolList} onSubmit={handleSubmit} />
      <Spinner isSpinnerShowing={isLoading} />
    </>
  );
};
