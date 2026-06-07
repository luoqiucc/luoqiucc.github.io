import { AspectRatio } from "@/components/ui/aspect-ratio"

interface Props {
  url: string
}

function CoverImage({ url }: Props) {
  return (
    <div>
      <AspectRatio ratio={16 / 8} className="rounded-md bg-muted">
        <img
          src={url}
          alt="cover"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}

export { CoverImage }
