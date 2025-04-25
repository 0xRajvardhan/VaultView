import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
// import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // nodePolyfills({
    //   protocolImports: true,
    // }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
    // esbuildOptions: {
    //   define: {
    //     global: "globalThis",
    //   },
    //   plugins: [
    //     NodeGlobalsPolyfillPlugin({
    //       buffer: true,
    //     }),
    //   ],
    // },
  },
  // define: {
  //   "process.env": {},
  // },
});