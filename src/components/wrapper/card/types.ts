type ProjectLanguage = "C/C++" | "Java" | "JavaScript"

export interface Project {
  title: string
  abstract: string
  language: ProjectLanguage
  coverUrl: string
  githubUrl: string
}
