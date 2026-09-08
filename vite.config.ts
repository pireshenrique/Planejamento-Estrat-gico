import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

const logErrorPlugin = () => ({
  name: 'log-error',
  configureServer(server) {
    server.middlewares.use('/log-error', (req, res) => {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const msg = url.searchParams.get('msg');
      if (msg) {
        fs.appendFileSync('client-errors.log', msg + '\n');
      }
      res.statusCode = 200;
      res.end('ok');
    });
  }
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), logErrorPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
