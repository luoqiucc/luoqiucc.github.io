import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/ModeToggle"
import { Nav } from "./nav"
import { ProfileDrawer } from "./profile-drawer"

function Header() {
  return (
    <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between p-2">
      <div className="flex">
        <Nav />
        <Separator className="m-2" orientation="vertical" />
        <ModeToggle />
      </div>
      <ProfileDrawer />
    </div>
  )
}

export { Header }
