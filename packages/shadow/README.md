# Shadow Tokens

4 shadow elevation levels for depth and hierarchy.

## Usage

```css
@import "@the-memoize-project/token/shadow";

.card {
  box-shadow: var(--shadow-level-2) var(--color-master-darkest);
}

.modal {
  box-shadow: var(--shadow-level-4) var(--color-master-darkest);
}
```

## Tokens

| Token | Value | Elevation | Usage |
|-------|-------|-----------|-------|
| `--shadow-level-1` | `0 4px 8px` | Low | Cards, buttons, slight elevation |
| `--shadow-level-2` | `0 8px 24px` | Medium | Dropdowns, tooltips, floating elements |
| `--shadow-level-3` | `0 16px 32px` | High | Modals, sidebars, prominent elements |
| `--shadow-level-4` | `0 16px 48px` | Maximum | Overlays, maximum hierarchy |

## Important: Color Required

Shadow tokens provide **offset and blur** only. Always add a color with alpha for best results:

```css
/* ✅ Correct - with color */
box-shadow: var(--shadow-level-2) var(--color-master-darkest);

/* ✅ Even better - with alpha for subtlety */
box-shadow: var(--shadow-level-2) rgba(0, 0, 0, 0.15);

/* ❌ Incorrect - incomplete */
box-shadow: var(--shadow-level-2);
```

## Examples

### Card Elevation
```css
.card {
  box-shadow: var(--shadow-level-1) rgba(0, 0, 0, 0.1);
}

.card:hover {
  box-shadow: var(--shadow-level-2) rgba(0, 0, 0, 0.15);
}
```

### Dropdown Menu
```css
.dropdown {
  box-shadow: var(--shadow-level-2) rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius-sm);
}
```

### Modal
```css
.modal {
  box-shadow: var(--shadow-level-4) rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius-lg);
}
```

### Button States
```css
.button {
  box-shadow: var(--shadow-level-1) rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
}

.button:hover {
  box-shadow: var(--shadow-level-2) rgba(0, 0, 0, 0.15);
}

.button:active {
  box-shadow: none; /* Pressed = no shadow */
}
```

### Tooltip
```css
.tooltip {
  box-shadow: var(--shadow-level-2) rgba(0, 0, 0, 0.2);
}
```

## Light/Dark Mode Shadows

Adjust shadow color for theme:

```css
.card {
  box-shadow: var(--shadow-level-2)
    light-dark(
      rgba(0, 0, 0, 0.1),      /* Light mode: dark shadow */
      rgba(255, 255, 255, 0.1) /* Dark mode: light shadow */
    );
}
```

Or use existing color tokens:

```css
.card {
  box-shadow: var(--shadow-level-2) var(--color-master-darkest);
}
```

## Elevation Guidelines

### Level 1 (Low Elevation)
- Static cards
- Buttons in default state
- Subtle depth
- Close to page surface

### Level 2 (Medium Elevation)
- Interactive cards (hover)
- Dropdown menus
- Tooltips
- Floating above content

### Level 3 (High Elevation)
- Modals
- Dialogs
- Side panels
- Clear separation from page

### Level 4 (Maximum Elevation)
- Critical modals
- Important overlays
- Maximum hierarchy
- Demands attention

## Best Practices

1. **Start subtle:** Use level 1 by default
2. **Increase on interaction:** Elevate on hover/focus
3. **Match hierarchy:** Higher priority = higher shadow
4. **Use alpha:** Shadows look better with transparency
5. **Animate:** Smooth transitions between shadow levels

## Common Patterns

| Component | Level |
|-----------|-------|
| Card | 1 |
| Card (hover) | 2 |
| Dropdown | 2 |
| Tooltip | 2 |
| Modal | 3 or 4 |
| Sidebar | 3 |
| Button | 1 |
| FAB | 2 or 3 |

## Performance

Shadows can impact performance. Consider:

```css
/* Hardware accelerate */
.card {
  transform: translateZ(0);
  box-shadow: var(--shadow-level-2) rgba(0, 0, 0, 0.1);
}
```

## Related Tokens

- [Opacity](../opacity/README.md) - For shadow transparency
- [Color](../color/README.md) - For shadow colors
- [Border Radius](../borderRadius/README.md) - Shadows pair well with rounded corners
