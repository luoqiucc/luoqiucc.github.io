import type { CollectionEntry } from "astro:content"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatCategory, formatDateCN } from "@/lib/utils"

interface Props {
  post: CollectionEntry<"posts">
}

function PostCard({ post }: Props) {
  return (
    <a href={`/post/${post.id}`}>
      <Card className="max-h-72">
        <CardHeader>
          <CardDescription className="mb-2">
            {formatDateCN(post.data.pubDate)}
          </CardDescription>
          <CardTitle>{post.data.title}</CardTitle>
          <CardDescription>{post.data.subtitle}</CardDescription>
          <CardAction>
            <Badge variant="default">
              {formatCategory(post.data.category)}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="overflow-y-auto">
          <p>{post.data.abstract}</p>
        </CardContent>
      </Card>
    </a>
  )
}

export { PostCard }
