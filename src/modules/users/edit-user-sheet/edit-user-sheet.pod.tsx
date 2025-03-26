import React from 'react';
import { Spinner } from '#common/components/';
import { useUnidadRolList } from '#core/api/lookups/unidad-rol';
import { EditUser } from './edit.component';
import { getUserByIdRepository } from './edit.repository';
import { Usuario, createEmptyUsuario } from './edit.vm';
import { useUpdateUserMutation } from './edit.query.hook';

interface Props {
  id: string;
}

export const EditUserSheet: React.FC<Props> = props => {
  const [usuario, setUsuario] = React.useState<Usuario>(createEmptyUsuario());
  const { id } = props;
  const { unidadRolList, isLoading } = useUnidadRolList();
  const { saveUser, isPending } = useUpdateUserMutation();

  const handleSubmit = (usuarioActualizado: Usuario) => {
    saveUser(usuarioActualizado);
  };

  React.useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const usuario = await getUserByIdRepository(id);
    setUsuario(usuario);
  };

  return (
    <>
      <h3>User id: {id}</h3>
      <Spinner isSpinnerShowing={isLoading || isPending} />
      <EditUser usuario={usuario} unidadRolList={unidadRolList} onSubmit={handleSubmit} />
    </>
  );
};
