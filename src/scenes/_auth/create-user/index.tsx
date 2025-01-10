import { createFileRoute } from '@tanstack/react-router';
import { CreateUserPod } from '#modules/users/create/create.pod.tsx';

export const Route = createFileRoute('/_auth/create-user/')({
  component: CreateUserPod,
});
