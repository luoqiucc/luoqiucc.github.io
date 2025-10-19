import { buttonVariants } from '@/components/ui/button'
import { Sparkle } from 'lucide-react'

import Bilibili from '@/assets/svg/icon/social/bilibili.svg'
import Github from '@/assets/svg/icon/social/github.svg'
import Steam from '@/assets/svg/icon/social/steam.svg'
import Facebook from '@/assets/svg/icon/social/facebook.svg'
import DCLogo from './dc-logo'

export default function Footer() {
  return (
    <div>
      <div className="bg-primary flex justify-center">
        <div className="flex">
          <a target="_blank" href="https://github.com/luoqiucc">
            <img
              className="w-10 h-10 mx-2 my-4"
              src={Github.src}
              alt="Github"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100084243072146"
          >
            <img
              className="w-10 h-10 mx-2 my-4"
              src={Facebook.src}
              alt="Facebook"
            />
          </a>
          <a
            target="_blank"
            href="https://space.bilibili.com/94905532?spm_id_from=333.1007.0.0"
          >
            <img
              className="w-10 h-10 mx-2 my-4"
              src={Bilibili.src}
              alt="Bilibili"
            />
          </a>
          <a target="_blank" href="https://steamcommunity.com/id/2992845224/">
            <img className="w-10 h-10 mx-2 my-4" src={Steam.src} alt="Steam" />
          </a>
        </div>
      </div>
      <div className="p-4 bg-muted/50">
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
    </div>
  )
}
