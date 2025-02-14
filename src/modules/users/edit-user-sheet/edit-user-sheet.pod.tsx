import React from 'react';

interface Props {
  id: string;
}

export const EditUserSheet: React.FC<Props> = props => {
  const { id } = props;
  return <h3>User id: {id}</h3>;
};
