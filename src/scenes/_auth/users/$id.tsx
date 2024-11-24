import { createFileRoute } from '@tanstack/react-router';
import { UserDetailPod } from '#/modules/users/detail';

export const Route = createFileRoute('/_auth/users/$id')({
  component: UserDetailPod,
});
