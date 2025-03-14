import React from 'react';

interface Props {
  id: string;
}

export const EditarDatosGeneralesPod: React.FC<Props> = props => {
  const { id } = props;

  return <h2>Datos Generales id: {id}</h2>;
};
