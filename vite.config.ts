import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"; // comment from this line
import { nodePolyfills } from "vite-plugin-node-polyfills"; // to this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({ //comment from this line
      protocolImports: true,
    }), // to this line
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
    esbuildOptions: { //comment from this line
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    }, // to this line
  },
  define: { //and this line
    "process.env": {},
  }, // to this line
});