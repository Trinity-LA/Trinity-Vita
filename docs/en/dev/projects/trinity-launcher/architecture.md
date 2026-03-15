# Modular Architecture

Trinity Launcher follows a clean architecture based on separate libraries to ensure modularity and maintainability.

## Structure

### ▸ TrinityCore
Encapsulates all the **Business Logic**.
-   Version management
-   Pack handling
-   Launch logic
-   Export/Import operations

### ▸ TrinityUI
Contains the **Graphical Interfaces**.
-   Windows
-   Dialogs
-   Widgets
-   View components

This separation allows the core logic to be tested independently of the UI and potentially reused in other interfaces (e.g., CLI).
