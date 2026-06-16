import { BLOG_POSTS } from '../blog/posts'
import PortfolioLayout from '../components/layout/PortfolioLayout'

function BlogPage() {
    return (
        <PortfolioLayout activePage="blog" variant="single">
            <p className="lead">I Post Something Sometimes</p>

            <h2 className="section-title">Recent Posts</h2>
            <ul className="post-list">
                {BLOG_POSTS.map((post) => (
                    <li key={post.slug} className="post-list-item">
                        <div className="post-list-title-row">
                            <a className="post-link" href={`#/blog/${post.slug}`}>
                                {post.title}
                            </a>
                            <p className="post-meta">{post.date.toLocaleDateString()}</p>
                        </div>
                        <p className="post-excerpt">{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </PortfolioLayout>
    )
}

export default BlogPage
