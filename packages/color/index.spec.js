import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Color Tokens", () => {
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

  it("should define all master color tokens", () => {
    expect(cssContent).toContain("--color-master-darkest");
    expect(cssContent).toContain("--color-master-darker");
    expect(cssContent).toContain("--color-master-dark");
    expect(cssContent).toContain("--color-master:");
    expect(cssContent).toContain("--color-master-light");
    expect(cssContent).toContain("--color-master-lighter");
    expect(cssContent).toContain("--color-master-lightest");
  });

  it("should define all primary color tokens", () => {
    expect(cssContent).toContain("--color-primary-darker");
    expect(cssContent).toContain("--color-primary-dark");
    expect(cssContent).toContain("--color-primary:");
    expect(cssContent).toContain("--color-primary-light");
    expect(cssContent).toContain("--color-primary-lighter");
  });

  it("should define all semantic color tokens", () => {
    // Complete
    expect(cssContent).toContain("--color-complete");
    // Success
    expect(cssContent).toContain("--color-success");
    // Warning
    expect(cssContent).toContain("--color-warning");
    // Danger
    expect(cssContent).toContain("--color-danger");
    // Info
    expect(cssContent).toContain("--color-info");
  });

  it("should define menu color tokens", () => {
    expect(cssContent).toContain("--color-menu-dark");
    expect(cssContent).toContain("--color-menu:");
    expect(cssContent).toContain("--color-menu-light");
  });

  it("should define pure color tokens", () => {
    expect(cssContent).toContain("--color-pure-white");
    expect(cssContent).toContain("--color-pure-black");
  });

  it("should use light-dark() function for color tokens", () => {
    expect(cssContent).toContain("light-dark(");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
