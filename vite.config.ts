import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

import path from 'node:path';
//vitejs.dev/config/
export default ({ mode }) => {
  const generateScopedName = mode === 'production' ? '[hash:base64:2]' : '[local]_[hash:base64:2]';

  return defineConfig({
    resolve: {
      alias: [
        { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
        { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      ],
    },
    // base: '//',
    plugins: [react(), { ...eslint({ cache: true, fix: true }), apply: 'build' }],
    server: {
      open: true,
      port: 3000,
      host: true,
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: generateScopedName,
      },
    },
  });
};
