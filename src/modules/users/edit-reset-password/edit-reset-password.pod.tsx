import React from 'react';
import { EditResetPasswordComponent } from './edit-reset-password.component';

interface Props {
  id: string;
}

export const EditResetPassword: React.FC<Props> = props => {
  const { id } = props;
  return <EditResetPasswordComponent id={id} />;
};
