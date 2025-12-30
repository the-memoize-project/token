import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Font Size Tokens", () => {
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

  it("should define all font size tokens", () => {
    expect(cssContent).toContain("--font-size-xxxs");
    expect(cssContent).toContain("--font-size-xxs");
    expect(cssContent).toContain("--font-size-xs");
    expect(cssContent).toContain("--font-size-sm");
    expect(cssContent).toContain("--font-size-md");
    expect(cssContent).toContain("--font-size-lg");
    expect(cssContent).toContain("--font-size-xl");
    expect(cssContent).toContain("--font-size-xxl");
    expect(cssContent).toContain("--font-size-xxxl");
    expect(cssContent).toContain("--font-size-display");
    expect(cssContent).toContain("--font-size-giant");
  });

  it("should use pixel values", () => {
    expect(cssContent).toContain("px");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
