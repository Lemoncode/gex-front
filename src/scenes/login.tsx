import { AuthLayout } from '@/layouts/auth.layout';
import { LoginPod } from '@/modules/login';
import { createFileRoute, redirect } from '@tanstack/react-router';

interface LoginSearch {
  redirect?: string;
}

export const Route = createFileRoute('/login')({
  validateSearch: (search): LoginSearch => ({
    redirect: (search.redirect as string) || '/',
  }),
  beforeLoad: async ({ context, search }) => {
    if (await context.auth.isAuthenticated()) {
      throw redirect({
        to: search.redirect || '/',
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
