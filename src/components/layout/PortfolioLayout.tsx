import type { ReactNode } from 'react'
import type { Page } from '../../router/pages'
import SiteNav from './SiteNav'

type PortfolioLayoutProps = {
    activePage: Page
    variant?: 'sidebar' | 'single'
    sidebar?: ReactNode
    children: ReactNode
}

function PortfolioLayout({
    activePage,
    variant = 'sidebar',
    sidebar,
    children,
}: PortfolioLayoutProps) {
    const bodyClass =
        variant === 'single' ? 'portfolio-body portfolio-body--single' : 'portfolio-body'

    return (
        <main className="portfolio-page">
            <header className="site-header">
                <SiteNav activePage={activePage} />
            </header>

            <div className={bodyClass}>
                {variant === 'sidebar' && sidebar ? (
                    <aside className="sidebar">{sidebar}</aside>
                ) : null}
                <section className="content">{children}</section>
            </div>
        </main>
    )
}

export default PortfolioLayout
