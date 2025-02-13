import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "")
  return {
    // vite config
    plugins: [vue()],
    resolve: {
      alias: {
        punycode: "rollup-plugin-node-polyfills/polyfills/punycode",
      },
    },
    base: env.VITE_APP_BASE,

    build: {
      outDir: env.VITE_APP_DIR,
    },

    server: {
      host: env.VITE_APP_DEV_HOST,
      port: env.VITE_APP_DEV_PORT,
    },
  }
})
