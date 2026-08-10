import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function NavAvatar() {
  return (
    <Avatar className="h-30 w-30">
      <AvatarImage src="https://avatars.githubusercontent.com/u/109642163?v=4" />
      <AvatarFallback>L</AvatarFallback>
    </Avatar>
  )
}

export { NavAvatar }
