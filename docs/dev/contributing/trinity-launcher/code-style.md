# Code Standards

## Identifier Naming

| Element | Style | Example |
|:--------|:------|:--------|
| **Functions/Methods** | `camelCase` | `loadInstalledVersions()`, `launchGame()` |
| **Variables** | `camelCase` | `selectedVersion`, `libPath` |
| **Constants** | `UPPER_SNAKE_CASE` | `MAX_RETRIES`, `DEFAULT_TIMEOUT` |
| **Classes** | `PascalCase` | `LauncherWindow`, `VersionManager` |
| **Folders** | `lowercase` | `src/`, `ui/`, `core/` |
| **Files** | `snake_case` | `launcher_window.cpp`, `version_manager.h` |

## Project Structure

Example of how the code should be organized:

```text
src/
├── core/
│   ├── version_manager.h
│   ├── version_manager.cpp
│   ├── pack_installer.h
│   └── pack_installer.cpp
│
├── ui/
│   ├── windows/
│   │   ├── launcher_window.h
│   │   └── launcher_window.cpp
│   ├── dialogs/
│   │   ├── extract_dialog.h
│   │   └── extract_dialog.cpp
```

## Code Documentation

- Always document **public functions**.
- Use clear comments for complex logic.
- Follow the existing style in files.

**Example:**
```cpp
/**
 * Loads installed versions from the mcpelauncher directory
 * 
 * @return QStringList with the names of found versions
 */
QStringList loadInstalledVersions();
```
