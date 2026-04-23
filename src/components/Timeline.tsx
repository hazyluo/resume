import type { EducationItem, ExperienceItem } from '../types/resume'

interface TimelineProps {
  entries: Array<ExperienceItem | EducationItem>
}

export function Timeline({ entries }: TimelineProps) {
  if (!entries.length) {
    return <p className="empty-hint">暂无内容</p>
  }

  return (
    <ol className="timeline">
      {entries.map((entry) => {
        const key = `${entry.period}-${'company' in entry ? entry.company : entry.school}`
        const heading = 'company' in entry ? `${entry.role} · ${entry.company}` : `${entry.degree} · ${entry.school}`
        const secondary = 'company' in entry ? entry.location : ''
        const details = 'highlights' in entry ? entry.highlights : entry.details

        return (
          <li key={key} className="timeline-item">
            <div className="timeline-head">
              <h3>{heading}</h3>
              <span>{entry.period}</span>
            </div>
            {secondary ? <p className="timeline-secondary">{secondary}</p> : null}
            {details.length ? (
              <ul>
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-hint">暂无详细描述</p>
            )}
          </li>
        )
      })}
    </ol>
  )
}
