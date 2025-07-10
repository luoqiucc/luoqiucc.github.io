import { z } from 'astro:content'

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  isTop: z.boolean().default(false),
  tags: z.array(z.string()),
  pubDate: z.date(),
  author: z.string().default('落秋cc'),
  coverUrl: z
    .string()
    .default('https://avatars.githubusercontent.com/u/109642163?v=4'),
})

export const momentSchema = z.object({
  title: z.string().default('无题'),
  topic: z.array(z.string()).default([]),
  pubDate: z.date(),
  author: z.string().default('落秋cc'),
  url: z.string().default('/'),
})
