import React from 'react';
import { NavigationButton } from '#common/components';
import { Button } from '@mui/material';
import { CreateRecordPod } from '../create';
import { CreateRecordProvider } from '../create/create-record.provider';

export const RecordsPod: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <CreateRecordProvider>
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
        <CreateRecordPod isOpen={isOpen} toggleModal={toggleModal} />
      </div>
    </CreateRecordProvider>
  );
};
