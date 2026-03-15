<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const isSpanish = computed(() => lang.value.startsWith('es'))

const texts = computed(() => {
  if (isSpanish.value) {
    return {
      discordTitle: '¿Necesitas ayuda?',
      discordSubtitle: 'Únete a nuestra comunidad de Discord para obtener soporte',
      discordButton: 'Unirse a Discord',
      telegramTitle: 'Mantente actualizado',
      telegramSubtitle: 'Únete a nuestro canal de Telegram para las últimas noticias',
      telegramButton: 'Unirse a Telegram',
      stoatTitle: 'Chat de la Comunidad',
      stoatSubtitle: 'Únete a nuestra comunidad en Stoat (anteriormente Revolt)',
      stoatButton: 'Unirse a Stoat'
    }
  }
  return {
    discordTitle: 'Need help?',
    discordSubtitle: 'Join our Discord community to get support',
    discordButton: 'Join Discord',
    telegramTitle: 'Stay updated',
    telegramSubtitle: 'Join our Telegram channel for the latest news',
    telegramButton: 'Join Telegram',
    stoatTitle: 'Community Chat',
    stoatSubtitle: 'Join our community on Stoat (formerly Revolt)',
    stoatButton: 'Join Stoat'
  }
})

const openDiscord = () => {
  window.open('https://discord.gg/ettXssJs4b', '_blank')
}

const openTelegram = () => {
  window.open('https://t.me/CyberCoffeFossOrg', '_blank')
}

const openStoat = () => {
  window.open('https://stt.gg/afpvgABs', '_blank')
}
</script>

<template>
  <div class="community-cards-container">
    <!-- Discord Card -->
    <div class="community-card discord-card">
      <div class="content">
        <h3 class="title">{{ texts.discordTitle }}</h3>
        <p class="subtitle">{{ texts.discordSubtitle }}</p>
        
        <button class="action-btn discord-btn" @click="openDiscord">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1583a18.3249 18.3249 0 00-5.4678 0 12.3533 12.3533 0 00-.6168-1.1583.0768.0768 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" fill="currentColor"/>
            </svg>
          </span>
          {{ texts.discordButton }}
        </button>
      </div>
    </div>

    <!-- Telegram Card -->
    <div class="community-card telegram-card">
      <div class="content">
        <h3 class="title">{{ texts.telegramTitle }}</h3>
        <p class="subtitle">{{ texts.telegramSubtitle }}</p>
        
        <button class="action-btn telegram-btn" @click="openTelegram">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.68 3.56c-.28-.2-.68-.24-1.02-.08L3.26 10.4c-.7.3-1.14.98-1.14 1.74s.44 1.44 1.14 1.74l4.46 1.9 1.58 5.16a1.98 1.98 0 0 0 1.88 1.4c.54 0 1.06-.22 1.44-.6l2.12-2.12 4.46 3.06c.38.26.84.34 1.3.22s.84-.44 1.02-.88l4-16a2 2 0 0 0-.84-2.46zM13 14 8.7 11.8l9.6-6-8.2 8.6v.02L13 14z" fill="currentColor"/>
            </svg>
          </span>
          {{ texts.telegramButton }}
        </button>
      </div>
    </div>

    <!-- Stoat Card -->
    <div class="community-card stoat-card">
      <div class="content">
        <h3 class="title">{{ texts.stoatTitle }}</h3>
        <p class="subtitle">{{ texts.stoatSubtitle }}</p>
        
        <button class="action-btn stoat-btn" @click="openStoat">
          <span class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.005 7.796c0 1.88-1.023 3.009-3.207 3.009h-3.615v-5.95H13.8c2.183 0 3.206 1.162 3.206 2.94zM.853 0l3.5 4.866v19.133h5.832v-9.06h1.398L16.563 24h6.583l-5.525-9.504a6.966 6.966 0 0 0 3.879-2.532 7 7 0 0 0 1.44-4.408C22.94 3.384 20.009 0 14.143 0h-9.79z" />
            </svg>
          </span>
          {{ texts.stoatButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.community-cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 768px) {
  .community-cards-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

.community-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.title {
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 !important;
  line-height: 1.2;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin: 0 !important;
  margin-bottom: 20px !important;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px 24px;
  color: white;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}

.action-btn:hover {
  opacity: 0.9;
}

.action-btn:active {
  transform: scale(0.98);
}

.discord-btn {
  background-color: #5865F2; /* Discord Blurple */
}

.telegram-btn {
  background-color: #24A1DE; /* Telegram Blue */
}

.stoat-btn {
  background-color: #FF4655; /* Revolt Red */
}

.icon {
  display: flex;
  align-items: center;
}
</style>
