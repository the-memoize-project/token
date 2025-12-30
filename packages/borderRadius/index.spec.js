import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Border Radius Tokens", () => {
  const cssContent = readFileSync(
    resolve(__dirname, "index.css"),
    "utf-8",
  );

  it("should export valid CSS content", () => {
    expect(cssContent).toBeDefined();
    expect(cssContent.length).toBeGreaterThan(0);
  });

  it("should contain :root selector", () => {
    expect(cssContent).toContain(":root");
  });

  it("should define all border radius tokens", () => {
    expect(cssContent).toContain("--border-radius-none");
    expect(cssContent).toContain("--border-radius-xs");
    expect(cssContent).toContain("--border-radius-sm");
    expect(cssContent).toContain("--border-radius-md");
    expect(cssContent).toContain("--border-radius-lg");
    expect(cssContent).toContain("--border-radius-pill");
    expect(cssContent).toContain("--border-radius-circular");
  });

  it("should use appropriate units", () => {
    expect(cssContent).toMatch(/px|%/);
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
