import solidJs from '@astrojs/solid-js'
import icon from 'astro-icon'

import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'

export default defineConfig({
  site: 'https://puppy.f53.dev',
  base: '/',
  trailingSlash: 'never',
  integrations: [UnoCSS(), solidJs(), icon()],
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
    css: { preprocessorOptions: { scss: { silenceDeprecations: ['mixed-decls'] } } },
  },
})
