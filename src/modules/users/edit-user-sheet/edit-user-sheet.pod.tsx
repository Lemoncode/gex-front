import React from 'react';
import { Spinner } from '#common/components/';
import { EditUser } from './edit.component';
// TODO: Ask to refactor 'useUnidadRolList' hook and make it available throughout the entire module
import { useUnidadRolList } from '../create/create.query.hook';

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
