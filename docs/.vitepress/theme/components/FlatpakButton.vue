<script setup lang="ts">
const props = defineProps<{
  link?: string
}>()

const openLink = () => {
  if (props.link) {
    window.open(props.link, '_blank')
  }
}
</script>

<template>
  <button class="flatpak-btn" @click="openLink">
    <span class="icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0003 0.600098C5.70029 0.600098 0.600098 5.70029 0.600098 12.0003C0.600098 18.3003 5.70029 23.4005 12.0003 23.4005C18.3003 23.4005 23.4005 18.3003 23.4005 12.0003C23.4005 5.70029 18.3003 0.600098 12.0003 0.600098ZM9.14324 4.88581H14.8573V10.6003H9.14324V4.88581ZM4.88581 9.14324H9.14324V14.8577L4.88581 10.6003V9.14324ZM14.8573 10.6003H19.1147V14.8577L14.8573 19.1152V10.6003Z" fill="white"/>
      </svg>
    </span>
    <span class="text">
      <slot>Get it on Flathub</slot>
    </span>
  </button>
</template>

<style scoped>
.flatpak-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #4A90D9;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  width: auto;
  min-width: 200px;
}

.flatpak-btn:hover {
  opacity: 0.9;
}

.flatpak-btn:active {
  transform: scale(0.98);
}

.icon {
  display: flex;
  align-items: center;
}
</style>
