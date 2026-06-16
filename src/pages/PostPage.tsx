import { getPostBySlug } from '../blog/posts'
import PortfolioLayout from '../components/layout/PortfolioLayout'
import { renderSimpleMarkdown } from '../lib/markdown'
import { readPostSlugFromHash } from '../router/pages'

function PostPage() {
    const slug = readPostSlugFromHash()
    const post = slug ? getPostBySlug(slug) : undefined

    if (!slug || !post) {
        return (
            <PortfolioLayout activePage="blog" variant="single">
                <h2 className="section-title">Post not found</h2>
                <p className="post-meta">
                    That post doesn&apos;t exist yet. Go back to the blog list.
                </p>
                <a className="post-back" href="#/blog">
                    ← Back to Blog
                </a>
            </PortfolioLayout>
        )
    }

    return (
        <PortfolioLayout activePage="blog" variant="single">
            <article className="post">
                <a className="post-back" href="#/blog">
                    ← Back to Blog
                </a>
                <header className="post-header">
                    <h1 className="post-title">{post.title}</h1>
                    <p className="post-date">{post.date.toLocaleDateString()}</p>
                </header>
                <div
                    className="post-body"
                    dangerouslySetInnerHTML={{ __html: renderSimpleMarkdown(post.body) }}
                />
            </article>
        </PortfolioLayout>
    )
}

export default PostPage
