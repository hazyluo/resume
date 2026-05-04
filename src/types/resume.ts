export interface Profile {
  name: string
  title: string
  summary: string
  avatar: string
  location: string
}

export interface SkillItem {
  name: string
  level: string
  tags: string[]
}

export interface ProjectLinks {
  demo?: string
  repo?: string
  paper?: string
  project?: string
}

export interface ProjectItem {
  slug: string
  title: string
  summary: string
  responsibilities: string[]
  techStack: string[]
  links: ProjectLinks
  details: string[]
  featured: boolean
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  details: string[]
}

export interface Contact {
  email: string
  phone: string
  github: string
  linkedin: string
  website: string
}

export interface ResumeData {
  profile: Profile
  skills: SkillItem[]
  projects: ProjectItem[]
  experience: ExperienceItem[]
  education: EducationItem[]
  contact: Contact
}
