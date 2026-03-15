# Pull Requests

## Before Opening a PR

- [ ] ✅ Compiles without errors
- [ ] ✅ Tested locally
- [ ] ✅ Commits are clear and explicit
- [ ] ✅ Documentation updated if necessary

## In the Pull Request

When opening your PR, make sure to include:

1. **Title:** Briefly describe the change.
2. **Description:** Explain what changed and why.
3. **References:** Link related issues with `Fixes #123`.

### Template Example

```markdown
# Added: Integrity validation in trinchete

## Description
Added validation to ensure `libminecraftpe.so` exists before launching the game.
This prevents crashes when the version is incomplete.

## Changes
- Added `validateGameVersion()` method in `launcher_window.cpp`
- Updated launch flow
- Added clear error message for the user

## Testing
- Tested locally on Ubuntu 22.04
- Validated with complete and incomplete versions

Fixes #42
```
