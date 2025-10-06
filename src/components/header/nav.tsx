import { buttonVariants } from '@/components/ui/button'
import { badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Contact } from 'lucide-react'

import { ModeToggle } from '../ModeToggle'

interface Props {
  banner: {
    title: string
    description: string
  }
  post: {
    title: string
    pubDate: Date
    author: string
    description: string
    coverUrl: string
    tags: string[]
  }
}

export default function Nav({ banner, post }: Props) {
  return (
    <div>
      <div className="flex flex-1 flex-col gap-4 px-4 bg-muted/50">
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
          <div className="z-9">
            <a
              href="/"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'h-24 w-12'
              )}
            >
              <i className="rotate-90 tracking-wide text-base pl-4">
                <b>落秋cc</b>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        {JSON.stringify(post) == '{}' ? (
          <img
            className="h-full w-full object-cover absolute -z-9 bg-primary"
            src="https://free.picui.cn/free/2025/10/02/68de66a3bdf22.png"
            alt="Banner"
          />
        ) : (
          <img
            className="h-full w-full object-cover absolute -z-9 bg-primary"
            src={post.coverUrl}
            alt="Banner"
          />
        )}
        <div className="px-4 py-10">
          <div className="mx-auto h-full w-full max-w-5xl text-white">
            {JSON.stringify(post) == '{}' ? (
              <div>
                <div className="my-4">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                    {banner.title}
                  </h1>
                </div>
                <div className="my-4">
                  <p className="text-zinc-200 text-xl">
                    <i>{banner.description}</i>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center text-primary my-4">
                  <Contact size={20} className="mr-2" />
                  {post.pubDate.toISOString().slice(0, 10)} @{post.author}
                </div>
                <div className="my-4">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                    {post.title}
                  </h1>
                </div>
                <div className="my-4">
                  {post.tags.map((tag) => (
                    <a
                      href={`/tags/${tag}`}
                      key={tag}
                      className={cn(
                        badgeVariants({ variant: 'secondary' }),
                        'mr-2'
                      )}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
