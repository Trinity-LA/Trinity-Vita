# Gestión de Instancias y Contenido

Trinity Launcher se compone de dos aplicaciones principales que manejan diferentes aspectos de la experiencia de Minecraft Bedrock.

## Trinchete
**Interfaz del Lanzador**

La aplicación principal para gestionar versiones, iniciar el juego y configurar instancias.

### Características de la Barra Superior
*   **Extraer APK:** Selecciona un archivo `.apk`, le asigna un nombre personalizado y lo extrae utilizando `mcpelauncher-extract`.
*   **Importar:** Restaura una versión guardada desde un archivo `.tar.gz`.
*   **Herramientas:** Abre rápidamente la aplicación **Trinito**.

### Características del Panel Derecho
*   **JUGAR:** Inicia la versión seleccionada utilizando `mcpelauncher-client`.
*   **Crear acceso directo:** Genera un archivo `.desktop` para un fácil acceso desde el menú del sistema.
*   **Editar Configuración:** Permite añadir variables de entorno (por ejemplo, `DRI_PRIME=1`) para configuraciones de inicio específicas.
*   **Exportar:** Realiza una copia de seguridad de la versión actual a un archivo `.tar.gz`.
*   **Eliminar:** Elimina permanentemente la versión seleccionada y sus datos.

## Trinito
**Gestor de Contenido**

Una herramienta dedicada para gestionar mods, packs de texturas y mundos sin tocar directamente el sistema de archivos.

### Pestañas de Contenido

| Pestaña | Tipo | Carpeta de Destino |
| :--- | :--- | :--- |
| **Mods** | Archivo | `behavior_packs/` |
| **Texturas** | Archivo | `resource_packs/` |
| **Mundos** | Carpeta | `minecraftWorlds/` |

### Estados
*   **Habilitado:** El archivo mantiene su nombre normal y es cargado por el juego.
*   **Deshabilitado:** El archivo se renombra con la extensión `.disabled` y es ignorado por el juego.
*   **Interactivo:** Utiliza las casillas de verificación para activar o desactivar el contenido al instante.
