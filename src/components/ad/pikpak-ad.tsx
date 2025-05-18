import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import PikpakIcon from '@/assets/svg/ad/pikpak_icon.svg'

export default function PikpakAD() {
  return (
    <div className="relative my-8">
      <Badge className="absolute right-2 top-2" variant="secondary">
        广告
      </Badge>
      <Card>
        <CardContent className="flex items-center">
          <img src={PikpakIcon.src} width={48} alt="pikpak" />
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight ml-4">
            使用我的PikPak邀请码<span className="text-primary"> 38302249 </span>
            获得奖励😋👍
          </h4>
        </CardContent>
      </Card>
    </div>
  )
}
