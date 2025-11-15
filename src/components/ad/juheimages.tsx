import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function JuheImagesAD() {
  return (
    <div className="relative my-8">
      <Badge className="absolute right-2 top-2" variant="secondary">
        广告
      </Badge>
      <Card>
        <CardContent className="flex items-center">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            聚合图床，专业的图片托管服务，支持多种上传方式，多云存储备份，Excel批量导入导出。
            <br />
            <br />
            <span className="text-primary">
              <a
                target="blank"
                href="https://www.superbed.cn/signup?link=o2vugj9x"
              >
                👉点击这里立即注册
              </a>
            </span>
          </h4>
        </CardContent>
      </Card>
    </div>
  )
}
