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
  <button class="minecraft-btn" @click="openLink">
    <span class="icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12 15.9862L6.34315 10.3292L7.75736 8.91501L11 12.1578V5Z" fill="currentColor"/>
        <path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor"/>
      </svg>
    </span>
    <span class="label">Download AppImage</span>
  </button>
</template>

<style scoped>
.minecraft-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #10B981; /* Emerald Green */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  width: auto;
  min-width: 240px;
}

.minecraft-btn:hover {
  opacity: 0.9;
}

.minecraft-btn:active {
  transform: scale(0.98);
}

.label {
  line-height: 1;
}

.icon {
  display: flex;
  align-items: center;
}
</style>
