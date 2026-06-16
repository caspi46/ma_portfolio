import SongTable from '../components/hobby/SongTable'
import HashLink from '../components/HashLink'
import PortfolioLayout from '../components/layout/PortfolioLayout'
import { getSongsNewestFirst } from '../data/hobby'
import { ROUTES } from '../router/pages'

function SongRecommendationsPage() {
    return (
        <PortfolioLayout activePage="songs" variant="full">
            <HashLink to={ROUTES.hobby} className="post-back">
                ← Back to Hobby
            </HashLink>

            <SongTable songs={getSongsNewestFirst()} fullWidth />
        </PortfolioLayout>
    )
}

export default SongRecommendationsPage
