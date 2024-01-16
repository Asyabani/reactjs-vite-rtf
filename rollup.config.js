export default {
  // ... konfigurasi lainnya
  build: {
    rollupOptions: {
      output: {
        base: "/EG-Landing",
        manualChunks: {
          // Tentukan manualChunks Anda di sini
          myChunk: ["module1", "module2"],
        },
      },
    },
  },
};
