import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  define: {
    "process.env": process.env,
  },
});
