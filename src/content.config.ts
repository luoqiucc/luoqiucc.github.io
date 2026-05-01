import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const posts = defineCollection({
  loader: glob({ base: "./content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    abstract: z.string(),
    category: z
      .enum(["essay", "paper", "computer-networks", "collection"])
      .default("essay"),
    pubDate: z.coerce.date(),
    cover: z
      .string()
      .default("https://pic1.imgdb.cn/item/6918497d3203f7be000863a5.png"),
  }),
})

const moments = defineCollection({
  loader: glob({ base: "./content/moments", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    status: z.string().default("🤔"),
    topic: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
  }),
})

export const collections = { posts, moments }
