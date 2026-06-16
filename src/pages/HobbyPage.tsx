import PortfolioLayout from '../components/layout/PortfolioLayout'

function HobbyPage() {
    return (
        <PortfolioLayout activePage="hobby" variant="single">
            <p className="lead">Hobbies &amp; interests</p>
            <h2 className="section-title">Coming soon</h2>
            <p className="news-item">
                This page will cover things I do outside of code — reading, side projects, and more.
            </p>
        </PortfolioLayout>
    )
}

export default HobbyPage
