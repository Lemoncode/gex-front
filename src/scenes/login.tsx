import { createFileRoute } from '@tanstack/react-router';
import { AuthLayout } from '#layouts/';
import { LoginPod } from '#modules/login';

export const Route = createFileRoute('/login')({
  component: () => {
    return (
      <AuthLayout>
        <LoginPod />
      </AuthLayout>
    );
  },
});
