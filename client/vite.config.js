/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const SERVER_PORT = process.env.SERVER_PORT ?? 3000;
  const SERVER_ADDRESS = process.env.SERVER_ADDRESS ?? 'localhost';
  const API_ENDPOINT = process.env.API_ENDPOINT ?? 'api';

  return {
    plugins: [vue()],
    define: {
      SERVER_PORT: JSON.stringify(SERVER_PORT),
      SERVER_ADDRESS: JSON.stringify(SERVER_ADDRESS),
      API_ENDPOINT: JSON.stringify(API_ENDPOINT),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
