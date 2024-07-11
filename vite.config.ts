import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
    },
  },
});