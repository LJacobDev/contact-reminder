import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

//added this line while following a blog post about setting up github actions to deploy to pages
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],

  //added this line while following a blog post about setting up github actions to deploy to pages
  base: '/contact-reminder/',
  //added this line while following a blog post about setting up github actions to deploy to pages
  server: { port: 5173 }, //Development Server Port
  resolve: {
    alias: {
      //left this line as is, because the blog about github actions had a line that appeared to produce an equivalent result as this
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  //added this build entry while following a blog post about setting up github actions to deploy to pages, though it doesn't appear to change anything, as Vite was already building to dist and using index.html as its entry point
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
})
