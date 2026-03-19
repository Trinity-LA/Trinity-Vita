# Compilación e Instalación

## Compilación
**Script de Construcción**

La forma más sencilla de compilar e instalar Trinity Launcher es utilizando el script de compilación proporcionado.

```bash
# Dar permisos
chmod +x build.sh

# Compilar e instalar
sudo ./build.sh
```

Esto instala los binarios en `/usr/local/bin` y registra el icono de la aplicación.

### Comandos de Ejecución
Una vez instalado, puedes iniciar las aplicaciones desde la terminal:
```bash
trinchete # Inicia la interfaz principal
trinito   # Inicia el gestor de contenido
```

## Requisitos de MCPElauncher
Trinity Launcher se basa en los componentes principales de `mcpelauncher`: `mcpelauncher-client`, `mcpelauncher-extract` y `mcpelauncher-webview`.

Recomendamos usar el fork mantenido en: **[franckey02/mcpelauncher-patch](https://github.com/franckey02/mcpelauncher-patch)**

### Comandos de Compilación
```bash
git clone https://github.com/franckey02/mcpelauncher-patch.git
cd mcpelauncher-patch
git checkout qt6
git submodule update --init --recursive
mkdir -p build && cd build

CC=clang CXX=clang++ cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_POLICY_DEFAULT_CMP0074=NEW \
  -DCMAKE_C_COMPILER=clang \
  -DCMAKE_CXX_COMPILER=clang++ \
  -DCMAKE_C_FLAGS="-march=x86-64 -mtune=generic -msse4.1 -msse4.2 -mpopcnt" \
  -DCMAKE_CXX_FLAGS="-march=x86-64 -mtune=generic -msse4.1 -msse4.2 -mpopcnt" \
  -Wno-dev

make -j$(getconf _NPROCESSORS_ONLN)
sudo make install
```

## Empaquetado Flatpak
**Instrucciones de Construcción**

### Requisitos
Necesitas instalar el runtime de KDE y la aplicación base de Qt WebEngine.

```bash
flatpak install flathub io.qt.qtwebengine.BaseApp//6.10
flatpak install flathub org.kde.Platform//6.10 org.kde.Sdk//6.10
```

### Comandos de Construcción
Para construir el paquete Flatpak:

```bash
# Construir la aplicación
flatpak-builder --user --force-clean build-dircom.trench.trinity.launcher.json

# Exportar al repositorio
flatpak-builder --repo=repo --force-clean build-dir com.trench.trinity.launcher.json

# Crear el paquete (bundle)
flatpak build-bundle repo trinity.flatpak com.trench.trinity.launcher

# Instalar el paquete
flatpak install ./trinity.flatpak
```
