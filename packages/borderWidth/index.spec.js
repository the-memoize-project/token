import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Border Width Tokens", () => {
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

  it("should define all border width tokens", () => {
    expect(cssContent).toContain("--border-width-none");
    expect(cssContent).toContain("--border-width-hairline");
    expect(cssContent).toContain("--border-width-thin");
    expect(cssContent).toContain("--border-width-thick");
    expect(cssContent).toContain("--border-width-heavy");
  });

  it("should use pixel values", () => {
    expect(cssContent).toMatch(/px|0/);
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
