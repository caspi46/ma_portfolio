import { useEffect } from 'react'
import PlaceholderPage from './components/PlaceholderPage'
import BlogPage from './pages/BlogPage'
import HobbyPage from './pages/HobbyPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import PostPage from './pages/PostPage'
import ProjectsPage from './pages/ProjectsPage'
import SongRecommendationsPage from './pages/SongRecommendationsPage'
import { useHashPage } from './router/useHashPage'

function App() {
    const page = useHashPage()

    useEffect(() => {
        if (!window.location.hash) {
            window.location.hash = '/home'
        }
    }, [])

    switch (page) {
        case 'home':
            return <HomePage />
        case 'hobby':
            return <HobbyPage />
        case 'songs':
            return <SongRecommendationsPage />
        case 'blog':
            return <BlogPage />
        case 'post':
            return <PostPage />
        case 'news':
            return <NewsPage />
        case 'projects':
            return <ProjectsPage />
        default:
            return <PlaceholderPage title={`${page} page not found`} />
    }
}

export default App
