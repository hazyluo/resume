import { Link } from 'react-router-dom'
import type { ProjectItem } from '../types/resume'
import { TagList } from './TagList'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const paperHref = project.links.paper
    ? project.links.paper.startsWith('http')
      ? project.links.paper
      : `${import.meta.env.BASE_URL}${project.links.paper.replace(/^\//, '')}`
    : ''
  const projectHref = project.links.project
    ? project.links.project.startsWith('http') || project.links.project === '#'
      ? project.links.project
      : `${import.meta.env.BASE_URL}${project.links.project.replace(/^\//, '')}`
    : ''

  return (
    <article className="project-card">
      <div className="project-card-head">
        <h3>{project.title}</h3>
        <div className="project-card-links">
          {paperHref ? (
            <a href={paperHref} target="_blank" rel="noreferrer">
              论文 PDF
            </a>
          ) : null}
          {projectHref ? (
            <a href={projectHref} target={projectHref === '#' ? undefined : '_blank'} rel="noreferrer">
              项目链接
            </a>
          ) : null}
          <Link className="project-detail-link" to={`/projects/${project.slug}`}>
            查看详情
          </Link>
        </div>
      </div>
      <p>{project.summary}</p>
      <div className="project-print-details">
        {project.responsibilities.length || project.details.length ? (
          <ul>
            {project.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <TagList items={project.techStack} />
    </article>
  )
}
