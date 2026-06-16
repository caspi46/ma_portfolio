import PortfolioLayout from '../components/layout/PortfolioLayout'
import ProjectsSection from '../components/home/ProjectsSection'

function ProjectsPage() {
    return (
        <PortfolioLayout activePage="projects" variant="single">
            <p className="lead">Selected work</p>
            <ProjectsSection />
        </PortfolioLayout>
    )
}

export default ProjectsPage
