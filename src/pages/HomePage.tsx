import ProfileInfo from '../components/layout/ProfileInfo'
import ProfilePicture from '../components/layout/ProfilePicture'
import PortfolioLayout from '../components/layout/PortfolioLayout'
import BooksSection from '../components/home/BooksSection'
import ExperienceSection from '../components/home/ExperienceSection'
import NewsSection from '../components/home/NewsSection'
import ProjectsSection from '../components/home/ProjectsSection'
import { HOME_LEAD } from '../data/home'

function HomePage() {
    return (
        <PortfolioLayout
            activePage="home"
            sidebar={
                <>
                    <ProfilePicture />
                    <ProfileInfo />
                </>
            }
        >
            <p className="lead">{HOME_LEAD}</p>

            <NewsSection />
            <hr className="section-divider" />

            <ExperienceSection />
            <hr className="section-divider" />

            <ProjectsSection />
            <hr className="section-divider" />

            <BooksSection />
        </PortfolioLayout>
    )
}

export default HomePage
