import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation  from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'userProfileApp',
      filename: 'remoteEntry.js',
      exposes: {
        './UserProfile': './src/App.vue',
      },
      shared: ['vue']
    })
  ],
})
