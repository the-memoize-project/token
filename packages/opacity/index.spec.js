import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, it, expect } from "vitest";

describe("Opacity Tokens", () => {
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

  it("should define all opacity level tokens", () => {
    expect(cssContent).toContain("--opacity-level-semiopaque");
    expect(cssContent).toContain("--opacity-level-intense");
    expect(cssContent).toContain("--opacity-level-medium");
    expect(cssContent).toContain("--opacity-level-light");
    expect(cssContent).toContain("--opacity-level-semitransparent");
  });

  it("should use decimal values", () => {
    expect(cssContent).toContain("0.");
  });

  it("should match snapshot", () => {
    expect(cssContent).toMatchSnapshot();
  });
});
