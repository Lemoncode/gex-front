import { createFileRoute, redirect } from '@tanstack/react-router';
import { AuthLayout } from '#layouts/';
import { LoginPod } from '#modules/login';

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: '/expedientes',
      });
    }
  },
  component: () => {
    return (
      <AuthLayout>
        <LoginPod />
      </AuthLayout>
    );
  },
});
