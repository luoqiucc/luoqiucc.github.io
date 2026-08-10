import { Separator } from "@/components/ui/separator"

import { ModeToggle } from "./nav-mode-toggle"
import { NavDrawer } from "./nav-drawer"

function Header() {
  return (
    <div className="mx-auto flex h-16 w-full max-w-5xl items-center p-2">
      <NavDrawer />
      <Separator className="mx-2 my-4" orientation="vertical" />
      <ModeToggle />
    </div>
  )
}

export { Header }
