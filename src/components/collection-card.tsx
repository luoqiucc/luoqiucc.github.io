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
import { formatCategory } from "@/lib/utils"

interface Props {
  post: CollectionEntry<"posts">
}

function CollectionCard({ post }: Props) {
  return (
    <a href={`/post/${post.id}`}>
      <Card className="relative pt-0">
        <div className="absolute inset-0 z-30 aspect-video" />
        <img
          src={post.data.cover}
          alt="cover"
          className="relative z-20 aspect-video w-full bg-accent object-cover dark:brightness-80"
        />
        <CardHeader>
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

export { CollectionCard }
