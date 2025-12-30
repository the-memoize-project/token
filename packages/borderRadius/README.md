# Border Radius Tokens

7 border radius tokens for consistent rounded corners.

## Usage

```css
@import "@the-memoize-project/token/borderRadius";

.card {
  border-radius: var(--border-radius-md);
}

.button {
  border-radius: var(--border-radius-sm);
}

.avatar {
  border-radius: var(--border-radius-circular);
}
```

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--border-radius-none` | `0` | Sharp corners, no rounding |
| `--border-radius-xs` | `4px` | Subtle rounding, inputs |
| `--border-radius-sm` | `8px` | **Standard rounding** (buttons, cards) |
| `--border-radius-md` | `16px` | Modals, popovers, emphasized components |
| `--border-radius-lg` | `24px` | Large cards, highlighted components |
| `--border-radius-pill` | `500px` | Pill shape (badges, tags, elongated buttons) |
| `--border-radius-circular` | `50%` | **Perfect circles** (avatars, icons) |

## Examples

### Buttons
```css
.button {
  border-radius: var(--border-radius-sm);
}

.button--pill {
  border-radius: var(--border-radius-pill);
}
```

### Cards
```css
.card {
  border-radius: var(--border-radius-md);
}

.card--flat {
  border-radius: var(--border-radius-none);
}
```

### Form Inputs
```css
input, select, textarea {
  border-radius: var(--border-radius-xs);
}
```

### Avatars & Icons
```css
.avatar {
  border-radius: var(--border-radius-circular);
  width: 48px;
  height: 48px;
}

.icon-circle {
  border-radius: var(--border-radius-circular);
}
```

### Modal
```css
.modal {
  border-radius: var(--border-radius-lg);
}
```

### Badge/Tag
```css
.badge {
  border-radius: var(--border-radius-pill);
  padding: var(--spacing_inset-quarck) var(--spacing_inset-xs);
}
```

## Selective Rounding

Round specific corners:

```css
.dropdown {
  border-radius:
    var(--border-radius-sm)
    var(--border-radius-sm)
    0 0; /* Top corners only */
}
```

## Best Practices

1. **Consistency:** Use the same radius for similar components
2. **Hierarchy:** More rounding = softer, friendlier feel
3. **Circles:** Always use `circular` for perfect circles
4. **Pills:** Use `pill` for badges and elongated buttons
5. **Inputs:** Keep subtle with `xs` or `sm`

## Common Patterns

| Component | Token |
|-----------|-------|
| Buttons | `sm` |
| Cards | `sm` or `md` |
| Inputs | `xs` |
| Modals | `md` or `lg` |
| Badges/Tags | `pill` |
| Avatars | `circular` |
| Alerts | `sm` |

## Related Tokens

- [Border Width](../borderWidth/README.md)
- [Shadow](../shadow/README.md)
- [Spacing](../spacing/README.md)
