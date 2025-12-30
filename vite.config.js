import { defineConfig } from "vite";

// Simple config for CSS-only package
// No build needed - CSS files are exported directly
export default defineConfig({
  build: {
    // Optional: could be used to minify CSS if needed
    cssMinify: true,
  },
});
