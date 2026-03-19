# Reporte de Errores y Mejoras

Tenemos algunas consideraciones importantes para mantener el proyecto en orden.

## ¿Encontraste un Error?

**Primero:** Verifica que el software funcione (incluso si tiene el error).

> [!IMPORTANT]
> **Regla:** Si el software funciona, **NO SOLUCIONES EL ERROR**, solo repórtalo.

### Pasos para Reportar

1. Abre un [Issue](https://github.com/Trinity-LA/Trinity-Launcher/issues) con:
   - **Título Descriptivo:** ej., "Bug: trinchete falla al detectar versiones Flatpak"
   - **Comportamiento Esperado:** Descripción clara de lo que debería suceder
   - **Comportamiento Actual:** Lo que realmente sucede
   - **Pasos para Reproducir:** Guía paso a paso para provocar el error
   - **Sistema:** Distribución, versión de Qt, entorno (local/Flatpak)

2. **Etiqueta:** Marca como `bug` (si está disponible)

3. **Espera a la Organización:** Los mantenedores decidirán cuándo y cómo solucionarlo

### Ejemplo de un Buen Issue

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

## ¿Tienes una Idea de Mejora?

> [!IMPORTANT]
> **Regla:** Documenta la idea, **NO toques el código** hasta que el proyecto esté organizado.

### Pasos para Propuestas

1. Abre una [Discusión](https://github.com/Trinity-LA/Trinity-Launcher/discussions) o [Issue](https://github.com/Trinity-LA/Trinity-Launcher/issues) con la etiqueta `enhancement`
2. Describe:
   - Qué mejora propones
   - Por qué sería útil
   - Impacto esperado
3. **Espera Comentarios** de los mantenedores antes de hacer cambios

**Prioridad Actual:** Organizar Proyecto > Optimizar Código
