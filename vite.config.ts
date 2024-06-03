import { sveltekit } from '@sveltejs/kit/vite';
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  let plugins = [sveltekit()];
  if (mode === 'development') {
    plugins = [nodeLoaderPlugin(), ...plugins];
  }
  return {
    // ... your code ...
    plugins
  };
});
