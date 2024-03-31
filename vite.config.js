import {defineConfig} from "vite";
import { fileURLToPath, URL } from 'node:url'


const PORT = 5000
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
    // const env = loadEnv(mode, process.cwd(), '')

    const config = {
        plugins: [],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            port: PORT,
        },
        preview: {
            port: PORT,
        },
        // define: {
            //         __APP_ENV__: JSON.stringify(env.APP_ENV),
            //     },
    }
    console.log(mode)
    if (mode === 'production') {
        config.base = '/demo-pages'
    }

    return config
})

