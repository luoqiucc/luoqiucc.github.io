import { defineCollection } from 'astro:content'
import { postSchema } from '../schemas/postSchema.ts'

const postCollection = defineCollection({
  type: 'content',
  schema: postSchema,
})

export const collections = {
  posts: postCollection,
}
