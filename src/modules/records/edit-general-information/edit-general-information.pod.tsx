import React from 'react';

interface Props {
  id: string;
}

export const EditGeneralInformationPod: React.FC<Props> = props => {
  const { id } = props;

  return <h2>Datos Generales id: {id}</h2>;
};
