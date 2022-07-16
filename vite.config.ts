import { sveltekit } from '@sveltejs/kit/vite';
import ImportMetaEnvPlugin from '@import-meta-env/unplugin';

export default {
  plugins: [
    sveltekit(),
    ImportMetaEnvPlugin.vite({
      example: 'example.env',
    }),
  ],
};
