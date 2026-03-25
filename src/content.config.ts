import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const posts = defineCollection({
  loader: glob({ base: "./content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    abstract: z.string(),
    category: z.enum(["essay", "paper", "computer-networks"]).default("essay"),
    pubDate: z.coerce.date(),
  }),
})

export const collections = { posts }
