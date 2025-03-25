import React from 'react';
import { Spinner } from '#common/components/';
import { useUnidadRolList } from '#core/api/lookups/unidad-rol';
import { EditUser } from './edit.component';
import { getUserByIdRepository } from './edit.repository';
import { Usuario, createEmptyUsuario } from './edit.vm';

interface Props {
  id: string;
}

export const EditUserSheet: React.FC<Props> = props => {
  const [usuario, setUsuario] = React.useState<Usuario>(createEmptyUsuario());
  const { id } = props;
  const { unidadRolList, isLoading } = useUnidadRolList();
  const handleSubmit = () => true;

  React.useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    const usuario = await getUserByIdRepository(id);
    console.log(usuario);
    setUsuario(usuario);
  };

  return (
    <>
      <h3>User id: {id}</h3>
      <Spinner isSpinnerShowing={isLoading} />
      <EditUser usuario={usuario} unidadRolList={unidadRolList} onSubmit={handleSubmit} />
    </>
  );
};
