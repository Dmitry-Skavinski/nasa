import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/nasa/',
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/common/scss/index.scss";',
            },
        },
    },
})
