import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      TanStackRouterVite({
        routesDirectory: 'src/scenes',
        generatedRouteTree: 'src/core/router/route-tree.ts',
        autoCodeSplitting: true,
      }),
      react(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      restoreMocks: true,
      include: ['./src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
        },
      },
    },
  };
});
