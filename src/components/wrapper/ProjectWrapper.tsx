import type { Project } from "./card/types"
import { ProjectCard } from "./card/ProjectCard"

interface Props {
  projects: Project[]
}

function ProjectWrapper({ projects }: Props) {
  return projects.map((project) => (
    <ProjectCard key={project.title} project={project} />
  ))
}

export { ProjectWrapper }
