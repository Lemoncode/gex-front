import { createRouter } from '@tanstack/react-router';
// The route-tree file is generated automatically. Do not modify this file manually.
import { routeTree } from './route-tree';

export const router = createRouter({
  routeTree,
  context: {
    // Initial init: check https://tanstack.com/router/v1/docs/framework/react/guide/authenticated-routes
    auth: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
