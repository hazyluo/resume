import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { TagList } from '../components/TagList'
import { Timeline } from '../components/Timeline'
import { resumeData } from '../utils/resume'

export function HomePage() {
  const featuredProjects = resumeData.projects.filter((project) => project.featured)
  const otherProjects = resumeData.projects.filter((project) => !project.featured)

  return (
    <main className="resume-shell">
      <header className="profile-card">
        {resumeData.profile.avatar ? (
          <img
            className="profile-avatar"
            src={resumeData.profile.avatar}
            alt={`${resumeData.profile.name} 的头像`}
          />
        ) : null}
        <p className="profile-title">{resumeData.profile.title}</p>
        <h1>{resumeData.profile.name}</h1>
        <p className="profile-location">{resumeData.profile.location}</p>
        <p className="profile-summary">{resumeData.profile.summary}</p>
      </header>

      <Section id="skills" title="核心技能" subtitle="Agent 编排、RAG、评测迭代与数据工程能力">
        <div className="skills-grid">
          {resumeData.skills.length ? (
            resumeData.skills.map((skill) => (
              <article key={skill.name} className="skill-card">
                <div className="skill-head">
                  <h3>{skill.name}</h3>
                  <span>{skill.level}</span>
                </div>
                <TagList items={skill.tags} />
              </article>
            ))
          ) : (
            <p className="empty-hint">暂无技能信息</p>
          )}
        </div>
      </Section>

      <Section id="projects" title="项目经历" subtitle="点击项目可查看详细经历">
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {otherProjects.length ? (
          <>
            <h3 className="subheading">更多经历</h3>
            <div className="project-grid">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        ) : null}
      </Section>

      <Section id="experience" title="实习经历">
        <Timeline entries={resumeData.experience} />
      </Section>

      <Section id="education" title="教育背景">
        <Timeline entries={resumeData.education} />
      </Section>

      <Section id="contact" title="联系方式">
        <ul className="contact-list">
          {resumeData.contact.email ? (
            <li>
              <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
            </li>
          ) : null}
          {resumeData.contact.phone ? (
            <li>
              <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a>
            </li>
          ) : null}
          {resumeData.contact.github ? (
            <li>
              <a href={resumeData.contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          ) : null}
          {resumeData.contact.linkedin ? (
            <li>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          ) : null}
          {resumeData.contact.website ? (
            <li>
              <a href={resumeData.contact.website} target="_blank" rel="noreferrer">
                个人网站
              </a>
            </li>
          ) : null}
        </ul>
      </Section>
    </main>
  )
}
