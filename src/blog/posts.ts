export type BlogPost = {
    slug: string
    title: string
    excerpt: string
    date: Date
    body: string
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'making-a-portfolio-website',
        title: 'Making a Portfolio Website',
        date: new Date('2026-04-21'),
        excerpt: "I made a portfolio website using React and TypeScript. Here's what I learned.",
        body: `I'll expand this post soon.`,
    },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug)
}

