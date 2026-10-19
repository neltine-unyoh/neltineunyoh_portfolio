import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// `npm run build:preview` builds with relative paths and #/ URLs,
// so the site can be opened from any folder or simple file host.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "preview" ? "./" : "/",
}));
