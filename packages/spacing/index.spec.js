import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Spacing Tokens", () => {
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

  it("should define margin/gap spacing tokens", () => {
    expect(cssContent).toContain("--spacing-quarck");
    expect(cssContent).toContain("--spacing-nano");
    expect(cssContent).toContain("--spacing-xxxs");
    expect(cssContent).toContain("--spacing-xxs");
    expect(cssContent).toContain("--spacing-xs");
    expect(cssContent).toContain("--spacing-sm");
    expect(cssContent).toContain("--spacing-md");
    expect(cssContent).toContain("--spacing-lg");
    expect(cssContent).toContain("--spacing-xl");
    expect(cssContent).toContain("--spacing-xxl");
    expect(cssContent).toContain("--spacing-xxxl");
    expect(cssContent).toContain("--spacing-huge");
    expect(cssContent).toContain("--spacing-giant");
  });

  it("should define inset padding tokens", () => {
    expect(cssContent).toContain("--spacing_inset-quarck");
    expect(cssContent).toContain("--spacing_inset-nano");
    expect(cssContent).toContain("--spacing_inset-xs");
    expect(cssContent).toContain("--spacing_inset-sm");
    expect(cssContent).toContain("--spacing_inset-md");
    expect(cssContent).toContain("--spacing_inset-lg");
    expect(cssContent).toContain("--spacing_inset-huge");
    expect(cssContent).toContain("--spacing_inset-giant");
  });

  it("should use pixel values", () => {
    expect(cssContent).toContain("px");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
