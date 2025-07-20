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
        'user-profile': 'https://bba0t23at05f8ahb9q4b.containers.yandexcloud.net/assets/remoteEntry.js',
        'dashboard': 'https://bbaoj4qinlq3eoudcbbu.containers.yandexcloud.net/assets/remoteEntry.js',
      },
      shared: ['vue']
    })
  ],
})
