import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: /EG-Landing/,
  build: {
    chunkSizeWarningLimit: 1600, // Tetapkan batas yang diinginkan dalam kilobita
  },
});
