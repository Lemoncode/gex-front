import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './core/theme';

import { App } from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <h1>GEX Front</h1>
    </ThemeProvider>
  </StrictMode>
);
