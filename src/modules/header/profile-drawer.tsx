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
        <div className="p-4"></div>
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
