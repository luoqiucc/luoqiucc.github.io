import type { CollectionEntry } from "astro:content"
import { AchievementCard } from "@/components/achievement-card"

interface Props {
  achievements: CollectionEntry<"achievements">[]
}

function AchievementCardWrapper({ achievements }: Props) {
  return achievements.map((achievement) => (
    <div key={achievement.id}>
      <AchievementCard achievement={achievement} />
    </div>
  ))
}

export { AchievementCardWrapper }
