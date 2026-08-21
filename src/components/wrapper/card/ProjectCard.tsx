import type { Project } from "./types"
import { Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Props {
  project: Project
}

function ProjectCard({ project }: Props) {
  return (
    <Card className="relative pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={project.coverUrl}
        alt="cover"
        className="relative z-20 aspect-video w-full bg-black/35 object-cover"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{project.language}</Badge>
        </CardAction>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="h-16 overflow-y-auto">
        {project.abstract}
      </CardContent>
      <CardFooter>
        <a className="w-full" href={project.githubUrl} target="_blank">
          <Button className="w-full">
            <Package data-icon="inline-start" />
            Github
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}

export { ProjectCard }
