# Commit Strategy

Even though we don't work professionally, documentation is key to finding bugs.

## Explicit Commits

**Rule:** Commits must be **clear and specific**.

```bash
# ✅ GOOD:
git commit -m "feat: add lib validation in trinchete"
git commit -m "fix: correct data path in Flatpak"
git commit -m "docs: update build instructions"

# ❌ BAD:
git commit -m "changes"
git commit -m "updates"
git commit -m "fixed"
```

## Conventional Commits

We recommend following the format:
```text
<type>: <short description>

<optional long description>
```

**Valid Types:**
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation
- `refactor:` — Code change without new features
- `test:` — Tests
- `chore:` — Maintenance tasks
