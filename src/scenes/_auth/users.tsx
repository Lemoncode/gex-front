import { UsersPod } from '@/modules/users/users.pod';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/users')({
  component: UsersPod,
});
