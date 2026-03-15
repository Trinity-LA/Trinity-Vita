# Compilation & Installation

## Compilation
**Build Script**

The easiest way to compile and install Trinity Launcher is using the provided build script.

```bash
# Give permissions
chmod +x build.sh

# Compile and install
sudo ./build.sh
```

This installs the binaries in `/usr/local/bin` and registers the application icon.

### Run Commands
Once installed, you can launch the applications from the terminal:
```bash
trinchete # Launches the main interface
trinito   # Launches the content manager
```

## MCPElauncher Required
Trinity Launcher relies on the core `mcpelauncher` components: `mcpelauncher-client`, `mcpelauncher-extract`, and `mcpelauncher-webview`.

We recommend using the fork maintained at: **[franckey02/mcpelauncher-patch](https://github.com/franckey02/mcpelauncher-patch)**

### Compilation Commands
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

## Flatpak Packaging
**Build Instructions**

### Requirements
You need to install the KDE runtime and Qt WebEngine base app.

```bash
flatpak install flathub io.qt.qtwebengine.BaseApp//6.9
flatpak install flathub org.kde.Platform//6.9 org.kde.Sdk//6.9
```

### Build Commands
To build the Flatpak bundle:

```bash
# Build the application
flatpak-builder --user --force-clean build-dircom.trench.trinity.launcher.json

# Export to repository
flatpak-builder --repo=repo --force-clean build-dir com.trench.trinity.launcher.json

# Create bundle
flatpak build-bundle repo trinity.flatpak com.trench.trinity.launcher

# Install bundle
flatpak install ./trinity.flatpak
```
