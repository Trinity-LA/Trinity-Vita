# Instalación de Trinity Launcher
**Guía completa para sistemas Linux**

Trinity Launcher es un proyecto impulsado por la comunidad, distribuido principalmente como un paquete **Flatpak** para garantizar la máxima compatibilidad y seguridad en el ecosistema Linux.

::: tip Antes de empezar
Asegúrate de tener **Flatpak** instalado en tu sistema. Esto garantiza que el lanzador y sus dependencias (como los motores de Minecraft Bedrock mantenidos por la comunidad) se ejecuten en un entorno estable y aislado.

Si aún no lo tienes, visita la guía de configuración oficial: [Ir a Flatpak.org](https://flatpak.org/setup/)
:::

## Instalar Trinity Launcher
Elige el método que mejor se adapte a tu flujo de trabajo.

### Método A: Desde el repositorio Testing-Beta (RECOMENDADO)
Esta es la forma preferida para los miembros de la comunidad que desean las funciones más recientes y actualizaciones automáticas directamente desde nuestro ciclo de desarrollo.

**Ejecuta estos comandos en orden en tu terminal:**
0. Elimina el repositorio de Trinity (si tenias la antigua version):
    ```bash
    flatpak remote-delete trinity
    ```

1. **Añade el repositorio de Trinity:**
    ```bash
    flatpak remote-add trinity https://github.com/Trinity-LA/Trinity-Launcher/releases/download/flatpak/com.trench.trinity.launcher.flatpakrepo
    ```

2. **Instala el runtime de KDE (Qt6):**
    ```bash
    flatpak install flathub org.kde.Platform//6.10
    ```

3. **Instala la base de Qt WebEngine:**
    ```bash
    flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
    ```

4. **Instala Trinity Launcher:**
    ```bash
    flatpak install com.trench.trinity.launcher
    ```

> **Ventajas:** Acceso directo a las últimas versiones beta y actualizaciones automáticas en segundo plano.

### Método B: Desde la tienda de software

Si prefieres una interfaz gráfica:

1. Añade primero el repositorio:
    ```bash
    flatpak remote-add --if-not-exists trinity https://huggingface.co/datasets/ccoff...
    ```

2. Busca **"Trinity Launcher"** en tu tienda de software (GNOME Software, Discover).
    > *Nota: Puede que necesites reiniciar la tienda después de añadir el repositorio.*

### Método C: AppImage (Beta - Portable)

Ideal para usuarios que prefieren la gestión manual sin gestores de paquetes.

1. **Descargar:**  
   <MinecraftButton link="https://github.com/Trinity-Vita/Trinity-Launcher/releases/latest" />

2. **Instalar Gear Level:** Busca "Gear Level" en tu tienda de aplicaciones e instálalo.
3. **Abrir con Gear Level:** Haz clic derecho en el archivo `.AppImage` -> Abrir con -> **Gear Level**.
4. **Desbloquear e Integrar:** Haz clic en **"Unlock"** (Desbloquear) para hacerlo ejecutable y **"Add to apps menu"** (Añadir al menú de aplicaciones) para facilitar el acceso.

---

## Inicio de sesión remoto (Solo AppImage)

::: warning Local vs Remoto
Este paso es **solo necesario** para la versión **AppImage** para habilitar la autenticación con la cuenta de Microsoft.
:::

### Paso 1: Habilitar en Configuración
1. Abre Trinity y ve a **Settings** (Configuración).
2. Navega a **Account Settings** (Configuración de cuenta) y activa **Remote Login** (Inicio de sesión remoto).
3. **Reinicia** el juego por completo.

### Paso 2: Autenticación en el navegador
1. Ve a [microsoft.com/link](https://microsoft.com/link).
2. Ingresa el **código** que se muestra en el juego.
3. Completa el inicio de sesión en tu navegador.
4. Cierra el diálogo en el juego.

---

## Ejecutar Trinity Launcher (Flatpak)

- **Desde el menú:** Busca "Trinity Launcher" en tu panel de aplicaciones.
- **Desde la terminal:**
    ```bash
    flatpak run com.trench.trinity.launcher
    ```

<CommunityCard />
