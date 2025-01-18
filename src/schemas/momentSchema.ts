import { z } from 'astro:content'

export const momentSchema = z.object({
  isFocus: z.boolean().default(false),
  title: z.string().default('无题'),
  pubDate: z.date(),
  author: z.string().default('落秋cc'),
  url: z.string().default('/'),
})
