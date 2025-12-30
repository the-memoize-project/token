# Font Family Tokens

2 font family tokens for typography consistency.

## Usage

```css
@import "@the-memoize-project/token/fontFamily";

body {
  font-family: var(--font-family-base);
}

h1, h2, h3 {
  font-family: var(--font-family-highlight);
}
```

## Tokens

### Base Font
```css
--font-family-base: "Roboto", sans-serif;
```

**Usage:**
- Body text
- Paragraphs
- UI labels
- Form inputs
- Navigation items
- Any regular text content

**Characteristics:**
- High readability
- Neutral appearance
- Works well at all sizes
- Optimized for screen reading

### Highlight Font
```css
--font-family-highlight: "Roboto Condensed", sans-serif;
```

**Usage:**
- Headings (H1-H6)
- Titles
- Callouts
- Attention-grabbing elements
- Hero text
- Section headers

**Characteristics:**
- More distinctive
- Condensed for impact
- Great for large sizes
- Creates visual hierarchy

## Examples

### Typography Hierarchy
```css
/* Headings - use highlight font */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-highlight);
}

/* Body text - use base font */
body, p, span, div {
  font-family: var(--font-family-base);
}

/* UI elements - use base font */
button, input, select, textarea {
  font-family: var(--font-family-base);
}
```

### Card Component
```css
.card__title {
  font-family: var(--font-family-highlight);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.card__content {
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-md);
}
```

### Hero Section
```css
.hero__title {
  font-family: var(--font-family-highlight);
  font-size: var(--font-size-giant);
  font-weight: var(--font-weight-bold);
}

.hero__description {
  font-family: var(--font-family-base);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}
```

## Loading Fonts

Ensure fonts are loaded in your HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

Or using CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
```

## Font Weights Available

Both font families support these weights (via `--font-weight-*` tokens):
- **Regular (400):** `--font-weight-regular`
- **Medium (500):** `--font-weight-medium`
- **Bold (700):** `--font-weight-bold`

## Customization

To use different fonts, override the tokens:

```css
:root {
  --font-family-base: "Inter", system-ui, sans-serif;
  --font-family-highlight: "Poppins", sans-serif;
}
```

## Fallback Fonts

Always include fallback fonts:

```css
--font-family-base: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## Performance Tips

1. **Preload critical fonts:**
```html
<link rel="preload" href="/fonts/roboto.woff2" as="font" type="font/woff2" crossorigin>
```

2. **Use font-display:**
```css
@font-face {
  font-family: 'Roboto';
  font-display: swap; /* Show fallback while loading */
}
```

3. **Subset fonts:** Only load character sets you need

## Related Tokens

- [Font Size](../fontSize/README.md) - For sizing typography
- [Font Weight](../fontWeight/README.md) - For weight variations
- [Line Height](../lineHeight/README.md) - For vertical spacing
