import { Link } from 'react-router-dom'
import type { ProjectItem } from '../types/resume'
import { TagList } from './TagList'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-head">
        <h3>{project.title}</h3>
        <Link to={`/projects/${project.slug}`}>查看详情</Link>
      </div>
      <p>{project.summary}</p>
      <TagList items={project.techStack} />
    </article>
  )
}
