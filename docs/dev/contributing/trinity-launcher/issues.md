# Reporting Issues & Enhancements

We have some important considerations to keep the project in order.

## Found a Bug?

**First:** Verify that the software works (even if it has the bug).

> [!IMPORTANT]
> **Rule:** If the software works, **DO NOT FIX THE BUG**, just report it.

### Reporting Steps

1. Open an [Issue](https://github.com/Trinity-LA/Trinity-Launcher/issues) with:
   - **Descriptive Title:** e.g., "Bug: trinchete fails to detect Flatpak versions"
   - **Expected Behavior:** Clear description of what should happen
   - **Actual Behavior:** What actually happens
   - **Steps to Reproduce:** Step-by-step guide to trigger the bug
   - **System:** Distro, Qt version, environment (local/Flatpak)

2. **Label:** Mark as `bug` (if available)

3. **Wait for Organization:** The maintainers will decide when and how to fix it

### Example of a Good Issue

```text
Title: Bug: trinito does not copy mod folders in Flatpak

Expected: When selecting a mod folder, it should copy to `behavior_packs/`

Actual: The folder is not copied, no error messages shown

Steps:
1. Run: `flatpak run com.trench.trinity.launcher`
2. Click on "Tools"
3. Go to "Mods" tab
4. Select a folder
5. Observe that nothing happens

System: Ubuntu 22.04, Qt 6.x, Flatpak
```

## Have an Improvement Idea?

> [!IMPORTANT]
> **Rule:** Document the idea, **DO NOT touch the code** until the project is organized.

### Proposal Steps

1. Open a [Discussion](https://github.com/Trinity-LA/Trinity-Launcher/discussions) or [Issue](https://github.com/Trinity-LA/Trinity-Launcher/issues) with the `enhancement` label
2. Describe:
   - What improvement you propose
   - Why it would be useful
   - Expected impact
3. **Wait for Feedback** from maintainers before making changes

**Current Priority:** Organize Project > Optimize Code
