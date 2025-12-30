import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Font Family Tokens", () => {
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

  it("should define font family tokens", () => {
    expect(cssContent).toContain("--font-family-highlight");
    expect(cssContent).toContain("--font-family-base");
  });

  it("should include Roboto fonts", () => {
    expect(cssContent).toContain("Roboto");
  });

  it("should include sans-serif fallback", () => {
    expect(cssContent).toContain("sans-serif");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
