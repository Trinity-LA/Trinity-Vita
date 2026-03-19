# Estrategia de Commits

A pesar de no trabajar profesionalmente, la documentación es clave para encontrar errores resolutivos.

## Commits Explícitos

**Regla:** Los commits deben ser **claros y específicos**.

```bash
# ✅ BIEN:
git commit -m "feat: add lib validation in trinchete"
git commit -m "fix: correct data path in Flatpak"
git commit -m "docs: update build instructions"

# ❌ MAL:
git commit -m "changes"
git commit -m "updates"
git commit -m "fixed"
```

## Commits Convencionales

Recomendamos seguir el formato:
```text
<type>: <short description>

<optional long description>
```

**Tipos Válidos:**
- `feat:` — Nueva funcionalidad
- `fix:` — Corrección de error
- `docs:` — Documentación
- `refactor:` — Cambio de código sin añadir nuevas funciones
- `test:` — Pruebas
- `chore:` — Tareas de mantenimiento
