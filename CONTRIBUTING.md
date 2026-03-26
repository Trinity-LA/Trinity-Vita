# Guía de Contribución

Para mantener el orden y la integridad del repositorio, todos los colaboradores deben seguir estas normas estrictamente.

## Restricciones Importantes
* **Solo Markdown:** Únicamente se permite modificar o crear archivos con extensión `.md`.
* **Archivos Protegidos:** Está estrictamente prohibido modificar la carpeta `.vitepress`, archivos de configuración, componentes CSS o cualquier archivo de lógica del sitio.
* **Enfoque:** La colaboración debe centrarse exclusivamente en la documentación.

## Flujo de Trabajo
La documentación se organiza en las carpetas principales: `about/`, `dev/`, `docs/`, `guides/` y `launchers/`.

1. **Traducciones Obligatorias:** Si realizas un cambio, edición o agregas contenido en las carpetas principales, debes realizar la traducción correspondiente en el directorio `es/`. 
   * La estructura de archivos y carpetas en `es/` debe ser idéntica a la del directorio raíz.
2. **Sincronización:** No se aceptarán cambios en la versión principal que no tengan su contraparte actualizada en el directorio de español.

## Cambios Mayores
Se requiere autorización previa del administrador para:
* Agregar nuevas secciones o carpetas.
* Añadir nuevos archivos Markdown.
* Realizar cambios estructurales grandes.
* Cualquier propuesta que involucre componentes o estilos.

**Nota:** Cualquier Pull Request que incluya modificaciones en archivos no autorizados (como la configuración de VitePress o archivos CSS) será rechazado automáticamente.

---

# Guía de Trabajo

Para colaborar en este proyecto, es obligatorio seguir estas normas de configuración y edición para mantener la integridad de la documentación.

## Configuración del Entorno local

1. **Clonar el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```
2. **Preparación:**
   Abre la carpeta en tu editor de código (como VS Code). Asegúrate de tener `npm` instalado desde el gestor de paquetes de tu distribución.
3. **Instalación de dependencias:**
   Ejecuta en la terminal dentro de la carpeta del proyecto:
   ```bash
   npm install
   ```
4. **Previsualización:**
   Para probar que la página funciona y ver tus cambios en tiempo real, ejecuta:
   ```bash
   npm run docs:dev
   ```
