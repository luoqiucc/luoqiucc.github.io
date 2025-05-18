import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { LampDesk } from 'lucide-react'

interface Props {
  title: string
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
      </AlertDescription>
    </Alert>
  )
}
