import type { CollectionEntry } from "astro:content"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { formatDateEN } from "@/lib/utils"

interface Props {
  moment: CollectionEntry<"moments">
}

function MomentCard({ moment }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="italic">
          {formatDateEN(moment.data.pubDate)}
        </CardDescription>
        <CardAction>
          <div className="text-xl">{moment.data.status}</div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{moment.body}</p>
      </CardContent>
      {moment.data.topic.length != 0 && (
        <CardFooter>
          {moment.data.topic.map((topic) => (
            <Badge key={topic} className="px-2 text-blue-600" variant="ghost">
              #{topic}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}

export { MomentCard }
