import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      include: ["packages/**/*.css"],
      reporter: ["text", "lcov", "html"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    environment: "happy-dom",
  },
});
