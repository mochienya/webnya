import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const devblogs = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/pages/devblogs',
    generateId: ({ entry }) => `/devblogs/${entry.replace(/\.md$/, '')}`,
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
})

export const collections = { devblogs }
