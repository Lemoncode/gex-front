import { UserDetailPod } from '@/modules/users/detail';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/users/$id')({
  component: UserDetailPod,
});
