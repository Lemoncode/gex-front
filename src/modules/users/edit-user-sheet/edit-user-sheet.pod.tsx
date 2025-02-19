import React from 'react';
import { Spinner } from '#common/components/';
import { useUnidadRolList } from '#core/api/lookups/unidad-rol';
import { EditUser } from './edit.component';

interface Props {
  id: string;
}

export const EditUserSheet: React.FC<Props> = props => {
  const { id } = props;
  const { unidadRolList, isLoading } = useUnidadRolList();
  const handleSubmit = () => true;

  return (
    <>
      <h3>User id: {id}</h3>
      <Spinner isSpinnerShowing={isLoading} />
      <EditUser unidadRolList={unidadRolList} onSubmit={handleSubmit} />
    </>
  );
};
