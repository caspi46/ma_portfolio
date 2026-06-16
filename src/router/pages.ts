export type Page = 'home' | 'blog' | 'post' | 'news' | 'projects' | 'hobby' | 'songs'

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

export const ROUTES = {
    home: '#/home',
    blog: '#/blog',
    news: '#/news',
    projects: '#/projects',
    hobby: '#/hobby',
    songs: '#/hobby/songs',
} as const

export function getHashPath(): string {
    const hash = window.location.hash
    if (!hash || hash === '#') {
        return '/home'
    }

    const path = hash.startsWith('#') ? hash.slice(1) : hash
    return path.startsWith('/') ? path.toLowerCase() : `/${path.toLowerCase()}`
}

export function readPageFromHash(): Page {
    const path = getHashPath()

    if (/^\/blog\/[^/]+/.test(path)) {
        return 'post'
    }
    if (path === '/blog' || path.startsWith('/blog/')) {
        return 'blog'
    }
    if (path === '/news') {
        return 'news'
    }
    if (path === '/projects') {
        return 'projects'
    }
    if (path === '/hobby/songs') {
        return 'songs'
    }
    if (path === '/hobby') {
        return 'hobby'
    }
    if (path === '/home') {
        return 'home'
    }

    return 'home'
}

export function navigateToHash(route: string): void {
    const path = route.startsWith('#') ? route.slice(1) : route
    const normalized = path.startsWith('/') ? path : `/${path}`

    if (window.location.hash === `#${normalized}`) {
        window.dispatchEvent(new HashChangeEvent('hashchange'))
        return
    }

    window.location.hash = normalized
}

export function readPostSlugFromHash(): string | null {
    const path = getHashPath()
    const match = path.match(/^\/blog\/([^/]+)/i)
    if (!match) return null
    return decodeURIComponent(match[1])
}
