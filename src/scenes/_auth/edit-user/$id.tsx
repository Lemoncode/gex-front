import { createFileRoute } from '@tanstack/react-router';
import { UserScene } from './edit-user.scene';

export const Route = createFileRoute('/_auth/edit-user/$id')({
  component: UserScene,
});
