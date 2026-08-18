import type { CollectionEntry } from "astro:content"
import { PaperCard } from "./card/PaperCard"
import { PostCard } from "./card/PostCard"
import { ImageCard } from "./card/ImageCard"

interface Props {
  posts: CollectionEntry<"posts">[]
}

function getCardByCategory(category: string) {
  switch (category) {
    case "paper":
      return PaperCard
    case "collection":
      return ImageCard
    default:
      return PostCard
  }
}

function PostCardWrapper({ posts }: Props) {
  return posts.map((post) => {
    const Card = getCardByCategory(post.data.category)
    return <Card key={post.id} post={post} />
  })
}

export { PostCardWrapper }
