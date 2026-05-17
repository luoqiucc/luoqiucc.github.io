import type { CollectionEntry } from "astro:content"
import { PaperCard } from "@/components/paper-card"
import { PostCard } from "@/components/post-card"
import { CollectionCard } from "@/components/collection-card"

interface Props {
  posts: CollectionEntry<"posts">[]
}

function getCardByCategory(category: string) {
  switch (category) {
    case "paper":
      return PaperCard
    case "collection":
      return CollectionCard
    default:
      return PostCard
  }
}

function PostCardWrapper({ posts }: Props) {
  return posts.map((post) => {
    const Card = getCardByCategory(post.data.category)

    return (
      <div key={post.id}>
        <Card post={post} />
      </div>
    )
  })
}

export { PostCardWrapper }
