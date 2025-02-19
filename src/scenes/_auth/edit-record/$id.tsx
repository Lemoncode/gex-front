import { createFileRoute } from '@tanstack/react-router';
import { EditRecordScene } from './edit-record.scene';

export const Route = createFileRoute('/_auth/edit-record/$id')({
  component: EditRecordScene,
});
