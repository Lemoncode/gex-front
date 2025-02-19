import React from 'react';
import { NavigationButton } from '#common/components';

export const RecordsPod: React.FC = () => {
  return (
    <NavigationButton
      text="Editar expediente"
      path="/edit-record/$id"
      params={{
        id: '123456',
      }}
    />
  );
};
