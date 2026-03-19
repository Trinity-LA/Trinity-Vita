# Pull Requests

## Antes de Abrir un PR

- [ ] ✅ Compila sin errores
- [ ] ✅ Probado localmente
- [ ] ✅ Los commits son claros y explícitos
- [ ] ✅ Documentación actualizada si es necesario

## En el Pull Request

Al abrir tu PR, asegúrate de incluir:

1. **Título:** Describe brevemente el cambio.
2. **Descripción:** Explica qué cambió y por qué.
3. **Referencias:** Enlaza issues relacionados con `Fixes #123`.

### Ejemplo de Plantilla

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
