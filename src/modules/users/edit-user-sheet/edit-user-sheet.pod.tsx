import React from 'react';
import { Spinner } from '#common/components/';
import { useUnidadRolList } from '#core/api/lookups/unidad-rol';
import { EditUser } from './edit.component';
import { Usuario } from './edit.vm';
import { useLoadUser, useUpdateUserMutation } from './edit.query.hook';

interface Props {
  id: string;
}

export const EditUserSheet: React.FC<Props> = props => {
  const { id } = props;
  const { unidadRolList, isLoading: isLoadingUnidadRolList } = useUnidadRolList();
  const { saveUser, isPending } = useUpdateUserMutation();
  const { usuario, isLoading: isLoadingUsuario } = useLoadUser(id);

  const handleSubmit = (usuarioActualizado: Usuario) => {
    saveUser(usuarioActualizado);
  };

  const isLoading = React.useMemo(
    () => isLoadingUsuario || isLoadingUnidadRolList || isPending,
    [isLoadingUsuario, isLoadingUnidadRolList, isPending]
  );

  return (
    <>
      <Spinner isSpinnerShowing={isLoading} />
      <EditUser usuario={usuario} unidadRolList={unidadRolList} onSubmit={handleSubmit} />
    </>
  );
};
