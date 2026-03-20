import DefaultTheme from 'vitepress/theme'
import CommunityCard from './components/CommunityCard.vue'
import FlatpakButton from './components/FlatpakButton.vue'
import MinecraftButton from './components/MinecraftButton.vue'
import { inject } from '@vercel/analytics' // <--- Importamos la función, no el componente
import './style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }: { app: any }) {
        // Registramos tus componentes
        app.component('CommunityCard', CommunityCard)
        app.component('FlatpakButton', FlatpakButton)
        app.component('MinecraftButton', MinecraftButton)

        // Ejecutamos la analítica SOLO en el navegador para no romper el build
        if (typeof window !== 'undefined') {
            inject()
        }
    }
}