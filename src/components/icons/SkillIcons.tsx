import type { ReactNode } from 'react'

type IconProps = {
    className?: string
    title?: string
}

function Svg({
    className,
    title,
    children,
    viewBox,
}: {
    className?: string
    title?: string
    children: ReactNode
    viewBox: string
}) {
    const labelled = Boolean(title)
    return (
        <svg
            className={className}
            viewBox={viewBox}
            width={24}
            height={24}
            role={labelled ? 'img' : undefined}
            aria-label={labelled ? title : undefined}
            aria-hidden={labelled ? undefined : true}
            focusable="false"
        >
            {children}
        </svg>
    )
}

// Note: These are simplified, single-color marks designed to read well at 16–18px.
// They use `currentColor` so they match the card text.

export function CppIcon({ className, title = 'C++' }: IconProps) {
    return (
        <Svg className={className} title={title} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12 2.2 3.6 7.1v9.8L12 21.8l8.4-4.9V7.1L12 2.2Zm0 2.1 6.6 3.8v7.6L12 19.5l-6.6-3.8V8.1L12 4.3Z"
            />
            <path
                fill="currentColor"
                d="M10.7 9.1c-1.4 0-2.6 1.2-2.6 2.9s1.2 2.9 2.6 2.9c.7 0 1.4-.3 1.8-.8l1.1 1.1c-.8.8-1.8 1.3-2.9 1.3-2.3 0-4.1-1.9-4.1-4.5s1.8-4.5 4.1-4.5c1.1 0 2.2.4 2.9 1.3l-1.1 1.1c-.4-.5-1.1-.8-1.8-.8Z"
            />
            <path
                fill="currentColor"
                d="M15.2 10h1v1.3h1.3v1h-1.3v1.3h-1v-1.3h-1.3v-1h1.3V10Zm3.1 0h1v1.3h1.3v1h-1.3v1.3h-1v-1.3H17v-1h1.3V10Z"
            />
        </Svg>
    )
}

export function RustIcon({ className, title = 'Rust' }: IconProps) {
    return (
        <Svg className={className} title={title} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M13.1 2.7 12 1.5l-1.1 1.2-1.6-.4-.4 1.6-1.6.4.4 1.6-1.2 1.1 1.2 1.1-.4 1.6 1.6.4.4 1.6 1.6-.4L12 22.5l1.1-1.2 1.6.4.4-1.6 1.6-.4-.4-1.6 1.2-1.1-1.2-1.1.4-1.6-1.6-.4-.4-1.6-1.6.4L13.1 2.7ZM12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Z"
                opacity="0.95"
            />
            <path
                fill="currentColor"
                d="M9.2 9.6h3.1c1.6 0 2.7.9 2.7 2.4 0 1.1-.6 1.9-1.6 2.2l1.6 2.2h-1.7l-1.4-2H10.6v2H9.2V9.6Zm3 3.5c.8 0 1.3-.4 1.3-1.1 0-.7-.5-1.1-1.3-1.1h-1.6v2.2h1.6Z"
            />
        </Svg>
    )
}

export function PythonIcon({ className, title = 'Python' }: IconProps) {
    return (
        <Svg className={className} title={title} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12.1 2.3c-3 0-2.8 1.3-2.8 1.3l.01 1.35h2.86v.41H8.1S6 5.2 6 8.6c0 3.4 1.8 3.28 1.8 3.28h1.08V10.4s-.06-1.8 1.78-1.8h3.06s1.72.03 1.72-1.66V4.0S15.7 2.3 12.1 2.3Zm-1.58 1.2a.64.64 0 1 1-.64.64c0-.35.29-.64.64-.64Z"
                opacity="0.95"
            />
            <path
                fill="currentColor"
                d="M12 21.7c3 0 2.8-1.3 2.8-1.3l-.01-1.35h-2.86v-.41H16s2.1-.78 2.1-4.18c0-3.4-1.8-3.28-1.8-3.28h-1.08v1.49s.06 1.8-1.78 1.8h-3.06s-1.72-.03-1.72 1.66V20s.72 1.7 3.34 1.7Zm1.58-1.2a.64.64 0 1 1 .64-.64c0 .35-.29.64-.64.64Z"
                opacity="0.95"
            />
        </Svg>
    )
}

export function TypeScriptIcon({ className, title = 'TypeScript' }: IconProps) {
    return (
        <Svg className={className} title={title} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M3 3h18v18H3V3Zm9.1 4.7H6.6v1.7h2v7.9h1.9V9.4h1.6V7.7Zm6.9 3.3c-.4-1.3-1.6-1.9-3.1-1.9-1.8 0-3.1 1-3.1 2.6 0 1.6 1.3 2.1 2.6 2.6.9.3 1.8.6 1.8 1.3 0 .6-.6 1-1.4 1-1 0-1.6-.5-1.9-1.3l-1.6.9c.6 1.6 1.9 2.3 3.5 2.3 2.1 0 3.4-1.1 3.4-2.9 0-1.7-1.3-2.3-2.6-2.7-1-.4-1.9-.6-1.9-1.2 0-.5.5-.8 1.2-.8.7 0 1.2.3 1.5.9l1.6-.8Z"
            />
        </Svg>
    )
}

