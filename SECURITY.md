# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of @the-memoize-project/token seriously. If you discover a security vulnerability, please follow the responsible disclosure process:

### How to Report

**Do NOT** open a public issue. Instead:

1. Email security concerns to: [security@the-memoize-project.org](mailto:security@the-memoize-project.org)
2. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Response Timeline

- **48 hours**: Acknowledgment of your report
- **5 days**: Regular updates on our progress
- **90 days**: Coordinated disclosure after fix is available

### Security Considerations

#### CSS Injection

While this package provides only CSS custom properties, be aware of CSS injection risks when:
- Dynamically generating CSS from user input
- Allowing users to override token values
- Using tokens in `style` attributes with user-controlled data

**Safe usage:**
```css
/* ✅ Safe - static token reference */
.element {
  color: var(--color-primary);
}
```

**Unsafe usage:**
```javascript
// ❌ Unsafe - user input in CSS
element.style.color = `var(--color-${userInput})`;

// ✅ Safe - validate against whitelist
const allowedColors = ['primary', 'success', 'danger'];
if (allowedColors.includes(userInput)) {
  element.style.color = `var(--color-${userInput})`;
}
```

#### light-dark() Function

The CSS `light-dark()` function is relatively new. Ensure your Content Security Policy (CSP) allows its usage if you have strict CSS rules.

#### Third-Party Integration

When integrating with build tools or frameworks:
- Verify integrity of node_modules
- Use package lock files (package-lock.json, bun.lockb)
- Regularly update dependencies
- Scan for vulnerabilities with `npm audit` or `bun audit`

## Security Best Practices

### For Package Users

1. **Pin versions**: Use exact versions in package.json
2. **Review changes**: Check CHANGELOG.md before updating
3. **Validate imports**: Ensure you're importing from official package
4. **CSP headers**: Set appropriate Content-Security-Policy headers

### For Contributors

1. **No sensitive data**: Never commit API keys, tokens, or credentials
2. **Sanitize inputs**: If adding build scripts, validate all inputs
3. **Review dependencies**: Vet any new dev dependencies
4. **Sign commits**: Use GPG signatures for commits

## Known Limitations

1. **Browser compatibility**: `light-dark()` function requires modern browsers (see README for support matrix)
2. **CSS specificity**: Token values can be overridden by more specific CSS rules
3. **No runtime validation**: Values are not validated at runtime

## Safe Harbor

We support safe harbor for security researchers who:
- Make a good faith effort to avoid privacy violations and data destruction
- Report vulnerabilities promptly and privately
- Give us reasonable time to fix issues before public disclosure

Researchers acting in good faith will not face legal action for their security research.

## Attribution

We believe in giving credit where it's due. Security researchers who report valid vulnerabilities will be:
- Publicly acknowledged (unless anonymity is requested)
- Listed in CHANGELOG.md
- Credited in release notes

## Questions?

For non-security questions, use:
- [GitHub Issues](https://github.com/the-memoize-project/token/issues)
- [GitHub Discussions](https://github.com/the-memoize-project/token/discussions)
