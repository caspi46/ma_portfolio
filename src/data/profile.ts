import type { ComponentType } from 'react'
import { CppIcon, PythonIcon, RustIcon, TypeScriptIcon } from '../components/icons/SkillIcons'
import { GitHubIcon, LinkedInIcon } from '../components/icons/SocialBrandIcons'

type IconComponent = ComponentType<{ className?: string }>

export type ContactLink = {
    label: string
    href: string
    icon: IconComponent
}

export type Skill = {
    label: string
    icon: IconComponent
}

export const EDUCATION = [
    'Software Engineering B.S. at University of California, Irvine (Sep 2023 - Jun 2026)',
]

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
]

export const SKILLS: Skill[] = [
    { label: 'C++', icon: CppIcon },
    { label: 'Rust', icon: RustIcon },
    { label: 'Python', icon: PythonIcon },
    { label: 'TypeScript', icon: TypeScriptIcon },
]

export const CS_INTERESTS = ['Compilers', 'PL Design', 'Program Analysis']
