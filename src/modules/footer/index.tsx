import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

function Footer() {
  return (
    <Empty className="h-56">
      <EmptyHeader>
        <EmptyTitle>落秋cc</EmptyTitle>
        <EmptyDescription>钱塘江上潮信来，今日方知我是我。</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="grid grid-cols-4 gap-2">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>FACEBOOK</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>BILIBILI</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>STEAM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>GITHUB</AvatarFallback>
          </Avatar>
        </div>
      </EmptyContent>
    </Empty>
  )
}

export { Footer }
