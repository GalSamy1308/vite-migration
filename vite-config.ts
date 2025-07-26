import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import commonjs from "vite-plugin-commonjs";
import dynamicImport from "vite-plugin-dynamic-import";

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [react(), viteTsconfigPaths()],
    server: {
        host: '0.0.0.0', // 👈 allows Docker access
        port: 5173,
        open: true,
    },
})