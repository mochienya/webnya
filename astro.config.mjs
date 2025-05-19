import solidJs from '@astrojs/solid-js'
import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://puppy.f53.dev',
  base: '/',
  trailingSlash: 'never',
  integrations: [solidJs(), icon()],
  scopedStyleStrategy: 'class',
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: 'constrained',
  },
  vite: {
    css: {
      transformer: 'lightningcss',
      preprocessorOptions: { scss: { silenceDeprecations: ['mixed-decls'] } },
    },
    plugins: [tailwindcss()],
  },
})
