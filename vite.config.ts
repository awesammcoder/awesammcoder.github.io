import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Served from the domain root (devstudiolabs.com), not a repo subpath.
  base: '/',
  resolve: {
    alias: [
      // @mui/icons-material v5 ships no "exports" map, so a deep import like
      // "@mui/icons-material/Menu" resolves to the CommonJS build. Under Vite
      // that yields a module object rather than a component, and every icon
      // renders as React error #130. Point deep icon imports at the ESM build,
      // which also tree-shakes properly.
      {
        find: /^@mui\/icons-material\/(?!esm\/)([A-Za-z0-9]+)$/,
        replacement: '@mui/icons-material/esm/$1',
      },
    ],
  },
  build: {
    outDir: 'dist',
    // CRA emitted assets under static/; keeping that prefix means any existing
    // inbound link or cached reference to /static/... still resolves.
    assetsDir: 'static',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: false,
  },
});
