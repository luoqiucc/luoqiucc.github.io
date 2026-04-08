import type { CollectionEntry } from "astro:content"
import { Laugh, Smile } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
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
        <CardDescription>{formatDateEN(moment.data.pubDate)}</CardDescription>
        <CardAction>
          <Smile />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{moment.body}</p>
        {moment.data.topic.length != 0 && <Separator className="my-4" />}
        {moment.data.topic.map((topic) => (
          <Badge key={topic} className="text-blue-600" variant="ghost">
            #{topic}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}

export { MomentCard }
