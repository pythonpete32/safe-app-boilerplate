import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cors from 'cors'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'add-cors-headers',
      configureServer(server) {
        server.middlewares.use(
          cors({
            origin: '*',
            methods: ['GET'],
            allowedHeaders: ['X-Requested-With', 'content-type', 'Authorization'],
          }),
        )
      },
    },
  ],
  server: {
    port: 3000,
  },
})
