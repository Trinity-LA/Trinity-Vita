# Arquitectura Modular

Trinity Launcher sigue una arquitectura limpia basada en bibliotecas separadas para garantizar la modularidad y el mantenimiento.

## Estructura

### ▸ TrinityCore
Encapsula toda la **Lógica de Negocio**.
-   Gestión de versiones
-   Manejo de packs
-   Lógica de inicio
-   Operaciones de Exportación/Importación

### ▸ TrinityUI
Contiene las **Interfaces Gráficas**.
-   Ventanas
-   Diálogos
-   Widgets
-   Componentes de vista

Esta separación permite que la lógica central sea probada de manera independiente de la interfaz de usuario y potencialmente reutilizada en otras interfaces (por ejemplo, CLI).
