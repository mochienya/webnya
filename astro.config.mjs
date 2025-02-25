import solidJs from '@astrojs/solid-js'
import svelte from '@astrojs/svelte'
import icon from 'astro-icon'

import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://puppy.f53.dev',
  base: '/',
  integrations: [UnoCSS(), solidJs(), icon(), svelte()],
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
