import type { CollectionEntry } from "astro:content"
import { MomentCard } from "./card/MomentCard"

interface Props {
  moments: CollectionEntry<"moments">[]
}

function MomentCardWrapper({ moments }: Props) {
  return moments.map((moment) => <MomentCard key={moment.id} moment={moment} />)
}

export { MomentCardWrapper }
