import { Navigate, Link, useParams } from 'react-router-dom'
import { TagList } from '../components/TagList'
import { resumeData } from '../utils/resume'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = resumeData.projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <main className="resume-shell detail-shell">
      <Link to="/" className="back-link">
        返回首页
      </Link>

      <article className="detail-card">
        <header className="detail-head">
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </header>

        <section className="detail-section">
          <h2>技术栈</h2>
          <TagList items={project.techStack} />
        </section>

        <section className="detail-section">
          <h2>职责</h2>
          {project.responsibilities.length ? (
            <ul>
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-hint">暂无职责说明</p>
          )}
        </section>

        <section className="detail-section">
          <h2>结果与亮点</h2>
          {project.details.length ? (
            <ul>
              {project.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-hint">暂无详细描述</p>
          )}
        </section>

        <section className="detail-section">
          <h2>相关链接</h2>
          <div className="link-row">
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                在线演示
              </a>
            ) : null}
            {project.links.repo ? (
              <a href={project.links.repo} target="_blank" rel="noreferrer">
                源码仓库
              </a>
            ) : null}
            {!project.links.demo && !project.links.repo ? (
              <p className="empty-hint">暂无外部链接</p>
            ) : null}
          </div>
        </section>
      </article>
    </main>
  )
}
