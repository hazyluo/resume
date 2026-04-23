import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}
