# Architecture

## Design Philosophy

The @the-memoize-project/token package follows a **systematic, scalable approach** to design tokens, ensuring consistency across The Memoize Project ecosystem.

### Core Principles

1. **Single Source of Truth**: All design values are centralized in one package
2. **Semantic Naming**: Token names describe their purpose, not their values
3. **Scale-Based System**: Consistent scales for spacing, typography, and colors
4. **Light/Dark Native**: First-class support for color schemes using CSS `light-dark()`
5. **Framework Agnostic**: Pure CSS that works anywhere
6. **Progressive Enhancement**: Graceful degradation for older browsers

## Token Structure

### Naming Convention

All tokens follow the pattern: `--{category}-{variant}-{modifier}`

Examples:
- `--color-primary-darker`
- `--spacing-md`
- `--font-size-xl`
- `--border-radius-sm`

### Categories

#### 1. Color System (42 tokens)

**Master (Neutrals) - 7 tokens**
```
darkest → darker → dark → base → light → lighter → lightest
```
Used for: Text hierarchy, backgrounds, borders

**Primary (Brand) - 5 tokens**
```
darker → dark → base → light → lighter
```
Used for: Interactive elements, CTAs, brand presence

**Semantic Colors - 25 tokens**
Five semantic categories (complete, success, warning, danger, info), each with 5 variants:
```
{semantic}-darker → dark → base → light → lighter
```

**Utility Colors - 5 tokens**
- Menu colors (3): `dark`, `base`, `light`
- Pure colors (2): `white`, `black`

**Light/Dark Implementation**:
```css
--color-primary: light-dark(#6d5cae, #7a5ed1);
```
First value = light mode, second value = dark mode

#### 2. Spacing System (21 tokens)

**Margin/Gap Scale - 13 tokens**
```
quarck (4px) → nano (8px) → xxxs (16px) → xxs (24px) → xs (32px)
→ sm (40px) → md (48px) → lg (56px) → xl (64px) → xxl (80px)
→ xxxl (120px) → huge (160px) → giant (200px)
```

**Inset Padding Scale - 8 tokens**
```
quarck (4px) → nano (8px) → xs (16px) → sm (24px)
→ md (32px) → lg (40px) → huge (48px) → giant (56px)
```

**Scale Rationale**:
- Base unit: 4px (ensures alignment with standard 8px grid)
- Consistent rhythm with 8px increments up to 64px
- Larger jumps for macro-layout (80px, 120px, 160px, 200px)

#### 3. Typography System (23 tokens)

**Font Family - 2 tokens**
- `base`: Body text (Roboto)
- `highlight`: Headings (Roboto Condensed)

**Font Size - 11 tokens**
```
xxxs (12px) → xxs (14px) → xs (16px) → sm (20px) → md (24px)
→ lg (32px) → xl (40px) → xxl (48px) → xxxl (64px)
→ display (80px) → giant (96px)
```

**Modular Scale**: ~1.25x ratio between sizes ensures visual hierarchy

**Font Weight - 3 tokens**
- `regular` (400): Body text
- `medium` (500): Emphasis
- `bold` (700): Headings

**Line Height - 7 tokens**
```
default (100%) → xs (115%) → sm (120%) → md (133%)
→ lg (150%) → xl (170%) → xxl (200%)
```

**Usage Guidelines**:
- Compact UI (buttons, labels): `xs`, `sm`
- Body text: `md` (optimal readability at ~133%)
- Long-form content: `lg`, `xl`

#### 4. Border System (12 tokens)

**Border Radius - 7 tokens**
```
none (0) → xs (4px) → sm (8px) → md (16px) → lg (24px)
→ pill (500px) → circular (50%)
```

**Border Width - 5 tokens**
```
none (0) → hairline (1px) → thin (2px) → thick (4px) → heavy (8px)
```

#### 5. Visual Effects (9 tokens)

**Shadow - 4 elevation levels**
```
level-1 (0 4px 8px): Cards, buttons
level-2 (0 8px 24px): Dropdowns, tooltips
level-3 (0 16px 32px): Modals, panels
level-4 (0 16px 48px): Maximum elevation
```

**Opacity - 5 levels**
```
semiopaque (0.72): Modal overlays
intense (0.64): Hover states
medium (0.32): Disabled text
light (0.16): Subtle effects
semitransparent (0.08): Micro-details
```

## Token Organization

### File Structure
```
packages/
├── color/
│   └── index.css        # 42 color tokens
├── spacing/
│   └── index.css        # 21 spacing tokens
├── fontFamily/
│   └── index.css        # 2 font family tokens
├── fontSize/
│   └── index.css        # 11 font size tokens
├── fontWeight/
│   └── index.css        # 3 font weight tokens
├── lineHeight/
│   └── index.css        # 7 line height tokens
├── borderRadius/
│   └── index.css        # 7 border radius tokens
├── borderWidth/
│   └── index.css        # 5 border width tokens
├── shadow/
│   └── index.css        # 4 shadow tokens
├── opacity/
│   └── index.css        # 5 opacity tokens
└── tokens/
    └── index.css        # Aggregates all tokens
```

### Module System

**Individual imports** (recommended for optimal bundle size):
```css
@import "@the-memoize-project/token/color";
@import "@the-memoize-project/token/spacing";
```

**Aggregate import** (convenient for prototyping):
```css
@import "@the-memoize-project/token/tokens";
```

## Integration Patterns

### With @the-memoize-project/std

```javascript
import { css } from "@the-memoize-project/std/dom";
import "@the-memoize-project/token/tokens";

export const styles = css`
  :host {
    color: var(--color-master-dark);
    padding: var(--spacing_inset-md);
  }
`;
```

### With Vanilla CSS

```html
<link rel="stylesheet" href="node_modules/@the-memoize-project/token/packages/tokens/index.css">

<style>
  .button {
    background: var(--color-primary);
    padding: var(--spacing_inset-sm);
  }
</style>
```

### With CSS Modules

```css
@import "@the-memoize-project/token/tokens";

.component {
  color: var(--color-primary);
}
```

## Future Roadmap

### Near-term
- [ ] Add HSL variants for dynamic manipulation
- [ ] Provide JSON export for programmatic access
- [ ] Theme customization guide

### Mid-term
- [ ] Token aliases for semantic usage (e.g., `--button-primary-bg`)
- [ ] CSS @property for better type-checking
- [ ] Animation/transition token category

### Long-term
- [ ] Visual token documentation site
- [ ] Figma integration for design-dev sync
- [ ] Automated token generation from design files
