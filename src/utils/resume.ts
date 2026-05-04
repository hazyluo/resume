import rawResumeData from '../data/resume.json'
import type {
  Contact,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  ResumeData,
  SkillItem,
} from '../types/resume'

const defaultResumeData: ResumeData = {
  profile: {
    name: '未填写姓名',
    title: '求职者',
    summary: '请在 src/data/resume.json 中补充个人简介。',
    avatar: '',
    location: '未填写地区',
  },
  skills: [],
  projects: [],
  experience: [],
  education: [],
  contact: {
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    website: '',
  },
}

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null
}

const asText = (value: unknown, fallback = ''): string => {
  return typeof value === 'string' ? value : fallback
}

const asStringArray = (value: unknown): string[] => {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

const normalizeSkills = (value: unknown): SkillItem[] => {
  if (!Array.isArray(value)) return []

  return value.map((item) => {
    const parsed = isRecord(item) ? item : {}
    return {
      name: asText(parsed.name, '未命名技能'),
      level: asText(parsed.level, '待评估'),
      tags: asStringArray(parsed.tags),
    }
  })
}

const normalizeProjects = (value: unknown): ProjectItem[] => {
  if (!Array.isArray(value)) return []

  return value.map((item, index) => {
    const parsed = isRecord(item) ? item : {}
    const links = isRecord(parsed.links) ? parsed.links : {}

    return {
      slug: asText(parsed.slug, `project-${index + 1}`),
      title: asText(parsed.title, '未命名项目'),
      summary: asText(parsed.summary, '暂无项目摘要。'),
      responsibilities: asStringArray(parsed.responsibilities),
      techStack: asStringArray(parsed.techStack),
      links: {
        demo: asText(links.demo),
        repo: asText(links.repo),
        paper: asText(links.paper),
      },
      details: asStringArray(parsed.details),
      featured: Boolean(parsed.featured),
    }
  })
}

const normalizeExperience = (value: unknown): ExperienceItem[] => {
  if (!Array.isArray(value)) return []

  return value.map((item) => {
    const parsed = isRecord(item) ? item : {}
    return {
      company: asText(parsed.company, '未填写公司'),
      role: asText(parsed.role, '未填写职位'),
      period: asText(parsed.period, '未填写时间'),
      location: asText(parsed.location, '未填写地点'),
      highlights: asStringArray(parsed.highlights),
    }
  })
}

const normalizeEducation = (value: unknown): EducationItem[] => {
  if (!Array.isArray(value)) return []

  return value.map((item) => {
    const parsed = isRecord(item) ? item : {}
    return {
      school: asText(parsed.school, '未填写学校'),
      degree: asText(parsed.degree, '未填写学历'),
      period: asText(parsed.period, '未填写时间'),
      details: asStringArray(parsed.details),
    }
  })
}

const normalizeContact = (value: unknown): Contact => {
  const parsed = isRecord(value) ? value : {}

  return {
    email: asText(parsed.email),
    phone: asText(parsed.phone),
    github: asText(parsed.github),
    linkedin: asText(parsed.linkedin),
    website: asText(parsed.website),
  }
}

export const normalizeResumeData = (value: unknown): ResumeData => {
  if (!isRecord(value)) return defaultResumeData

  const profile = isRecord(value.profile) ? value.profile : {}

  return {
    profile: {
      name: asText(profile.name, defaultResumeData.profile.name),
      title: asText(profile.title, defaultResumeData.profile.title),
      summary: asText(profile.summary, defaultResumeData.profile.summary),
      avatar: asText(profile.avatar),
      location: asText(profile.location, defaultResumeData.profile.location),
    },
    skills: normalizeSkills(value.skills),
    projects: normalizeProjects(value.projects),
    experience: normalizeExperience(value.experience),
    education: normalizeEducation(value.education),
    contact: normalizeContact(value.contact),
  }
}

export const resumeData = normalizeResumeData(rawResumeData)
