import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { LampDesk } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Props {
  title: string
  topics: String[]
  pubDate: Date
  author: string
  url: string
  children: React.ReactNode
}

export default function MomentCard(props: Props) {
  return (
    <Alert>
      <LampDesk className="h-4 w-4" />
      <AlertTitle className="text-muted-foreground">
        {props.pubDate.toISOString().slice(0, 10)}
      </AlertTitle>
      <AlertDescription className="py-2 text-foreground">
        <b>{props.children}</b>
        <div className="pt-2 italic flex w-full flex-wrap gap-2">
          {props.topics.map((topic, index) => (
            <Badge key={index} variant="ghost">
              #{topic}
            </Badge>
          ))}
        </div>
      </AlertDescription>
    </Alert>
  )
}
