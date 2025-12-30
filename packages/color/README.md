# Color Tokens

42 color tokens with built-in light/dark mode support.

## Usage

```css
@import "@the-memoize-project/token/color";

.element {
  color: var(--color-primary);
  background: var(--color-master-lightest);
  border-color: var(--color-success);
}
```

## Token Categories

### Master (Neutrals) - 7 tokens

Neutral colors for text, backgrounds, and UI structure.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-master-darkest` | `#0a0a0a` | `#f5f5f5` | Critical text, icons |
| `--color-master-darker` | `#1a1a1a` | `#e1e1e1` | Headings |
| `--color-master-dark` | `#2c2c2c` | `#c9c9c9` | Regular paragraphs |
| `--color-master` | `#626262` | `#a3a3a3` | Muted/helper text |
| `--color-master-light` | `#e6e6e6` | `#5c5c5c` | Borders |
| `--color-master-lighter` | `#f0f0f0` | `#3d3d3d` | Secondary surfaces |
| `--color-master-lightest` | `#fafafa` | `#1f1f1f` | Main backgrounds |

**Where to use:**
- Typography (all text elements)
- Backgrounds (cards, containers, page backgrounds)
- Borders (dividers, outlines)
- Icons (default icon colors)

### Primary (Brand) - 5 tokens

Main brand color for interactive elements.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-primary-darker` | `#413768` | `#b8acf3` | Headings with emphasis |
| `--color-primary-dark` | `#5b4d91` | `#9d88e6` | Interactive text |
| `--color-primary` | `#6d5cae` | `#7a5ed1` | Buttons, links |
| `--color-primary-light` | `#8a7dbe` | `#6750c4` | Icons, light highlights |
| `--color-primary-lighter` | `#e2deef` | `#34257d` | Component backgrounds |

**Where to use:**
- Buttons (primary actions)
- Links (navigation, in-text links)
- Active states (selected items, focused inputs)
- Brand elements (logos, headers)

### Semantic Colors - 25 tokens

Colors conveying meaning and status (5 variants each).

#### Complete (Blue) - Completion/Progress
- `--color-complete-darker` through `--color-complete-lighter`
- **Usage:** Progress indicators, completion badges, informative success states

#### Success (Green) - Positive Feedback
- `--color-success-darker` through `--color-success-lighter`
- **Usage:** Success messages, confirmations, positive status indicators

#### Warning (Yellow) - Caution
- `--color-warning-darker` through `--color-warning-lighter`
- **Usage:** Warning messages, alerts, caution states (non-critical)

#### Danger (Red) - Errors/Destructive Actions
- `--color-danger-darker` through `--color-danger-lighter`
- **Usage:** Error messages, delete actions, critical alerts

#### Info (Gray-Blue) - Neutral Information
- `--color-info-darker` through `--color-info-lighter`
- **Usage:** Informational messages, help text, neutral notifications

### Menu - 3 tokens

Specific colors for navigation menus.

| Token | Usage |
|-------|-------|
| `--color-menu-dark` | Dark menu backgrounds |
| `--color-menu` | Standard menu backgrounds |
| `--color-menu-light` | Menu text and icons |

**Where to use:** Navigation bars, sidebars, dropdown menus

### Pure - 2 tokens

Absolute black and white for maximum contrast.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-pure-white` | `#fff` | Text on dark backgrounds, inverted elements |
| `--color-pure-black` | `#000` | Text on light backgrounds, strong contrast |

**Where to use:** High contrast scenarios, accessibility requirements, inverted UI elements

## Examples

### Button Variants
```css
.button--primary {
  background: var(--color-primary);
  color: var(--color-pure-white);
}

.button--success {
  background: var(--color-success);
  color: var(--color-pure-white);
}

.button--danger {
  background: var(--color-danger);
  color: var(--color-pure-white);
}
```

### Alert Components
```css
.alert--success {
  background: var(--color-success-lighter);
  color: var(--color-success-darker);
  border-left: 4px solid var(--color-success);
}

.alert--warning {
  background: var(--color-warning-lighter);
  color: var(--color-warning-darker);
  border-left: 4px solid var(--color-warning);
}
```

### Text Hierarchy
```css
h1 { color: var(--color-master-darkest); }
h2 { color: var(--color-master-darker); }
p { color: var(--color-master-dark); }
.caption { color: var(--color-master); }
```

## Light/Dark Mode

All color tokens automatically adapt to the user's color scheme preference:

```css
:root {
  color-scheme: light dark;
}
```

Colors will switch based on the user's system preference or manual override.

## Browser Support

- **Full support:** Safari 17.5+, Chrome 123+, Firefox 120+
- **Fallback:** Older browsers will use light mode values

## Related Tokens

- [Opacity](../opacity/README.md) - For transparent overlays
- [Shadow](../shadow/README.md) - For elevation with color
