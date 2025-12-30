# Contributing to @the-memoize-project/token

Thank you for your interest in contributing to the token system! This document provides guidelines for adding, modifying, or improving design tokens.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Adding New Tokens](#adding-new-tokens)
- [Token Naming Guidelines](#token-naming-guidelines)
- [Testing Changes](#testing-changes)
- [Documentation Standards](#documentation-standards)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Issues

**Before creating an issue:**
1. Search existing issues to avoid duplicates
2. Check if the token already exists under a different name
3. Consider if your need might be met by combining existing tokens

**When creating an issue:**
- Use a clear, descriptive title
- Explain the use case for the token
- Provide examples of where it would be used
- Suggest naming if applicable

### Suggesting New Tokens

New token suggestions should include:
1. **Category**: Which token category (color, spacing, etc.)
2. **Name**: Proposed token name following conventions
3. **Value**: Suggested value(s)
4. **Use Case**: Where and why it would be used
5. **Impact**: Which components/apps would benefit

## Adding New Tokens

### 1. Choose the Correct Category

```
color/          → Color values with light/dark support
spacing/        → Margins, gaps, padding values
fontFamily/     → Font family declarations
fontSize/       → Font size values
fontWeight/     → Font weight values
lineHeight/     → Line height percentages
borderRadius/   → Border radius values
borderWidth/    → Border width values
shadow/         → Box shadow definitions
opacity/        → Opacity values
```

### 2. Follow the Naming Convention

**Pattern**: `--{category}-{variant}-{modifier}`

**Examples**:
```css
/* Good */
--color-success-darker
--spacing-xl
--font-size-xxl
--border-radius-pill

/* Bad */
--green-dark        (lacks category prefix)
--color-100         (non-semantic, uses numeric)
--huge-space        (incorrect order)
```

### 3. Add to the Appropriate File

```css
/* packages/spacing/index.css */

:root {
  /* ... existing tokens ... */

  --spacing-mega: 240px; /* New token with descriptive comment */
}
```

### 4. Update Documentation

- Add comment explaining the token's purpose
- Update relevant README sections
- Add usage examples if introducing a new pattern

### 5. Consider Light/Dark Mode

For color tokens, always provide both light and dark values:

```css
--color-accent: light-dark(#2563eb, #60a5fa);
/*                          ↑light  ↑dark    */
```

## Token Naming Guidelines

### Color Tokens

Use **semantic names** describing purpose, not appearance:

```css
/* ✅ Good - Semantic */
--color-success
--color-primary-light
--color-warning-darker

/* ❌ Bad - Appearance-based */
--color-green
--color-light-blue
--color-red-500
```

### Spacing Tokens

Follow the established scale naming:

```css
/* Margin/Gap scale */
quarck → nano → xxxs → xxs → xs → sm → md → lg → xl → xxl → xxxl → huge → giant

/* Inset padding scale (prefix: spacing_inset-) */
quarck → nano → xs → sm → md → lg → huge → giant
```

### Typography Tokens

Use descriptive size names, not T-shirt sizing alone:

```css
/* ✅ Good */
--font-size-xxxs    /* Descriptive of hierarchy */
--font-size-display /* Describes usage */

/* ⚠️ Acceptable but less clear */
--font-size-xs

/* ❌ Bad */
--font-size-12      /* Uses pixel value in name */
```

## Testing Changes

### Visual Testing

Test your tokens in real components:

```html
<!-- Create a test HTML file -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="../packages/tokens/index.css">
  <style>
    .test {
      color: var(--your-new-token);
    }
  </style>
</head>
<body>
  <div class="test">Test content</div>
</body>
</html>
```

### Cross-Browser Testing

Verify tokens work in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

### Light/Dark Mode Testing

```css
:root {
  color-scheme: light dark;
}

/* Toggle using browser DevTools */
```

## Documentation Standards

### Inline Comments

Every token must have a descriptive comment:

```css
--spacing-mega: 240px; /* Extra-large spacing for hero sections and major page divisions */
```

### Comment Guidelines

- **Start with a capital letter**
- **End with a period**
- **Be specific about usage**
- **Keep under 100 characters**

### Examples

```css
/* ✅ Good comments */
--color-primary: light-dark(#6d5cae, #7a5ed1); /* Buttons and interactive elements. */
--spacing-xs: 32px; /* Space between content blocks, such as cards and compact sections. */
--shadow-level-2: 0 8px 24px; /* Dropdown menus, tooltips, or interactive components. */

/* ❌ Bad comments */
--color-primary: light-dark(#6d5cae, #7a5ed1); /* primary color */
--spacing-xs: 32px; /* 32 pixels */
--shadow-level-2: 0 8px 24px; /* shadow */
```

### File Header Comments

Each token file should have a header explaining the category:

```css
/**
 * Usage of `spacing` variations:
 * ------------------------------
 *   - `spacing-quarck`: Ultra-small spacing, ideal for micro-adjustments...
 *   - `spacing-nano`: Small internal spacing, used for separating...
 *   ...
 */
```

## Pull Request Process

### 1. Branch Naming

Use conventional prefixes:

```
feat/add-animation-tokens
fix/correct-shadow-level-3
docs/improve-color-documentation
refactor/reorganize-spacing-scale
```

### 2. Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(spacing): add mega token for hero sections

- Add --spacing-mega: 240px
- Update documentation with usage examples
- Add to aggregated tokens export

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

### 3. Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New token addition
- [ ] Token value modification
- [ ] Documentation update
- [ ] Bug fix

## Tokens Changed
List specific tokens added/modified

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested light/dark modes
- [ ] Updated documentation

## Breaking Changes
List any breaking changes (if applicable)
```

### 4. Review Criteria

PRs will be reviewed for:
- **Naming consistency** with existing tokens
- **Documentation quality** (comments, README updates)
- **Semantic appropriateness** (is this the right category?)
- **Visual harmony** (does it fit the design system?)
- **Breaking changes** (properly documented and justified?)

## Development Setup

### Prerequisites

- Node.js 18+
- Bun or npm

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/the-memoize-project/token.git
cd token

# Install dependencies
bun install  # or npm install

# Make your changes in packages/

# Run linting
bun run biome check .

# Fix linting issues
bun run biome check --write .
```

## Style Guide

### Code Formatting

- **Indentation**: 2 spaces (enforced by Biome)
- **Line length**: Keep lines under 100 characters when possible
- **Quotes**: Use double quotes in comments

### CSS Conventions

```css
:root {
  --token-name: value; /* Comment explaining usage. */
}
```

- Space after colon
- Semicolon at end of declaration
- One line per token
- Alphabetical ordering within sections (optional but recommended)

## Questions?

- **General questions**: [Discussions](https://github.com/the-memoize-project/token/discussions)
- **Bug reports**: [Issues](https://github.com/the-memoize-project/token/issues)
- **Security concerns**: See [SECURITY.md](./SECURITY.md)

Thank you for contributing to @the-memoize-project/token! 🎨
