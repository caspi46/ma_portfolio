import { NAV_ITEMS, type Page } from '../../router/pages'

type SiteNavProps = {
    activePage: Page
}

function isNavItemActive(itemId: (typeof NAV_ITEMS)[number]['id'], activePage: Page): boolean {
    if (activePage === 'post' && itemId === 'blog') {
        return true
    }
    if (activePage === 'songs' && itemId === 'hobby') {
        return true
    }
    return itemId === activePage
}

function formatNavLabel(item: (typeof NAV_ITEMS)[number], active: boolean): string {
    return active ? `<${item.label}>` : item.label
}

function SiteNav({ activePage }: SiteNavProps) {
    return (
        <nav className="top-nav" aria-label="Main">
            {NAV_ITEMS.map((item) => {
                const active = isNavItemActive(item.id, activePage)
                return (
                    <a
                        key={item.id}
                        href={item.href}
                        className={active ? 'active' : undefined}
                        aria-current={active ? 'page' : undefined}
                    >
                        {formatNavLabel(item, active)}
                    </a>
                )
            })}
        </nav>
    )
}

export default SiteNav
