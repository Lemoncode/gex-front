import { createFileRoute } from '@tanstack/react-router';
import { EditPod } from '#modules/users/edit/edit.pod.tsx';

export const Route = createFileRoute('/_auth/create-user/')({
  component: EditPod,
});
