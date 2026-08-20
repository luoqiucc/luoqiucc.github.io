import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Social } from "./social"

function ProfileDrawer() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
      <DrawerTrigger>
        <Avatar size="sm">
          <AvatarImage src="https://avatars.githubusercontent.com/u/109642163?v=4&size=128" />
          <AvatarFallback>L</AvatarFallback>
        </Avatar>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex justify-center">
            <Avatar className="h-30 w-30">
              <AvatarImage src="https://avatars.githubusercontent.com/u/109642163?v=4" />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
          </div>
          <DrawerTitle className="text-center">落秋cc</DrawerTitle>
          <DrawerDescription className="text-center">
            👋🏻 Hi！这里是落秋cc，计算机网络方向，专注于高性能网络技术。熟悉 P4
            可编程数据平面与 DPDK
            高速数据包处理，当前主要聚焦于网络传输协议及性能优化相关工作。
          </DrawerDescription>
        </DrawerHeader>
        <div className="my-4">
          <Social />
        </div>
        <div className="overflow-y-auto p-4">
          <div>
            <Card>
              <CardContent>
                <p>
                  我小的时候，父母偶尔会给我拿点零花钱，我拿着这些钱，叫上我的好朋友去上5块钱3个小时的网，就那种县城里的小网吧，昏暗的灯光，包浆的设备，烟雾缭绕的大厅。我和我的好朋友两个人，玩的像过年一样，我至今不能忘怀。后来我上了班，平常也会去上网，网咖也好电竞酒店也好，几十几百一个晚上的私人包间，环境优雅，设备高端，但是我总也找不到小时候5块钱3个小时小网吧的，那样的激动和感觉。
                </p>
              </CardContent>
              <CardFooter>
                <p className="italic">《我的上网》 @落秋cc</p>
              </CardFooter>
            </Card>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="ghost" />}>
            <X />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export { ProfileDrawer }
