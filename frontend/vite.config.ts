import packageJson from './package.json'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build'
    },
    plugins: [
        react()
    ],
    server: {
        strictPort: true,
        host: true,
        port: '15000',
        hmr: {
            clientPort: "15000",
        }
    },
    define: {
        APP_VERSION: JSON.stringify(packageJson.version),
        APP_NAME: JSON.stringify(packageJson.name),
    }
})