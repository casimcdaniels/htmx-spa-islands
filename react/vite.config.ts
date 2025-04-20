import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: false,
    lib: {
      formats: ["es"],
      entry: {
        example: resolve(__dirname, "lib/main.ts"),
      },
      name: "Example",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-dom/client", "react/jsx-runtime"],
    },
  },
  define: {
    "process.env": {},
  },
}) satisfies UserConfig;
