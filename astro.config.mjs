import alpinejs from '@astrojs/alpinejs'
import solidJs from '@astrojs/solid-js'
import icon from 'astro-icon'

import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'

export default defineConfig({
  site: 'https://puppy.f53.dev',
  base: '/',
  integrations: [UnoCSS(), solidJs(), icon(), alpinejs()],
  scopedStyleStrategy: 'class',
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: 'responsive',
  },
})
