import type { CollectionEntry } from "astro:content"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatCategory, formatDateCN } from "@/lib/utils"
import { Badge } from "./ui/badge"

interface Props {
  post: CollectionEntry<"posts">
}

function PaperCard({ post }: Props) {
  return (
    <a href={`/post/${post.id}`}>
      <Card className="max-h-96 border border-primary">
        <CardHeader>
          <CardDescription className="mb-2">
            {formatDateCN(post.data.pubDate)}
          </CardDescription>
          <CardTitle>{post.data.title}</CardTitle>
          <CardAction>
            <Badge variant="default">
              {formatCategory(post.data.category)}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="overflow-y-auto">
          <p>{post.data.abstract}</p>
        </CardContent>
        <CardFooter className="bg-primary">
          <p className="text-secondary">{post.data.subtitle}</p>
        </CardFooter>
      </Card>
    </a>
  )
}

export { PaperCard }
