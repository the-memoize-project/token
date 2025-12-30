# Examples

Real-world usage examples for @the-memoize-project/token.

## Table of Contents

- [Basic Usage](#basic-usage)
- [Component Patterns](#component-patterns)
- [Theme Customization](#theme-customization)
- [Light/Dark Mode](#lightdark-mode)
- [Integration Examples](#integration-examples)

## Basic Usage

### Import All Tokens

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@the-memoize-project/token/packages/tokens/index.css">
  <style>
    body {
      font-family: var(--font-family-base);
      color: var(--color-master-dark);
      background: var(--color-master-lightest);
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

### Import Specific Categories

```css
@import "@the-memoize-project/token/color";
@import "@the-memoize-project/token/spacing";
@import "@the-memoize-project/token/fontSize";

.container {
  padding: var(--spacing_inset-lg);
  background: var(--color-master-lightest);
}

.title {
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}
```

## Component Patterns

### Button Component

```css
.button {
  /* Layout */
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-nano);
  padding: var(--spacing_inset-xs) var(--spacing_inset-sm);

  /* Typography */
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xs);

  /* Colors */
  color: var(--color-pure-white);
  background: var(--color-primary);

  /* Borders */
  border: var(--border-width-thin) solid transparent;
  border-radius: var(--border-radius-sm);

  /* Effects */
  box-shadow: var(--shadow-level-1) var(--color-master-darkest);
  transition: all 0.2s ease;
}

.button:hover {
  background: var(--color-primary-dark);
  box-shadow: var(--shadow-level-2) var(--color-master-darkest);
}

.button--secondary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.button--pill {
  border-radius: var(--border-radius-pill);
}
```

### Card Component

```css
.card {
  /* Layout */
  padding: var(--spacing_inset-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  /* Colors */
  background: var(--color-master-lightest);

  /* Borders */
  border: var(--border-width-hairline) solid var(--color-master-light);
  border-radius: var(--border-radius-md);

  /* Effects */
  box-shadow: var(--shadow-level-2) var(--color-master-darkest);
}

.card__title {
  font-family: var(--font-family-highlight);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-master-darker);
  line-height: var(--line-height-sm);
}

.card__content {
  font-size: var(--font-size-xs);
  color: var(--color-master-dark);
  line-height: var(--line-height-md);
}
```

### Alert Component

```css
.alert {
  padding: var(--spacing_inset-md);
  border-radius: var(--border-radius-sm);
  border-width: var(--border-width-thin);
  border-style: solid;
}

.alert--success {
  background: var(--color-success-lighter);
  color: var(--color-success-darker);
  border-color: var(--color-success);
}

.alert--warning {
  background: var(--color-warning-lighter);
  color: var(--color-warning-darker);
  border-color: var(--color-warning);
}

.alert--danger {
  background: var(--color-danger-lighter);
  color: var(--color-danger-darker);
  border-color: var(--color-danger);
}

.alert--info {
  background: var(--color-info-lighter);
  color: var(--color-info-darker);
  border-color: var(--color-info);
}
```

### Form Input

```css
.input {
  /* Layout */
  padding: var(--spacing_inset-xs);
  width: 100%;

  /* Typography */
  font-family: var(--font-family-base);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-md);

  /* Colors */
  color: var(--color-master-darkest);
  background: var(--color-pure-white);

  /* Borders */
  border: var(--border-width-thin) solid var(--color-master-light);
  border-radius: var(--border-radius-xs);

  /* Effects */
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-lighter);
}

.input:disabled {
  opacity: var(--opacity-level-medium);
  cursor: not-allowed;
  background: var(--color-master-lighter);
}

.input::placeholder {
  color: var(--color-master);
  opacity: var(--opacity-level-intense);
}
```

### Modal

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: var(--color-master-darkest);
  opacity: var(--opacity-level-semiopaque);
  z-index: 1000;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  /* Layout */
  width: min(90vw, 600px);
  max-height: 80vh;
  padding: var(--spacing_inset-huge);

  /* Colors */
  background: var(--color-master-lightest);

  /* Borders */
  border-radius: var(--border-radius-lg);

  /* Effects */
  box-shadow: var(--shadow-level-4) var(--color-master-darkest);
}

.modal__header {
  font-family: var(--font-family-highlight);
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
  color: var(--color-master-darkest);
  margin-bottom: var(--spacing-lg);
}
```

## Theme Customization

### Override Default Tokens

```css
:root {
  /* Override primary color */
  --color-primary: light-dark(#ff6b6b, #ff8787);
  --color-primary-darker: light-dark(#c92a2a, #ff6b6b);
  --color-primary-dark: light-dark(#e03131, #ff8787);
  --color-primary-light: light-dark(#ff8787, #ffc9c9);
  --color-primary-lighter: light-dark(#ffe3e3, #c92a2a);

  /* Override font family */
  --font-family-base: "Inter", sans-serif;
  --font-family-highlight: "Inter", sans-serif;
}
```

### Scoped Theme

```css
.theme-compact {
  --spacing-xs: 16px;
  --spacing-sm: 24px;
  --spacing-md: 32px;
  --font-size-xs: 14px;
  --font-size-sm: 16px;
  --font-size-md: 20px;
}
```

## Light/Dark Mode

### Enable Color Scheme

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      color-scheme: light dark;
    }
  </style>
</head>
</html>
```

### Force Specific Mode

```css
/* Force dark mode */
:root {
  color-scheme: only dark;
}

/* Force light mode */
:root {
  color-scheme: only light;
}
```

### Manual Toggle

```javascript
// Toggle color scheme
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const root = document.documentElement;
  const current = root.style.colorScheme;
  root.style.colorScheme = current === 'dark' ? 'light' : 'dark';
});
```

## Integration Examples

### With @the-memoize-project/std

```javascript
import { define, paint } from "@the-memoize-project/std/directive";
import { html, css } from "@the-memoize-project/std/dom";
import "@the-memoize-project/token/tokens";

const styles = css`
  :host {
    display: block;
    padding: var(--spacing_inset-md);
    background: var(--color-master-lightest);
    border-radius: var(--border-radius-md);
  }

  .title {
    font-family: var(--font-family-highlight);
    font-size: var(--font-size-lg);
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }
`;

@define("my-component")
@paint(template, styles)
class MyComponent extends HTMLElement {}
```

### With React

```jsx
import '@the-memoize-project/token/tokens';

function Button({ children, variant = 'primary' }) {
  return (
    <button style={{
      padding: 'var(--spacing_inset-sm)',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 'var(--font-weight-medium)',
      color: 'var(--color-pure-white)',
      background: `var(--color-${variant})`,
      borderRadius: 'var(--border-radius-sm)',
      border: 'none',
    }}>
      {children}
    </button>
  );
}
```

### With Vue

```vue
<template>
  <div class="card">
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__content">{{ content }}</p>
  </div>
</template>

<style scoped>
@import "@the-memoize-project/token/tokens";

.card {
  padding: var(--spacing_inset-lg);
  background: var(--color-master-lightest);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-level-2) var(--color-master-darkest);
}

.card__title {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
}

.card__content {
  color: var(--color-master-dark);
  line-height: var(--line-height-md);
}
</style>
```

### With Svelte

```svelte
<script>
  import '@the-memoize-project/token/tokens';
  export let variant = 'primary';
</script>

<button class="button button--{variant}">
  <slot />
</button>

<style>
  .button {
    padding: var(--spacing_inset-sm);
    font-size: var(--font-size-xs);
    border-radius: var(--border-radius-sm);
    border: var(--border-width-thin) solid transparent;
  }

  .button--primary {
    background: var(--color-primary);
    color: var(--color-pure-white);
  }

  .button--secondary {
    background: transparent;
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
</style>
```

## Layout Patterns

### Grid System

```css
.grid {
  display: grid;
  gap: var(--spacing-lg);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.grid--compact {
  gap: var(--spacing-sm);
}

.grid--spacious {
  gap: var(--spacing-xl);
}
```

### Stack Layout

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.stack--tight {
  gap: var(--spacing-xs);
}

.stack--loose {
  gap: var(--spacing-lg);
}
```

---

For more examples, see the [ui package](https://github.com/the-memoize-project/ui) which uses these tokens extensively.
