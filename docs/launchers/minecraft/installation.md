# Trinity Launcher Installation
**Complete guide for Linux systems**

Trinity Launcher is a community-driven project distributed primarily as a **Flatpak** package to ensure maximum compatibility and security across the Linux ecosystem.

::: tip Before you start
Make sure you have **Flatpak** installed on your system. This ensures that the launcher and its dependencies (like the community-maintained Minecraft Bedrock engines) run in a stable, isolated environment.

If you don't have it yet, visit the official setup guide: [Go to Flatpak.org](https://flatpak.org/setup/)
:::

## Install Trinity Launcher
Choose the method that best fits your workflow.

### Method A: From Testing-Beta Repository (RECOMMENDED)
This is the preferred way for community members who want the latest features and automatic updates directly from our development pipeline.

**Run these commands in order in your terminal:**

1. **Add the Trinity repository:**
    ```bash
    flatpak remote-add --if-not-exists trinity https://trinity-flatpak.codeberg.page/com.trench.trinity.launcher.flatpakrepo
    ```

2. **Install the KDE runtime (Qt6):**
    ```bash
    flatpak install flathub org.kde.Platform//6.9
    ```

3. **Install the Qt WebEngine base:**
    ```bash
    flatpak install flathub io.qt.qtwebengine.BaseApp//6.9
    ```

4. **Install Trinity Launcher:**
    ```bash
    flatpak install com.trench.trinity.launcher
    ```

> **Advantages:** Direct access to latest beta versions and automatic background updates.

### Method B: From Software Store

If you prefer a graphical interface:

1. Add the repository first:
    ```bash
    flatpak remote-add --if-not-exists trinity https://trinity-flatpak.codeberg.page/com.trench.trinity.launcher.flatpakrepo
    ```

2. Search for **"Trinity Launcher"** in your Software Store (GNOME Software, Discover).
    > *Note: You may need to restart the store after adding the repo.*

### Method C: AppImage (Beta - Portable)

Ideal for users who prefer manual management without package managers.

1. **Download:**  
   <MinecraftButton link="https://github.com/Trinity-Vita/Trinity-Launcher/releases/latest" />

2. **Install Gear Level:** Search for "Gear Level" in your App Store and install it.
3. **Open with Gear Level:** Right-click the `.AppImage` file -> Open With -> **Gear Level**.
4. **Unlock & Integrate:** Click **"Unlock"** to make it executable and **"Add to apps menu"** for easy access.

---

## Remote Login (AppImage Only)

::: warning Local vs Remote
This step is **only required** for the **AppImage** version to enable Microsoft account authentication.
:::

### Step 1: Enable in Settings
1. Open Trinity and go to **Settings**.
2. Navigate to **Account Settings** and toggle **Remote Login**.
3. **Restart** the game completely.

### Step 2: Browser Authentication
1. Go to [microsoft.com/link](https://microsoft.com/link).
2. Enter the **code** shown in the game.
3. Complete the login in your browser.
4. Close the dialog in the game.

---

## Run Trinity Launcher (Flatpak)

- **From Menu:** Search for "Trinity Launcher" in your applications dashboard.
- **From Terminal:**
    ```bash
    flatpak run com.trench.trinity.launcher
    ```

<CommunityCard />
