import { ProjectCard } from '../components/ProjectCard'
import { Section } from '../components/Section'
import { Timeline } from '../components/Timeline'
import { resumeData } from '../utils/resume'

export function HomePage() {
  const avatarSrc = resumeData.profile.avatar
    ? `${import.meta.env.BASE_URL}${resumeData.profile.avatar.replace(/^\//, '')}`
    : ''

  return (
    <main className="resume-shell">
      <header className="profile-card">
        <div className="profile-main-row">
          {avatarSrc ? (
            <img
              className="profile-avatar"
              src={avatarSrc}
              alt={`${resumeData.profile.name} 的头像`}
            />
          ) : null}
          <div className="profile-main-content">
            <ul className="profile-contact-list">
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
            <p className="profile-title">{resumeData.profile.title}</p>
            <h1>{resumeData.profile.name}</h1>
            <p className="profile-location">{resumeData.profile.location}</p>
          </div>
        </div>
        <p className="profile-summary">{resumeData.profile.summary}</p>
      </header>

      <Section id="education" title="学术背景">
        <Timeline entries={resumeData.education} />
      </Section>

      <Section id="experience" title="实习经历">
        <Timeline entries={resumeData.experience} />
      </Section>

      <Section id="projects" title="项目经历" subtitle="点击项目可查看详细经历">
        <div className="project-list">
          {resumeData.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </main>
  )
}
