import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { AuthProvider, useAuth } from './core/auth';
import { router } from './core/router';
import { ThemeProvider } from './core/theme';

const App = () => {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
