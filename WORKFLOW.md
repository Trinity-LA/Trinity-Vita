# Guía de Trabajo

Sigue estos pasos para configurar el entorno de desarrollo local y contribuir correctamente a la documentación.

## Requisitos Previos
Debes contar con `npm` instalado en tu sistema. Si no lo tienes, instálalo utilizando el gestor de paquetes de tu distribución Linux.

## Configuración Inicial
1. **Clonar el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```
2. **Abrir el proyecto:**
   Ingresa a la carpeta del proyecto con tu editor de código preferido (ejemplo: VS Code).
3. **Instalar dependencias:**
   Ejecuta el siguiente comando en la terminal desde la raíz del proyecto para instalar los módulos necesarios:
   ```bash
   npm install
   ```

## Desarrollo y Visualización
Para verificar que los cambios en los archivos Markdown se visualicen correctamente en la página, utiliza el servidor de desarrollo:

```bash
npm run docs:dev
```

Esto generará una vista previa local (usualmente en `localhost:5173`) donde podrás ver los cambios en tiempo real antes de realizar el commit.

## Restricciones Técnicas
* **Prohibición de Antigravity:** No utilices herramientas de automatización como Antigravity para la gestión de la documentación. Su uso puede desorganizar la estructura de directorios y causar conflictos en la jerarquía del sitio.
* **Manejo Manual:** Cualquier organización de archivos o carpetas debe realizarse manualmente siguiendo la estructura establecida en `CONTRIBUTING.md`.
