import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Shadow Tokens", () => {
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

  it("should define all shadow level tokens", () => {
    expect(cssContent).toContain("--shadow-level-1");
    expect(cssContent).toContain("--shadow-level-2");
    expect(cssContent).toContain("--shadow-level-3");
    expect(cssContent).toContain("--shadow-level-4");
  });

  it("should use shadow offset and blur values", () => {
    expect(cssContent).toContain("0");
    expect(cssContent).toContain("px");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
