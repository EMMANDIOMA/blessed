import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // make sure React plugin is installed
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // This is the important part
    historyApiFallback: true,
  },
});
