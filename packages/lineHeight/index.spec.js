import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Line Height Tokens", () => {
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

  it("should define all line height tokens", () => {
    expect(cssContent).toContain("--line-height-default");
    expect(cssContent).toContain("--line-height-xs");
    expect(cssContent).toContain("--line-height-sm");
    expect(cssContent).toContain("--line-height-md");
    expect(cssContent).toContain("--line-height-lg");
    expect(cssContent).toContain("--line-height-xl");
    expect(cssContent).toContain("--line-height-xxl");
  });

  it("should use percentage values", () => {
    expect(cssContent).toContain("%");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
