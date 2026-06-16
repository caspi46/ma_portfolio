import { NEWS_ITEMS } from '../../data/home'

function NewsSection() {
    return (
        <>
            <h2 className="section-title">News</h2>
            {NEWS_ITEMS.map((item) => (
                <p key={item} className="news-item">
                    {item}
                </p>
            ))}
        </>
    )
}

export default NewsSection
