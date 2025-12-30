import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Font Weight Tokens", () => {
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

  it("should define all font weight tokens", () => {
    expect(cssContent).toContain("--font-weight-bold");
    expect(cssContent).toContain("--font-weight-medium");
    expect(cssContent).toContain("--font-weight-regular");
  });

  it("should use numeric weight values", () => {
    expect(cssContent).toContain("700");
    expect(cssContent).toContain("500");
    expect(cssContent).toContain("400");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
