import { useEffect, useState } from 'react'
import { type Page, readPageFromHash } from './pages'

export function useHashPage(): Page {
    const [page, setPage] = useState<Page>(readPageFromHash())

    useEffect(() => {
        const onHashChange = () => setPage(readPageFromHash())
        window.addEventListener('hashchange', onHashChange)

        if (!window.location.hash) {
            window.location.hash = '/home'
        }

        return () => window.removeEventListener('hashchange', onHashChange)
    }, [])

    return page
}
