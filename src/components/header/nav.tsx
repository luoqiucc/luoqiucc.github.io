import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { ModeToggle } from '../ModeToggle'

export default function Nav() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4">
      <div className="mx-auto w-full max-w-5xl h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className={buttonVariants({ variant: 'ghost' })}>
            <b>首页</b>
          </a>
          <a href="/posts/1" className={buttonVariants({ variant: 'ghost' })}>
            <b>博客</b>
          </a>
          <a href="/moments" className={buttonVariants({ variant: 'ghost' })}>
            <b>动态</b>
          </a>
          <div className="h-4 w-px bg-border" />
          <ModeToggle />
        </div>
        <div>
          <a
            href="/"
            className={cn(buttonVariants({ variant: 'default' }), 'h-24 w-12')}
          >
            <i className="rotate-90 tracking-wide text-base pl-4">
              <b>落秋cc</b>
            </i>
          </a>
        </div>
      </div>
    </div>
  )
}
