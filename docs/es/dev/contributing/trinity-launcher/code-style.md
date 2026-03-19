# Estándares de Código

## Nomenclatura de Identificadores

| Elemento | Estilo | Ejemplo |
|:--------|:------|:--------|
| **Funciones/Métodos** | `camelCase` | `loadInstalledVersions()`, `launchGame()` |
| **Variables** | `camelCase` | `selectedVersion`, `libPath` |
| **Constantes** | `UPPER_SNAKE_CASE` | `MAX_RETRIES`, `DEFAULT_TIMEOUT` |
| **Clases** | `PascalCase` | `LauncherWindow`, `VersionManager` |
| **Carpetas** | `minúsculas` | `src/`, `ui/`, `core/` |
| **Archivos** | `snake_case` | `launcher_window.cpp`, `version_manager.h` |

## Estructura del Proyecto

Ejemplo de cómo debe estar organizado el código:

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

## Documentación de Código

- Siempre documenta las **funciones públicas**.
- Usa comentarios claros para lógica compleja.
- Sigue el estilo existente en los archivos.

**Ejemplo:**
```cpp
/**
 * Carga las versiones instaladas desde el directorio de mcpelauncher
 * 
 * @return QStringList con los nombres de las versiones encontradas
 */
QStringList loadInstalledVersions();
```
