import * as React from "react"
import { X, ScrollText } from "lucide-react"
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
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
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
        {/* social */}
        <div className="mb-4">
          <Social />
        </div>

        {/* content */}
        <div className="overflow-y-auto">
          {/* avatar */}
          <div className="my-4">
            <div className="flex justify-center">
              <Avatar className="h-30 w-30">
                <AvatarImage src="https://avatars.githubusercontent.com/u/109642163?v=4" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
            </div>
            <div className="p-4">
              <h3 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
                落秋cc
              </h3>
              <p className="py-2">
                👋🏻
                Hi！这里是落秋cc，硕士在读，计算机网络方向，专注于高性能网络技术。熟悉
                P4 可编程数据平面，DPDK
                高速数据包处理，NS3网络仿真工具，当前主要聚焦于网络传输协议及性能优化相关工作。
              </p>
            </div>
          </div>

          {/* work */}
          <div className="my-4 px-4">
            <h3 className="mb-4 font-semibold tracking-tight">我参与的工作</h3>
            <a
              href="https://dl.acm.org/doi/10.1007/978-981-95-8408-6_28"
              target="_blank"
            >
              <Item variant="muted" className="my-4">
                <ItemMedia variant="icon">
                  <ScrollText />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    Mitigating Hash Polarization with Flow-Level Load Balancing
                    in Leaf-Spine Data Center Network.
                  </ItemTitle>
                  <ItemDescription>
                    Algorithms and Architectures for Parallel Processing: 25th
                    International Conference, ICA3PP 2025
                  </ItemDescription>
                </ItemContent>
              </Item>
            </a>

            <a
              href="https://link.springer.com/chapter/10.1007/978-981-95-8420-8_40"
              target="_blank"
            >
              <Item variant="muted" className="my-4">
                <ItemMedia variant="icon">
                  <ScrollText />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>
                    SMAR: Short-Flow Multi-path Adaptive Routing for
                    Heterogeneous RDMA Workloads
                  </ItemTitle>
                  <ItemDescription>
                    Algorithms and Architectures for Parallel Processing: 25th
                    International Conference, ICA3PP 2025
                  </ItemDescription>
                </ItemContent>
              </Item>
            </a>

            <Item variant="muted" className="my-4">
              <ItemMedia variant="icon">
                <ScrollText />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  Switch-Transparent Load Balancing for RDMA Data Centers: A
                  Host-Only Approach
                </ItemTitle>
                <ItemDescription>
                  IEEE/ACM International Symposium on Quality of Service (IWQoS)
                  2026
                </ItemDescription>
              </ItemContent>
            </Item>
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
