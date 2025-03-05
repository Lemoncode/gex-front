import React from 'react';
import { NavigationButton } from '#common/components';
import { useCreateRecordContext } from '#modules/records/common/providers';
import { Button } from '@mui/material';
import { CreateRecordPod } from '../create';

export const RecordsPod: React.FC = () => {
  const { isOpenModal, toggleModal } = useCreateRecordContext();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Crear expediente
      </Button>
      <NavigationButton
        text="Editar expediente"
        path="/edit-record/$id"
        params={{
          id: '123456',
        }}
      />
      <CreateRecordPod isOpenModal={isOpenModal} toggleModal={toggleModal} />
    </div>
  );
};
