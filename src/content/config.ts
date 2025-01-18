import { defineCollection } from 'astro:content'
import { postSchema } from '../schemas/postSchema.ts'
import { momentSchema } from '../schemas/momentSchema.ts'

const postCollection = defineCollection({
  type: 'content',
  schema: postSchema,
})

const momentCollection = defineCollection({
  type: 'content',
  schema: momentSchema,
})

export const collections = {
  posts: postCollection,
  moments: momentCollection,
}
