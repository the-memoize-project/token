# Font Weight Tokens

3 font weight tokens for creating emphasis and hierarchy.

## Usage

```css
@import "@the-memoize-project/token/fontWeight";

h1 { font-weight: var(--font-weight-bold); }
strong { font-weight: var(--font-weight-medium); }
p { font-weight: var(--font-weight-regular); }
```

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-regular` | `400` | Body text, paragraphs, default text |
| `--font-weight-medium` | `500` | Emphasis, labels, navigation |
| `--font-weight-bold` | `700` | Headings, strong emphasis, CTAs |

## Examples

### Typography Hierarchy
```css
/* Headings - bold weight */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-bold);
}

/* Body text - regular weight */
p, li, td {
  font-weight: var(--font-weight-regular);
}

/* Emphasis - medium weight */
strong, b, .emphasized {
  font-weight: var(--font-weight-medium);
}
```

### Button Variants
```css
.button {
  font-weight: var(--font-weight-medium);
}

.button--primary {
  font-weight: var(--font-weight-bold);
}
```

### Navigation
```css
.nav-link {
  font-weight: var(--font-weight-regular);
}

.nav-link--active {
  font-weight: var(--font-weight-bold);
}
```

## Best Practices

1. **Readability:** Use regular (400) for body text
2. **Hierarchy:** Bolder weights = more importance
3. **Contrast:** Don't use too many weights in one composition
4. **Legibility:** Avoid bold weights on very small text

## Font Support

Ensure your font families support these weights:
- Roboto: ✅ Supports 400, 500, 700
- Roboto Condensed: ✅ Supports 400, 500, 700

## Related Tokens

- [Font Size](../fontSize/README.md)
- [Font Family](../fontFamily/README.md)
- [Line Height](../lineHeight/README.md)
