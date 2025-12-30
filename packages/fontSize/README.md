# Font Size Tokens

11 font size tokens following a modular scale for visual hierarchy.

## Usage

```css
@import "@the-memoize-project/token/fontSize";

h1 { font-size: var(--font-size-xxl); }
p { font-size: var(--font-size-xs); }
.caption { font-size: var(--font-size-xxxs); }
```

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--font-size-xxxs` | `12px` | Labels, footnotes, captions |
| `--font-size-xxs` | `14px` | Secondary text, breadcrumbs, metadata |
| `--font-size-xs` | `16px` | **Body text, paragraphs** |
| `--font-size-sm` | `20px` | Short descriptions, button text |
| `--font-size-md` | `24px` | Subtitles, card titles |
| `--font-size-lg` | `32px` | Section headings (H3) |
| `--font-size-xl` | `40px` | Page titles (H2) |
| `--font-size-xxl` | `48px` | Hero titles (H1) |
| `--font-size-xxxl` | `64px` | Headlines, slogans |
| `--font-size-display` | `80px` | Landing pages, campaigns |
| `--font-size-giant` | `96px` | Special events, presentations |

## Scale Ratio

The font sizes follow a **~1.25x modular scale** for harmonious typography.

## Examples

### Typography Hierarchy
```css
h1 { font-size: var(--font-size-xxl); }
h2 { font-size: var(--font-size-xl); }
h3 { font-size: var(--font-size-lg); }
h4 { font-size: var(--font-size-md); }
h5 { font-size: var(--font-size-sm); }
h6 { font-size: var(--font-size-xs); }
p { font-size: var(--font-size-xs); }
small { font-size: var(--font-size-xxs); }
```

### Button Sizes
```css
.button--sm { font-size: var(--font-size-xxxs); }
.button--md { font-size: var(--font-size-xxs); }
.button--lg { font-size: var(--font-size-xs); }
```

### Hero Section
```css
.hero__title {
  font-size: var(--font-size-giant);
}

@media (max-width: 768px) {
  .hero__title {
    font-size: var(--font-size-xxl);
  }
}
```

## Best Practices

1. **Body text:** Use `--font-size-xs` (16px) for optimal readability
2. **Responsive:** Reduce sizes on mobile
3. **Accessibility:** Never go below 12px for body text
4. **Hierarchy:** Use consistent scale for visual rhythm

## Related Tokens

- [Font Weight](../fontWeight/README.md)
- [Line Height](../lineHeight/README.md)
- [Font Family](../fontFamily/README.md)
