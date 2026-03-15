# Registros y Reportes

Al encontrar un problema con el Trinity Launcher o cualquiera de sus componentes, proporcionar un reporte detallado con registros es crucial para que nuestro equipo pueda ayudarte efectivamente.

## 1. Obteniendo Registros del Lanzador

Antes de hacer un reporte, necesitas capturar los registros que contienen detalles técnicos sobre el error.

### Cómo exportar registros vía Terminal

Actualmente, la forma más confiable de obtener registros es ejecutando la aplicación desde la terminal. Esto captura la salida en tiempo real, lo cual es crucial para la depuración.

**Para usuarios de Flatpak:**
```bash
flatpak run "Package.ID"
```

**Para usuarios de Nativo / AppImage:**
```bash
# AppImage
./TrinityLauncher.AppImage

# Nativo
trinity-launcher
```

Copia la salida de la terminal y guárdala en un archivo de texto llamado `trinity-log.txt`.

## 2. Reportando el Problema

Una vez que tengas tus registros, sigue estos pasos para reportar el problema correctamente.

1.  Únete a nuestro **Servidor de Discord**.
2.  Ve al canal **#help-forum**.
3.  **Crea una Nueva Publicación** para tu problema.

## 3. Qué Incluir en tu Reporte

Tu publicación debe incluir los detalles siguientes para ser considerada. **Por favor explica claramente:**

*   **Qué pasó:** Una descripción clara del error.
*   **Cómo pasó:** Instrucciones paso a paso para reproducir el problema.
*   **Detalles del Sistema:**
    *   SO y Versión (ej., Ubuntu 22.04, Arch Linux).
    *   Versión del Lanzador.
    *   Componentes/Hardware (CPU, GPU, RAM) - *Reporta solo info relevante.*
*   **Acciones Tomadas:** ¿Qué has intentado hasta ahora para arreglarlo?

## 4. Pautas

::: warning IMPORTANTE
**Sigue los mensajes fijados en el canal #help-forum.**
:::

No seguir las pautas o proporcionar información incompleta puede resultar en que tu solicitud de soporte sea ignorada o cerrada.

*   Sé paciente y respetuoso.
*   No envíes DM a los miembros del equipo para soporte.
*   Usa bloques de código para fragmentos cortos de registros o sube el archivo para registros largos.
