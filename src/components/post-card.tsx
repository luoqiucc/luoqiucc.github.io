import type { CollectionEntry } from "astro:content"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  post: CollectionEntry<"posts">
}

function PostCard({ post }: Props) {
  return (
    <a href={`/post/${post.id}`}>
      <Card className="max-h-48">
        <CardHeader>
          <CardTitle>{post.data.title}</CardTitle>
          <CardDescription>{post.data.subtitle}</CardDescription>
          <CardAction>
            <Badge variant="default">
              {getCcategoryName(post.data.category)}
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

function getCcategoryName(category: string) {
  switch (category) {
    case "essay":
      return "随笔"
    case "paper":
      return "论文研读"
    case "network-hardware":
      return "网络硬件"
    default:
      return "未知"
  }
}

export { PostCard }
