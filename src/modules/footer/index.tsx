import { SocialBanner } from "@/components/banner/social-banner"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

function Footer() {
  return (
    <div className="mt-16">
      <Empty className="h-64">
        <EmptyHeader>
          <EmptyTitle>落秋cc</EmptyTitle>
          <EmptyDescription>钱塘江上潮信来，今日方知我是我。</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="grid grid-cols-4 gap-2"></div>
        </EmptyContent>
      </Empty>
      <SocialBanner />
    </div>
  )
}

export { Footer }
