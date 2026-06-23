import type { ComponentType } from 'react'
import { DocumentIcon, GitHubIcon, LinkedInIcon } from '../components/icons/SocialBrandIcons'

type IconComponent = ComponentType<{ className?: string }>

export type ContactLink = {
    label: string
    href: string
    icon: IconComponent
}

export type EducationEntry = {
    degree: string
    school: string
    period: string
}

export const EDUCATION: EducationEntry[] = [
    {
        degree: 'B.S. Software Engineering',
        school: 'University of California, Irvine',
        period: 'Sep 2023 – Jun 2026',
    },
    {
        degree: 'M.S. Computer Science',
        school: 'University of California, Irvine',
        period: 'Sep 2026 – Jun 2028',
    },
]

export const RESUME = {
    href: `${import.meta.env.BASE_URL}resume.pdf`,
    label: 'Resume',
} as const

export const CONTACT_LINKS: ContactLink[] = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/kyung-ryun-kenny-kim-b0b104234/',
        icon: LinkedInIcon,
    },
    {
        label: 'GitHub',
        href: 'https://github.com/caspi46',
        icon: GitHubIcon,
    },
    {
        label: RESUME.label,
        href: RESUME.href,
        icon: DocumentIcon,
    },
]

export const SKILLS = ['C++', 'Rust', 'Python', 'TypeScript']

export const CS_INTERESTS = ['Compilers', 'PL Design', 'Program Analysis']
