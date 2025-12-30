# Line Height Tokens

7 line height tokens for optimal text readability and vertical rhythm.

## Usage

```css
@import "@the-memoize-project/token/lineHeight";

p {
  line-height: var(--line-height-md);
}

button {
  line-height: var(--line-height-xs);
}
```

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-default` | `100%` | Tight alignment, no extra spacing |
| `--line-height-xs` | `115%` | Buttons, labels, compact UI |
| `--line-height-sm` | `120%` | Short text, small headings |
| `--line-height-md` | `133%` | **Body text, paragraphs** (recommended) |
| `--line-height-lg` | `150%` | Long-form content, articles |
| `--line-height-xl` | `170%` | Dense text, extensive content |
| `--line-height-xxl` | `200%` | Hero text, display text |

## Guidelines by Use Case

### Compact UI Elements
Use **xs** or **sm** for tight spacing:
- Buttons
- Labels
- Tags/badges
- Navigation items
- Compact lists

### Regular Body Text
Use **md** (133%) for optimal readability:
- Paragraphs
- Card content
- Form descriptions
- Standard lists

### Long-Form Content
Use **lg** (150%) or **xl** (170%) for comfortable reading:
- Articles
- Blog posts
- Documentation
- Help text

### Display Text
Use **xxl** (200%) for visual impact:
- Hero headings
- Large titles
- Marketing copy

## Examples

### Typography System
```css
h1, h2, h3 {
  line-height: var(--line-height-sm); /* Tight for impact */
}

p {
  line-height: var(--line-height-md); /* Optimal readability */
}

.article {
  line-height: var(--line-height-lg); /* Comfortable reading */
}
```

### Button
```css
.button {
  line-height: var(--line-height-xs);
  padding: var(--spacing_inset-xs) var(--spacing_inset-sm);
}
```

### Card
```css
.card__title {
  line-height: var(--line-height-sm);
}

.card__content {
  line-height: var(--line-height-md);
}
```

## Best Practices

1. **Body text:** Use 133-150% for comfortable reading
2. **Headings:** Use tighter line-height (100-120%)
3. **Buttons:** Use compact line-height for centered text
4. **Long content:** Increase line-height for easier scanning

## Accessibility

- **Minimum:** 1.5 (150%) for body text (WCAG AA)
- **Ideal:** 1.5-2.0 for users with dyslexia
- **Tight spacing:** Acceptable for large headings only

## Related Tokens

- [Font Size](../fontSize/README.md)
- [Spacing](../spacing/README.md)
- [Font Weight](../fontWeight/README.md)
