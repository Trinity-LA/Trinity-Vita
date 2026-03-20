import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import CommunityCard from './components/CommunityCard.vue'
import FlatpakButton from './components/FlatpakButton.vue'
import MinecraftButton from './components/MinecraftButton.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app }: { app: any }) {
        app.component('CommunityCard', CommunityCard)
        app.component('FlatpakButton', FlatpakButton)
        app.component('MinecraftButton', MinecraftButton)
    }
}