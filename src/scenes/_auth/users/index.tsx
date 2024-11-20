import { UsersPod } from '@/modules/users/list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/users/')({
  component: UsersPod,
});
