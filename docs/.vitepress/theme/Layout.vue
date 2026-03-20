<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { Analytics } from '@vercel/analytics/vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <ClientOnly>
        <Analytics />
      </ClientOnly>
    </template>
  </Layout>
</template>