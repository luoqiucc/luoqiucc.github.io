import { Contact } from 'lucide-react'
import { badgeVariants } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  description: string
  id: string
  tags: string[]
  pubDate: Date
  author: string
}

export default function PostCard(props: Props) {
  return (
    <a href={`/posts/${props.id}`}>
      <div>
        <div className="flex items-center text-primary">
          <Contact size={20} className="mr-2" />
          {props.pubDate.toISOString().slice(0, 10)} @{props.author}
        </div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight my-4">
          {props.title}
        </h4>
        <p className="text-xl text-muted-foreground my-4">
          {props.description}
        </p>
        <div className="my-4">
          {props.tags.map((tag) => (
            <a
              key={tag}
              href={`/tags/${tag}`}
              className={cn(badgeVariants({ variant: 'secondary' }), 'mr-2')}
            >
              {tag}
            </a>
          ))}
        </div>
        <Separator className="my-8" />
      </div>
    </a>
  )
}
