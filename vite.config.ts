import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      config: resolve(__dirname, "./src/script/config.ts"),
    },
  },
  build: {
    cssCodeSplit: false,
    minify: "terser",
    terserOptions: {
      format: {
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          config: ["./src/script/config"],
        },
        minifyInternalExports: false,
        assetFileNames: "assets/[name].[ext]",
        entryFileNames: function (chunkInfo) {
          return `assets/${chunkInfo.name}.js`;
        },
        chunkFileNames: "assets/[name].js",
        format: "esm",
      },
    },
  },
});
