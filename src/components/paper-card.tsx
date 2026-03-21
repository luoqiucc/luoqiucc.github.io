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

interface Props {
  post: CollectionEntry<"posts">
}

function PaperCard({ post }: Props) {
  return (
    <a href={`/post/${post.id}`}>
      <Card className="h-96">
        <CardHeader>
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
