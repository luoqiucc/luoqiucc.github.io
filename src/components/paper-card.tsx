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
import { formatDateCN } from "@/lib/utils"

interface Props {
  post: CollectionEntry<"posts">
}

function PaperCard({ post }: Props) {
  return (
    <a href={`/post/${post.id}`}>
      <Card className="h-96">
        <CardHeader>
          <CardDescription className="mb-2">
            {formatDateCN(post.data.pubDate)}
          </CardDescription>
          <CardTitle>{post.data.title}</CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto">
          <p>{post.data.abstract}</p>
        </CardContent>
        <CardFooter>
          <p>
            <i>{post.data.subtitle}</i>{" "}
          </p>
        </CardFooter>
      </Card>
    </a>
  )
}

export { PaperCard }
