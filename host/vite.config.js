import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation  from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        'user-profile': 'userProfileApp@/user-profile/assets/remoteEntry.js',
        'dashboard': 'dashboardApp@/dashboard/assets/remoteEntry.js',
      },
      shared: ['vue']
    })
  ],
})
