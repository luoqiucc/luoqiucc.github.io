import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'

export default function TencentCloudAD() {
  return (
    <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-3">
      <div className="relative">
        <Badge className="absolute right-2 top-2  z-10" variant="secondary">
          广告
        </Badge>
        <a target="_blank" href="https://curl.qcloud.com/ApzRs8IM">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://free.picui.cn/free/2025/05/18/682947edc4eed.png"
              alt="tencent cloud"
            />
          </AspectRatio>
        </a>
      </div>
      <div className="relative">
        <Badge className="absolute right-2 top-2 z-10" variant="secondary">
          广告
        </Badge>
        <a target="_blank" href="https://curl.qcloud.com/sI9sXTG0">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://free.picui.cn/free/2025/05/18/68294e9e6a6c3.png"
              alt="tencent cloud"
            />
          </AspectRatio>
        </a>
      </div>
      <div className="relative">
        <Badge className="absolute right-2 top-2 z-10" variant="secondary">
          广告
        </Badge>
        <a target="_blank" href="https://curl.qcloud.com/LnNbQwx9">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
            <img
              className="w-full h-full rounded-md object-cover"
              src="https://free.picui.cn/free/2025/05/18/6829555f7a3d8.png"
              alt="tencent cloud"
            />
          </AspectRatio>
        </a>
      </div>
    </div>
  )
}
