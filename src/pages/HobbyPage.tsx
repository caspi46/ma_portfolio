import SongRecommendationsSection from '../components/hobby/SongRecommendationsSection'
import PortfolioLayout from '../components/layout/PortfolioLayout'

function HobbyPage() {
    return (
        <PortfolioLayout activePage="hobby" variant="single">
            <p className="lead">Hobbies &amp; interests</p>

            <SongRecommendationsSection />
        </PortfolioLayout>
    )
}

export default HobbyPage
