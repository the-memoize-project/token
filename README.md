# @the-memoize-project/token

**Centralized design token system for The Memoize Project.**

A comprehensive set of CSS custom properties (CSS variables) providing consistent colors, spacing, typography, and visual effects across the entire application ecosystem.

## Features

- **108 Design Tokens** across 10 categories
- **Zero Dependencies** - Pure CSS with no runtime requirements
- **Light/Dark Mode** - Built-in support using CSS `light-dark()` function
- **Framework Agnostic** - Works with any web framework or vanilla HTML/CSS
- **Type-Safe** - Includes TypeScript declarations for CSS imports
- **Modular** - Import individual token categories or all tokens at once
- **Well-Documented** - Comprehensive comments explaining usage for each token

## Installation

```bash
npm install @the-memoize-project/token
```

## Quick Start

### Import All Tokens

```css
/* Simplest way - import everything */
@import "@the-memoize-project/token";

.my-component {
  color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-lg);
  border-radius: var(--border-radius-sm);
}
```

### Import Individual Categories

```css
/* More granular - only what you need */
@import "@the-memoize-project/token/color";
@import "@the-memoize-project/token/spacing";

.button {
  background-color: var(--color-primary);
  padding: var(--spacing_inset-sm);
  color: var(--color-pure-white);
}
```

## Token Categories

### Colors (42 tokens)
Comprehensive color palette with light/dark mode support:
- **Master**: Neutral colors for text and backgrounds
- **Primary**: Brand colors for interactive elements
- **Semantic**: Success, warning, danger, complete, info colors
- **Menu**: Specific colors for navigation
- **Pure**: Absolute black and white

Example:
```css
.alert-success {
  background-color: var(--color-success-lighter);
  color: var(--color-success-darker);
  border: var(--border-width-thin) solid var(--color-success);
}
```

### Spacing (21 tokens)
Consistent spacing scale for margins, gaps, and padding:
- **Margin/Gap Scale**: `quarck` (4px) → `giant` (200px)
- **Inset Padding**: `quarck` (4px) → `giant` (56px)

Example:
```css
.card {
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing_inset-md);
  gap: var(--spacing-xs);
}
```

### Typography (23 tokens)
Complete typography system:
- **Font Family** (2): `base`, `highlight`
- **Font Size** (11): `xxxs` (12px) → `giant` (96px)
- **Font Weight** (3): `regular` (400), `medium` (500), `bold` (700)
- **Line Height** (7): `default` (100%) → `xxl` (200%)

Example:
```css
.heading {
  font-family: var(--font-family-highlight);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-sm);
}
```

### Borders (12 tokens)
- **Border Radius** (7): `none` → `circular` (50%)
- **Border Width** (5): `none` → `heavy` (8px)

Example:
```css
.button {
  border-radius: var(--border-radius-pill);
  border: var(--border-width-thin) solid var(--color-primary);
}
```

### Visual Effects (9 tokens)
- **Shadow** (4): Elevation levels from subtle to deep
- **Opacity** (5): Transparency levels for overlays and effects

Example:
```css
.modal {
  box-shadow: var(--shadow-level-4) var(--color-master-darkest);
  background-color: var(--color-master-lightest);
}

.overlay {
  opacity: var(--opacity-level-semiopaque);
}
```

## Light/Dark Mode

All color tokens use CSS's `light-dark()` function, automatically adapting to the user's color scheme preference:

```css
:root {
  color-scheme: light dark; /* Enable automatic switching */
}

.text {
  /* Automatically uses #2c2c2c in light mode, #c9c9c9 in dark mode */
  color: var(--color-master-dark);
}
```

## Usage with Web Components

```javascript
import { css } from "@the-memoize-project/std/dom";
import "@the-memoize-project/token";

const styles = css`
  :host {
    display: block;
    padding: var(--spacing_inset-md);
    background: var(--color-master-lightest);
    border-radius: var(--border-radius-md);
  }

  .title {
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-lg);
    color: var(--color-primary);
  }
`;
```

## Package Exports

```json
{
  "@the-memoize-project/token": "./packages/index.css",
  "@the-memoize-project/token/color": "./packages/color/index.css",
  "@the-memoize-project/token/spacing": "./packages/spacing/index.css",
  "@the-memoize-project/token/fontFamily": "./packages/fontFamily/index.css",
  "@the-memoize-project/token/fontSize": "./packages/fontSize/index.css",
  "@the-memoize-project/token/fontWeight": "./packages/fontWeight/index.css",
  "@the-memoize-project/token/lineHeight": "./packages/lineHeight/index.css",
  "@the-memoize-project/token/borderRadius": "./packages/borderRadius/index.css",
  "@the-memoize-project/token/borderWidth": "./packages/borderWidth/index.css",
  "@the-memoize-project/token/shadow": "./packages/shadow/index.css",
  "@the-memoize-project/token/opacity": "./packages/opacity/index.css",
  "@the-memoize-project/token/tokens": "./packages/tokens/index.css"
}
```

## Documentation

- [Architecture](./ARCHITECTURE.md) - Design philosophy and token structure
- [Contributing](./CONTRIBUTING.md) - How to contribute new tokens
- [Examples](./EXAMPLES.md) - Real-world usage examples
- [Changelog](./CHANGELOG.md) - Version history

## Browser Support

Works in all modern browsers supporting:
- CSS Custom Properties (CSS Variables)
- CSS `light-dark()` function (Safari 17.5+, Chrome 123+, Firefox 120+)

For older browsers, colors will use the light mode values by default.

## Related Projects

- [@the-memoize-project/std](https://github.com/the-memoize-project/std) - Web Components framework
- [@the-memoize-project/ui](https://github.com/the-memoize-project/ui) - UI component library
- [@the-memoize-project/auth](https://github.com/the-memoize-project/auth) - Authentication

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Contributing

We welcome contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md).

## Support

- [Report Issues](https://github.com/the-memoize-project/token/issues)
- [Discussion Forum](https://github.com/the-memoize-project/token/discussions)
