# Trinity Launcher
**Modular graphical environment for Minecraft Bedrock on Linux**

![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
![Qt](https://img.shields.io/badge/Qt-6.6+-success.svg)
![C++](https://img.shields.io/badge/C++-17-blue.svg)
![Flatpak](https://img.shields.io/badge/Packaging-Flatpak-flathub.svg)

[Visit official website](https://trinity.example.com)

Trinity Launcher is a modern and modular graphical environment to run and manage **Minecraft: Bedrock Edition** on Linux. Designed to work both on the system and inside Flatpak, it uses **Qt6** and follows a clean architecture based on separate libraries (core and ui).

## Components Overview

### Trinchete
**Main launcher:** advanced version management, export/import, shortcuts.

### Trinito
**Content manager:** installation, activation/deactivation, and deletion of mods, textures, packs, and worlds.

## Technologies
**Development Stack**

| Component | Description | Version |
| :--- | :--- | :--- |
| **Language** | Standard C++ | C++17 |
| **UI Framework** | Qt Framework | Qt 6.6+ |
| **Build System** | CMake | 3.17+ |
| **Compiler** | Clang | 16+ |
| **Packaging** | Flatpak | — |
| **Platform** | Linux (x86_64, ARM64) | glibc |

## Testing & Data
**Data paths**

| Environment | Path |
| :--- | :--- |
| **Flatpak Path** | `~/.var/app/com.trench.trinity.launcher/data/mcpelauncher/` |
| **Local Path** | `~/.local/share/mcpelauncher/` |

## License
Trinity Launcher is distributed under the **BSD 3-Clause License**.

```text
Copyright (c) 2024, Trinity Launcher Authors
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
```
