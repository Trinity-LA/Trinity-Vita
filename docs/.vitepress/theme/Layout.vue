<script setup>
import DefaultTheme from 'vitepress/theme'
import { Analytics } from '@vercel/analytics/vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <Analytics />
    </template>
  </Layout>
</template>