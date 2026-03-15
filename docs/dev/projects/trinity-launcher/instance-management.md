# Instance & Content Management

Trinity Launcher is composed of two main applications that handle different aspects of the Minecraft Bedrock experience.

## Trinchete
**Launcher Interface**

The main application for managing versions, launching the game, and configuring instances.

### Top Bar Features
*   **Extract APK:** Selects an `.apk` file, assigns a custom name, and extracts it using `mcpelauncher-extract`.
*   **Import:** Restores a saved version from a `.tar.gz` archive.
*   **Tools:** Quickly opens the **Trinito** application.

### Right Panel Features
*   **PLAY:** Launches the selected version using `mcpelauncher-client`.
*   **Create Shortcut:** Generates a `.desktop` file for easy access from the system menu.
*   **Edit Config:** Allows adding environment variables (e.g., `DRI_PRIME=1`) for specific launch configurations.
*   **Export:** Backs up the current version to a `.tar.gz` file.
*   **Delete:** Permanently removes the selected version and its data.

## Trinito
**Content Manager**

A dedicated tool for managing mods, texture packs, and worlds without touching the file system directly.

### Content Tabs

| Tab | Type | Destination Folder |
| :--- | :--- | :--- |
| **Mods** | File | `behavior_packs/` |
| **Textures** | File | `resource_packs/` |
| **Worlds** | Folder | `minecraftWorlds/` |

### States
*   **Enabled:** The file keeps its normal name and is loaded by the game.
*   **Disabled:** The file is renamed with a `.disabled` extension and ignored by the game.
*   **Interactive:** Use checkboxes to toggle content on or off instantly.
