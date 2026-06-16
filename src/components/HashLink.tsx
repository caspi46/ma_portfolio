import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { navigateToHash } from '../router/pages'

type HashLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string
    children: ReactNode
}

function HashLink({ to, children, onClick, ...props }: HashLinkProps) {
    const href = to.startsWith('#') ? to : `#${to}`

    return (
        <a
            href={href}
            onClick={(event) => {
                event.preventDefault()
                navigateToHash(href)
                onClick?.(event)
            }}
            {...props}
        >
            {children}
        </a>
    )
}

export default HashLink
