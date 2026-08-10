import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="mt-16 bg-accent">
      <Empty className="h-48">
        <EmptyHeader>
          <EmptyTitle>😋🤣⚡😍😭😅💥😇❓</EmptyTitle>
          <EmptyDescription>&copy; {year} 落秋cc</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}

export { Footer }
