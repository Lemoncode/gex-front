import * as React from 'react';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '#core/router/router.dev-tools';
import { AuthContextModel } from '#core/auth';

interface Context {
  auth: AuthContextModel;
}

export const Route = createRootRouteWithContext<Context>()({
  component: () => {
    return (
      <>
        <Outlet />
        <React.Suspense>
          <TanStackRouterDevtools />
        </React.Suspense>
      </>
    );
  },
});
