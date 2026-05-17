import type { CollectionEntry } from "astro:content"
import { MomentCard } from "@/components/moment-card"

interface Props {
  moments: CollectionEntry<"moments">[]
}

function MomentCardWrapper({ moments }: Props) {
  return moments.map((moment) => (
    <div key={moment.id}>
      <MomentCard moment={moment} />
    </div>
  ))
}

export { MomentCardWrapper }
