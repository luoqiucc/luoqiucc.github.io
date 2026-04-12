import { AspectRatio } from "@/components/ui/aspect-ratio"

const DEFAULT_DESCRIPTION = "IMAGE_HF32O5GDFG7FSDGFDS0908GFDSG54KIUY32"

interface Props {
  url: string
  description?: string
  ratio?: number
}

function MdxImage({
  url,
  description = DEFAULT_DESCRIPTION,
  ratio = 16 / 9,
}: Props) {
  return (
    <div>
      <AspectRatio ratio={ratio} className="rounded-md bg-muted">
        <img
          src={url}
          alt={description}
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
      {description != DEFAULT_DESCRIPTION && (
        <p className="mt-2 text-sm text-muted-foreground italic">
          {description}
        </p>
      )}
    </div>
  )
}

export { MdxImage }
