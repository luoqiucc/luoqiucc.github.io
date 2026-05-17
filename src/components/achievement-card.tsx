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
import { Badge } from "@/components/ui/badge"
import { CircleCheck } from "lucide-react"

interface Props {
  achievement: CollectionEntry<"achievements">
}

function AchievementCard({ achievement }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{achievement.data.title}</CardTitle>
        <CardDescription>{achievement.body}</CardDescription>
        <CardAction>
          <Badge className="bg-green-600">
            <CircleCheck data-icon="inline-start" />
            已获得
          </Badge>
        </CardAction>
      </CardHeader>
    </Card>
  )
}

export { AchievementCard }
