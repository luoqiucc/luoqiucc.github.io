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
import {
  Menu,
  House,
  PenLine,
  ScrollText,
  EthernetPort,
  X,
  MessageCircleMore,
} from "lucide-react"
import { NavAvatar } from "./nav-avatar"
import { Social } from "./social"

function NavDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="my-2 flex justify-center">
            <NavAvatar />
          </div>
          <div className="text-center">
            <DrawerTitle className="my-2">落秋cc</DrawerTitle>
            <DrawerDescription>
              计算机网络方向，主要从事高性能网络相关研究，熟悉 P4
              可编程数据平面、DPDK高速数据包处理，聚焦网络传输协议与性能优化相关工作。
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <div>
          <Social />
        </div>
        <div className="p-2">
          <a href="/">
            <Button variant="ghost" className="w-full">
              <House /> 首页
            </Button>
          </a>
          <a href="/post/essay/1">
            <Button variant="ghost" className="w-full">
              <PenLine /> 随笔
            </Button>
          </a>
          <a href="/moment/1">
            <Button variant="ghost" className="w-full">
              <MessageCircleMore /> 动态
            </Button>
          </a>
          <a href="/post/paper/1">
            <Button variant="ghost" className="w-full">
              <ScrollText /> 论文研读
            </Button>
          </a>
          <a href="/post/computer-networks/1">
            <Button variant="ghost" className="w-full">
              <EthernetPort /> 计算机网络
            </Button>
          </a>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="ghost">
              <X />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export { NavDrawer }
