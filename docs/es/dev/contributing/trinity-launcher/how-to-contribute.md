# Cómo Contribuir

## Flujo de Trabajo de Contribución

### 1. Prepara tu Entorno

```bash
# Clonar el repositorio
git clone https://github.com/Trinity-LA/Trinity-Launcher.git
cd Trinity_Launcher

# Crear una rama
git checkout -b feature/tu-cambio
# o
git checkout -b fix/tu-error
```

### 2. Realiza Cambios

- Sigue el [Estilo de Código](./code-style.md)
- Escribe [Commits Claros](./commit-strategy.md)
- Si usas IA, respeta las reglas definidas a continuación.

### 3. Compila y Prueba Localmente

```bash
# Compilar trinchete
qmake -project -o trinchete.pro
echo "QT += widgets" >> trinchete.pro
qmake trinchete.pro
make

# Compilar trinito
qmake -project -o trinito.pro
echo "QT += widgets" >> trinito.pro
qmake trinito.pro
make

# Ejecutar
./trinchete
./trinito
```

## Política de Uso de IA

> [!WARNING]
> **Regla Importante:** Evita que la IA modifique el código innecesariamente.

**Permitido:**
- ✅ Usar IA para entender el código
- ✅ Usar IA para escribir documentación
- ✅ Usar IA para diseñar pruebas
- ✅ Usar IA para proponer soluciones en issues

**NO Permitido:**
- ❌ IA optimizando código por su cuenta
- ❌ IA refactorizando sin documentación previa
- ❌ IA haciendo cambios para "mejorar" el código

**Razón:** Los cambios no documentados pueden romper cosas que aún no hemos documentado. La estabilidad es más importante que la optimización en este momento.
