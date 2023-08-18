import { resolve } from 'node:path'
import * as packageJson from './package.json'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'components/index.js'),
      name: 'WinnersPodiumLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `winners-podium-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  plugins: [react()],
});
