import PortfolioLayout from '../components/layout/PortfolioLayout'
import NewsSection from '../components/home/NewsSection'

function NewsPage() {
    return (
        <PortfolioLayout activePage="news" variant="single">
            <p className="lead">News &amp; updates</p>
            <NewsSection />
        </PortfolioLayout>
    )
}

export default NewsPage
