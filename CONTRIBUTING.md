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
