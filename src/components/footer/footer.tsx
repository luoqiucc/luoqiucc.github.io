import { buttonVariants } from '@/components/ui/button'

import DCLogo from './dc-logo'
import { Sparkle } from 'lucide-react'

export default function Footer() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 bg-muted/50">
      <div className="mx-auto w-full max-w-5xl py-6">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="mb-16">
            <DCLogo />
          </div>
          <div>
            <small className="text-xl text-muted-foreground font-semibold leading-none">
              朋友们
            </small>
            <ul className="my-4 [&>li]:mt-2 flex flex-wrap">
              <li className="mr-2 mb-2">
                <a
                  target="_blank"
                  className={buttonVariants({ variant: 'secondary' })}
                  href="https://blog.csdn.net/weixin_52423626?type=lately"
                >
                  <Sparkle /> 名字被占用的码农
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
