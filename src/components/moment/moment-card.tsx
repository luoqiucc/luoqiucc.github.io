import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { MessageSquareText } from 'lucide-react'

interface Props {
  title: string
  pubDate: Date
  author: string
  url: string
  children: React.ReactNode
}

export default function MomentCard(props: Props) {
  return (
    <Alert className="my-4">
      <MessageSquareText className="h-4 w-4" />
      <AlertDescription>
        {props.pubDate.toISOString().slice(0, 10)}
      </AlertDescription>
      <AlertTitle className="py-2">
        <b>{props.children}</b>
      </AlertTitle>
    </Alert>
  )
}
