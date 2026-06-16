export type Page = 'home' | 'blog' | 'post' | 'news' | 'projects' | 'hobby'

export type NavItem = {
    id: Page
    label: string
    href: string
}

export const NAV_ITEMS: NavItem[] = [
    { id: 'blog', label: 'Blog', href: '#/blog' },
    { id: 'news', label: 'News', href: '#/news' },
    { id: 'home', label: 'Home', href: '#/home' },
    { id: 'projects', label: 'Projects', href: '#/projects' },
    { id: 'hobby', label: 'Hobby', href: '#/hobby' },
]

export function readPageFromHash(): Page {
    const hash = window.location.hash.toLowerCase()
    if (hash.match(/#\/blog\/[^/?#]+/i)) {
        return 'post'
    }
    if (hash.includes('/blog')) {
        return 'blog'
    }
    if (hash.includes('/news')) {
        return 'news'
    }
    if (hash.includes('/projects')) {
        return 'projects'
    }
    if (hash.includes('/hobby')) {
        return 'hobby'
    }
    return 'home'
}

export function readPostSlugFromHash(): string | null {
    const hash = window.location.hash || ''
    const match = hash.match(/#\/blog\/([^/?#]+)/i)
    if (!match) return null
    return decodeURIComponent(match[1])
}
