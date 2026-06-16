function escapeHtml(text: string): string {
    return text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

/** Minimal rendering: headings + paragraphs. No HTML passthrough. */
export function renderSimpleMarkdown(text: string): string {
    const lines = text.replaceAll('\r\n', '\n').split('\n')
    const out: string[] = []

    for (const raw of lines) {
        const line = raw.trimEnd()
        if (!line.trim()) continue

        if (line.startsWith('### ')) {
            out.push(`<h3>${escapeHtml(line.slice(4))}</h3>`)
            continue
        }
        if (line.startsWith('## ')) {
            out.push(`<h2>${escapeHtml(line.slice(3))}</h2>`)
            continue
        }
        if (line.startsWith('# ')) {
            out.push(`<h1>${escapeHtml(line.slice(2))}</h1>`)
            continue
        }

        out.push(`<p>${escapeHtml(line)}</p>`)
    }

    return out.join('\n')
}
