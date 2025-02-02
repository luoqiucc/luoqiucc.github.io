import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

import { postSchema, momentSchema } from './schemas/index.ts'

const posts = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/posts' }),
  schema: postSchema,
})

const moments = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/moments' }),
  schema: momentSchema,
})

export const collections = { posts, moments }
