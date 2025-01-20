import { createFileRoute } from '@tanstack/react-router';
import { UserEditPod } from '#modules/users/edit';

export const Route = createFileRoute('/_auth/edit-user/$id')({
  component: UserEditPod,
});
