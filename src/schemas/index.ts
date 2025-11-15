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
    .default('https://pic1.imgdb.cn/item/691848ad3203f7be00085dca.png'),
})

export const momentSchema = z.object({
  title: z.string().default('无题'),
  topic: z.array(z.string()).default([]),
  pubDate: z.date(),
  author: z.string().default('落秋cc'),
  url: z.string().default('/'),
})
