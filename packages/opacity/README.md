# Opacity Tokens

5 opacity levels for transparent overlays and visual effects.

## Usage

```css
@import "@the-memoize-project/token/opacity";

.overlay {
  background: var(--color-master-darkest);
  opacity: var(--opacity-level-semiopaque);
}

.disabled {
  opacity: var(--opacity-level-medium);
}
```

## Tokens

| Token | Value | Visibility | Usage |
|-------|-------|------------|-------|
| `--opacity-level-semiopaque` | `0.72` | 72% visible | Modal overlays, tooltips |
| `--opacity-level-intense` | `0.64` | 64% visible | Hover states, focus overlays |
| `--opacity-level-medium` | `0.32` | 32% visible | Disabled elements, placeholders |
| `--opacity-level-light` | `0.16` | 16% visible | Subtle effects, decorative borders |
| `--opacity-level-semitransparent` | `0.08` | 8% visible | Micro-details, barely visible accents |

## Examples

### Modal Overlay
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--color-master-darkest);
  opacity: var(--opacity-level-semiopaque);
}
```

### Hover State
```css
.button {
  position: relative;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-pure-white);
  opacity: 0;
  transition: opacity 0.2s;
}

.button:hover::before {
  opacity: var(--opacity-level-intense);
}
```

### Disabled State
```css
.input:disabled {
  opacity: var(--opacity-level-medium);
  cursor: not-allowed;
}

.button:disabled {
  opacity: var(--opacity-level-medium);
  cursor: not-allowed;
}
```

### Placeholder Text
```css
::placeholder {
  opacity: var(--opacity-level-medium);
}
```

### Loading State
```css
.loading {
  opacity: var(--opacity-level-medium);
  pointer-events: none;
}
```

### Subtle Borders
```css
.divider {
  background: var(--color-master-dark);
  opacity: var(--opacity-level-light);
  height: 1px;
}
```

### Glass Morphism
```css
.glass {
  background: var(--color-pure-white);
  opacity: var(--opacity-level-light);
  backdrop-filter: blur(10px);
}
```

### Tooltip
```css
.tooltip {
  background: var(--color-master-darkest);
  color: var(--color-pure-white);
  opacity: var(--opacity-level-semiopaque);
}
```

## Opacity vs Alpha

### Using Opacity Token
Affects the entire element:
```css
.element {
  opacity: var(--opacity-level-medium); /* Everything is 32% transparent */
}
```

### Using Alpha in Color
Affects only that property:
```css
.element {
  background: rgba(0, 0, 0, 0.32); /* Only background is transparent */
  color: #000; /* Text remains fully opaque */
}
```

## Guidelines

### Semiopaque (72%)
- Modal overlays
- Tooltips with visibility
- Dropdown backgrounds
- High visibility needed

### Intense (64%)
- Hover overlays
- Active states
- Focus indicators
- Moderate transparency

### Medium (32%)
- Disabled inputs
- Disabled buttons
- Placeholder text
- Loading states
- Clear visual reduction

### Light (16%)
- Subtle decorative elements
- Dividers
- Background patterns
- Barely noticeable effects

### Semitransparent (8%)
- Micro-interactions
- Highlight effects
- Barely visible accents
- Decorative only

## Best Practices

1. **Accessibility:** Never disable interactive elements with opacity alone
2. **Combine with color:** Use `cursor: not-allowed` for disabled states
3. **Transitions:** Animate opacity changes smoothly
4. **Overlays:** Use semiopaque for readable overlays
5. **Hover:** Use intense for hover effects

## Accessibility Considerations

```css
/* ✅ Good - combines opacity with other indicators */
.button:disabled {
  opacity: var(--opacity-level-medium);
  cursor: not-allowed;
  pointer-events: none;
}

/* ❌ Bad - opacity alone might not be clear */
.button:disabled {
  opacity: var(--opacity-level-medium);
}
```

## Performance

Opacity can trigger repaints. For better performance:

```css
/* Use transform for hardware acceleration */
.element {
  transform: translateZ(0);
  opacity: var(--opacity-level-semiopaque);
}
```

## Common Patterns

| Use Case | Token |
|----------|-------|
| Modal overlay | `semiopaque` |
| Hover effect | `intense` |
| Disabled state | `medium` |
| Placeholder | `medium` |
| Subtle border | `light` |
| Micro-detail | `semitransparent` |

## Related Tokens

- [Color](../color/README.md) - For overlay colors
- [Shadow](../shadow/README.md) - Shadows often use opacity
