import { AspectRatio } from '@/components/ui/aspect-ratio'

const DEFAULT_DESCRIPTION = 'IMAGE_HF32O5GDFG7FSDGFDS0908GFDSG54KIUY32'

interface Props {
  url: string
  description?: string
  ratio?: number
}

export default function Image({
  url,
  description = DEFAULT_DESCRIPTION,
  ratio = 16 / 9,
}: Props) {
  return (
    <div>
      <AspectRatio ratio={ratio}>
        <img
          src={url}
          alt={description}
          className="w-full h-full rounded-md object-cover"
        />
      </AspectRatio>
      {description != DEFAULT_DESCRIPTION && (
        <p className="text-sm text-muted-foreground mt-2 italic">
          {description}
        </p>
      )}
    </div>
  )
}
