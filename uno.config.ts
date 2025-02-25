import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetWind3(),

  ],
  rules: [
    ['bgblur', { 'backdrop-filter': 'blur(0.3rem)', 'background-color': '#ffffff03' }],
    ['darkbgblur', { 'backdrop-filter': 'blur(0.3rem)', 'background-color': '#0000004d' }],

  ],
  shortcuts: [
    {
      row: 'flex flex-row',
      col: 'flex flex-col',
    },
  ],
})
