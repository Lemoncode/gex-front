import React from 'react';
import { CreateRecord } from './create-record.component';

interface Props {
  isOpenModal: boolean;
  toggleModal: () => void;
}

export const CreateRecordPod: React.FC<Props> = props => {
  const { isOpenModal, toggleModal } = props;

  return <CreateRecord isOpenModal={isOpenModal} toggleModal={toggleModal} />;
};
