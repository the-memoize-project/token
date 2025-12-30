# Spacing Tokens

21 spacing tokens for consistent margins, gaps, and padding across your application.

## Usage

```css
@import "@the-memoize-project/token/spacing";

.container {
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-md);
  padding: var(--spacing_inset-lg);
}
```

## Token Categories

### Margin/Gap Scale - 13 tokens

Use for margins, gaps between elements, and general spacing.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-quarck` | `4px` | Micro-adjustments, tight spacing |
| `--spacing-nano` | `8px` | Very close elements |
| `--spacing-xxxs` | `16px` | Small component groupings |
| `--spacing-xxs` | `24px` | Element separation |
| `--spacing-xs` | `32px` | Content blocks, cards |
| `--spacing-sm` | `40px` | Medium sections |
| `--spacing-md` | `48px` | Component spacing |
| `--spacing-lg` | `56px` | Large content blocks |
| `--spacing-xl` | `64px` | Extensive content layouts |
| `--spacing-xxl` | `80px` | Large sections |
| `--spacing-xxxl` | `120px` | Extra-large spacing |
| `--spacing-huge` | `160px` | Generous section spacing |
| `--spacing-giant` | `200px` | Hero sections, maximum spacing |

**Where to use:**
- Margins between sections
- Gap in flex/grid layouts
- Spacing between UI elements
- Vertical rhythm

### Inset Padding Scale - 8 tokens

Use for internal padding within components.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing_inset-quarck` | `4px` | Small buttons, chips |
| `--spacing_inset-nano` | `8px` | Badges, labels |
| `--spacing_inset-xs` | `16px` | Small buttons, compact cards |
| `--spacing_inset-sm` | `24px` | Smaller sections, medium cards |
| `--spacing_inset-md` | `32px` | Content boxes, containers |
| `--spacing_inset-lg` | `40px` | Highlighted sections |
| `--spacing_inset-huge` | `48px` | Large sections, modals |
| `--spacing_inset-giant` | `56px` | Hero components, banners |

**Where to use:**
- Button padding
- Card padding
- Container padding
- Modal/dialog padding

## Scale Rationale

The spacing system follows an **8px grid** with thoughtful progression:

- **Micro (4-8px):** Tight spacing for compact UI
- **Small (16-32px):** Standard component spacing
- **Medium (40-64px):** Section spacing
- **Large (80-200px):** Macro layout, page structure

## Examples

### Card Component
```css
.card {
  padding: var(--spacing_inset-lg);
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-sm);
}

.card__header {
  margin-bottom: var(--spacing-xs);
}
```

### Grid Layout
```css
.grid {
  display: grid;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
}

.grid--compact {
  gap: var(--spacing-sm);
}

.grid--spacious {
  gap: var(--spacing-xxl);
}
```

### Button Sizes
```css
.button--sm {
  padding: var(--spacing_inset-quarck) var(--spacing_inset-xs);
}

.button--md {
  padding: var(--spacing_inset-xs) var(--spacing_inset-sm);
}

.button--lg {
  padding: var(--spacing_inset-sm) var(--spacing_inset-md);
}
```

### Page Layout
```css
.page {
  padding: var(--spacing-xl);
}

.section {
  margin-bottom: var(--spacing-xxl);
}

.hero {
  padding: var(--spacing-giant) 0;
}
```

### Stack Layout
```css
.stack {
  display: flex;
  flex-direction: column;
}

.stack--tight {
  gap: var(--spacing-xs);
}

.stack--normal {
  gap: var(--spacing-md);
}

.stack--loose {
  gap: var(--spacing-xl);
}
```

## Responsive Spacing

Consider adjusting spacing for different screen sizes:

```css
.container {
  padding: var(--spacing_inset-md);
}

@media (min-width: 768px) {
  .container {
    padding: var(--spacing_inset-lg);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: var(--spacing_inset-huge);
  }
}
```

## Best Practices

1. **Consistency:** Use tokens instead of arbitrary values
2. **Rhythm:** Stick to the scale for visual harmony
3. **Hierarchy:** Larger spacing = more separation/importance
4. **Responsive:** Adjust spacing for different screen sizes
5. **Symmetry:** Use consistent spacing on all sides when possible

## Common Patterns

| Pattern | Tokens |
|---------|--------|
| Tight UI (dense dashboards) | `quarck`, `nano`, `xxxs` |
| Standard UI (most interfaces) | `xs`, `sm`, `md` |
| Spacious UI (landing pages) | `lg`, `xl`, `xxl` |
| Hero sections | `huge`, `giant` |

## Related Tokens

- [Border Radius](../borderRadius/README.md) - For rounded corners
- [Shadow](../shadow/README.md) - For depth perception
