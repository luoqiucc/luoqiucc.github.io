import { AlertCircle } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface Props {
  children: React.ReactNode
}

export default function AlertDestructive(props: Props) {
  return (
    <Alert variant="destructive" className="my-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>注意</AlertTitle>
      <AlertDescription>{props.children}</AlertDescription>
    </Alert>
  )
}
