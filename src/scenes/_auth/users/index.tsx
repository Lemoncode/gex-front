import { createFileRoute } from '@tanstack/react-router';
import { UsersPod } from '#/modules/users/list';

export const Route = createFileRoute('/_auth/users/')({
  component: UsersPod,
});
