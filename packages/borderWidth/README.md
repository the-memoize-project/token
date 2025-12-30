# Border Width Tokens

5 border width tokens for consistent outlines and dividers.

## Usage

```css
@import "@the-memoize-project/token/borderWidth";

.card {
  border: var(--border-width-hairline) solid var(--color-master-light);
}

.input:focus {
  border-width: var(--border-width-thin);
}
```

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--border-width-none` | `0` | No border |
| `--border-width-hairline` | `1px` | Subtle dividers, default borders |
| `--border-width-thin` | `2px` | **Standard borders** (inputs, buttons, cards) |
| `--border-width-thick` | `4px` | Emphasis, active states, accents |
| `--border-width-heavy` | `8px` | Maximum emphasis, progress bars |

## Examples

### Card with Subtle Border
```css
.card {
  border: var(--border-width-hairline) solid var(--color-master-light);
  border-radius: var(--border-radius-md);
}
```

### Input States
```css
.input {
  border: var(--border-width-thin) solid var(--color-master-light);
}

.input:focus {
  border-color: var(--color-primary);
  border-width: var(--border-width-thin);
}

.input--error {
  border-color: var(--color-danger);
  border-width: var(--border-width-thin);
}
```

### Button Variants
```css
.button--primary {
  border: var(--border-width-thin) solid transparent;
}

.button--outline {
  border: var(--border-width-thin) solid var(--color-primary);
  background: transparent;
}
```

### Accent Borders
```css
.card--highlighted {
  border-left: var(--border-width-thick) solid var(--color-primary);
}

.alert--warning {
  border-left: var(--border-width-thick) solid var(--color-warning);
}
```

### Dividers
```css
hr {
  border: none;
  border-top: var(--border-width-hairline) solid var(--color-master-light);
}

.divider--thick {
  border-top-width: var(--border-width-thin);
}
```

### Progress Indicators
```css
.progress-bar {
  border: var(--border-width-heavy) solid var(--color-primary);
  border-radius: var(--border-radius-pill);
}
```

## Best Practices

1. **Default:** Use `hairline` (1px) for subtle dividers
2. **Interactive:** Use `thin` (2px) for buttons and inputs
3. **Emphasis:** Use `thick` (4px) for accent borders
4. **Consistency:** Match border width to component importance
5. **Active states:** Consider thicker borders for focus/active

## Common Patterns

| Use Case | Token |
|----------|-------|
| Card borders | `hairline` |
| Input borders | `thin` |
| Button borders | `thin` |
| Dividers | `hairline` |
| Accent borders | `thick` |
| Focus indicators | `thin` or `thick` |

## Accessibility

Use borders (not just color) to indicate focus for accessibility:

```css
.button:focus {
  outline: var(--border-width-thin) solid var(--color-primary);
  outline-offset: 2px;
}
```

## Related Tokens

- [Border Radius](../borderRadius/README.md)
- [Color](../color/README.md)
- [Shadow](../shadow/README.md)
