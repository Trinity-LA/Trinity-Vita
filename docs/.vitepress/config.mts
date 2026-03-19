import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Trinity Projects",
  description: "A open source eco-system",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs-trinity.vercel.app'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#9D74F4' }],
    ['meta', { name: 'author', content: 'Trinity Projects' }],
    ['meta', { name: 'keywords', content: 'Trinity, Open Source, Development, Launcher, Minecraft, Community, Projects' }],
    ['meta', { name: 'description', content: 'A open source eco-system providing tools and software like Trinity Launcher.' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs-trinity.vercel.app/' }],
    ['meta', { property: 'og:title', content: 'Trinity Projects' }],
    ['meta', { property: 'og:description', content: 'A open source eco-system providing tools and software like Trinity Launcher.' }],
    ['meta', { property: 'og:image', content: 'https://docs-trinity.vercel.app/banner.webp' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:site_name', content: 'Trinity Projects' }],

    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://docs-trinity.vercel.app/' }],
    ['meta', { name: 'twitter:title', content: 'Trinity Projects' }],
    ['meta', { name: 'twitter:description', content: 'A open source eco-system providing tools and software like Trinity Launcher.' }],
    ['meta', { name: 'twitter:image', content: 'https://docs-trinity.vercel.app/banner.webp' }]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/guides/' },
          { text: 'Projects', link: '/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/guides/' },
              { text: 'Getting Started', link: '/guides/getting-started/' },
              {
                text: 'Troubleshooting',
                collapsed: true,
                items: [
                  { text: 'Common Issues', link: '/guides/troubleshooting/common-issues' },
                  { text: 'Logs & Reports', link: '/guides/troubleshooting/logs-reports' }
                ]
              }
            ]
          },
          {
            text: 'Development',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/dev/' },
              {
                text: 'Contributing',
                collapsed: true,
                items: [
                  {
                    text: 'Trinity Launcher',
                    collapsed: false,
                    items: [
                      { text: 'Guide', link: '/dev/contributing/trinity-launcher/' },
                      { text: 'How to Contribute', link: '/dev/contributing/trinity-launcher/how-to-contribute' },
                      { text: 'Code Style', link: '/dev/contributing/trinity-launcher/code-style' },
                      { text: 'Commit Strategy', link: '/dev/contributing/trinity-launcher/commit-strategy' },
                      { text: 'Issues', link: '/dev/contributing/trinity-launcher/issues' },
                      { text: 'Pull Requests', link: '/dev/contributing/trinity-launcher/pull-requests' }
                    ]
                  }]
              },
              {
                text: 'Projects',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/dev/projects/' },
                  {
                    text: 'Trinity Launcher',
                    collapsed: true,
                    items: [
                      { text: 'Home', link: '/dev/projects/trinity-launcher/' },
                      { text: 'Architecture', link: '/dev/projects/trinity-launcher/architecture' },
                      { text: 'Instances', link: '/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Build', link: '/dev/projects/trinity-launcher/build-process' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Documentation',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/docs/' },
              { text: 'Concepts', link: '/docs/concepts/' },
              { text: 'Configuration', link: '/docs/configuration/' }
            ]
          },
          {
            text: 'Launchers',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/launchers/minecraft/overview' },
                  { text: 'Installation', link: '/launchers/minecraft/installation' },
                  { text: 'Configuration', link: '/launchers/minecraft/configuration' },
                  { text: 'Usage', link: '/launchers/minecraft/usage' },
                  { text: 'Troubleshooting', link: '/launchers/minecraft/troubleshooting' }
                ]
              }
            ]
          },
          {
            text: 'About',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/about/' },
              { text: 'Team', link: '/about/team' },
              { text: 'Mission', link: '/about/mission' },
              { text: 'Community Values', link: '/about/community-values' },
              { text: 'License', link: '/about/license' }
            ]
          }
        ]
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        logo: '/logo-compact.svg',
        outlineTitle: 'En esta página',
        docFooter: {
          prev: 'Página anterior',
          next: 'Página siguiente'
        },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Apariencia',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Guías', link: '/es/guides/' },
          { text: 'Proyectos', link: '/es/dev/projects/' }
        ],
        sidebar: [
          {
            text: 'Comenzando',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/guides/' },
              { text: 'Comenzando', link: '/es/guides/getting-started/' },
              {
                text: 'Solución de Problemas',
                collapsed: true,
                items: [
                  { text: 'Problemas Comunes', link: '/es/guides/troubleshooting/common-issues' },
                  { text: 'Registros y Reportes', link: '/es/guides/troubleshooting/logs-reports' }
                ]
              }
            ]
          },
          {
            text: 'Desarrollo',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/dev/' },
              {
                text: 'Contribuyendo',
                collapsed: true,
                items: [
                  {
                    text: 'Lanzador Trinity',
                    collapsed: false,
                    items: [
                      { text: 'Guía', link: '/es/dev/contributing/trinity-launcher/' },
                      { text: 'Cómo Contribuir', link: '/es/dev/contributing/trinity-launcher/how-to-contribute' },
                      { text: 'Estilo de Código', link: '/es/dev/contributing/trinity-launcher/code-style' },
                      { text: 'Estrategia de Commits', link: '/es/dev/contributing/trinity-launcher/commit-strategy' },
                      { text: 'Reporte de Problemas', link: '/es/dev/contributing/trinity-launcher/issues' },
                      { text: 'Solicitudes de Extracción', link: '/es/dev/contributing/trinity-launcher/pull-requests' }
                    ]
                  }]
              },
              {
                text: 'Proyectos',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/dev/projects/' },
                  {
                    text: 'Lanzador Trinity',
                    collapsed: true,
                    items: [
                      { text: 'Inicio', link: '/es/dev/projects/trinity-launcher/' },
                      { text: 'Arquitectura', link: '/es/dev/projects/trinity-launcher/architecture' },
                      { text: 'Instancias', link: '/es/dev/projects/trinity-launcher/instance-management' },
                      { text: 'Compilación', link: '/es/dev/projects/trinity-launcher/build-process' }
                    ]
                  }
                ]
              }
            ]
          },
          {
            text: 'Documentación',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/docs/' },
              { text: 'Conceptos', link: '/es/docs/concepts/' },
              { text: 'Configuración', link: '/es/docs/configuration/' }
            ]
          },
          {
            text: 'Launchers',
            collapsed: false,
            items: [
              { text: 'Resumen', link: '/es/launchers/' },
              {
                text: 'Minecraft',
                collapsed: true,
                items: [
                  { text: 'Resumen', link: '/es/launchers/minecraft/overview' },
                  { text: 'Instalación', link: '/es/launchers/minecraft/installation' },
                  { text: 'Configuración', link: '/es/launchers/minecraft/configuration' },
                  { text: 'Uso', link: '/es/launchers/minecraft/usage' },
                  { text: 'Solución de Problemas', link: '/es/launchers/minecraft/troubleshooting' }
                ]
              }
            ]
          },
          {
            text: 'Acerca de',
            collapsed: false,
            items: [
              { text: 'Introducción', link: '/es/about/' },
              { text: 'Equipo', link: '/es/about/team' },
              { text: 'Misión', link: '/es/about/mission' },
              { text: 'Valores de la Comunidad', link: '/es/about/community-values' },
              { text: 'Licencia', link: '/es/about/license' }
            ]
          }
        ],
        footer: {
          message: 'Lanzado bajo la Licencia BSD-3-Clause.',
          copyright: 'Copyright © 2025-present Trinity Projects'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
          { icon: 'discord', link: 'https://discord.gg/GWaN4eNjvz' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.68 3.56c-.28-.2-.68-.24-1.02-.08L3.26 10.4c-.7.3-1.14.98-1.14 1.74s.44 1.44 1.14 1.74l4.46 1.9 1.58 5.16a1.98 1.98 0 0 0 1.88 1.4c.54 0 1.06-.22 1.44-.6l2.12-2.12 4.46 3.06c.38.26.84.34 1.3.22s.84-.44 1.02-.88l4-16a2 2 0 0 0-.84-2.46zM13 14 8.7 11.8l9.6-6-8.2 8.6v.02L13 14z"/></svg>' }, link: 'https://t.me/+A7Y7lNK3PlpkNzFh' },
          { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.005 7.796c0 1.88-1.023 3.009-3.207 3.009h-3.615v-5.95H13.8c2.183 0 3.206 1.162 3.206 2.94zM.853 0l3.5 4.866v19.133h5.832v-9.06h1.398L16.563 24h6.583l-5.525-9.504a6.966 6.966 0 0 0 3.879-2.532 7 7 0 0 0 1.44-4.408C22.94 3.384 20.009 0 14.143 0h-9.79z"/></svg>' }, link: 'https://stt.gg/afpvgABs' }
        ]
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-compact.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Trinity-LA/Trinity-Launcher' },
      { icon: 'discord', link: 'https://discord.gg/GWaN4eNjvz' },
      { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.68 3.56c-.28-.2-.68-.24-1.02-.08L3.26 10.4c-.7.3-1.14.98-1.14 1.74s.44 1.44 1.14 1.74l4.46 1.9 1.58 5.16a1.98 1.98 0 0 0 1.88 1.4c.54 0 1.06-.22 1.44-.6l2.12-2.12 4.46 3.06c.38.26.84.34 1.3.22s.84-.44 1.02-.88l4-16a2 2 0 0 0-.84-2.46zM13 14 8.7 11.8l9.6-6-8.2 8.6v.02L13 14z"/></svg>' }, link: 'https://t.me/+A7Y7lNK3PlpkNzFh' },
      { icon: { svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.005 7.796c0 1.88-1.023 3.009-3.207 3.009h-3.615v-5.95H13.8c2.183 0 3.206 1.162 3.206 2.94zM.853 0l3.5 4.866v19.133h5.832v-9.06h1.398L16.563 24h6.583l-5.525-9.504a6.966 6.966 0 0 0 3.879-2.532 7 7 0 0 0 1.44-4.408C22.94 3.384 20.009 0 14.143 0h-9.79z"/></svg>' }, link: 'https://stt.gg/afpvgABs' }
    ],

    footer: {
      message: 'Released under the BSD-3-Clause License.',
      copyright: 'Copyright © 2025-present Trinity Projects'
    }
  }
})
