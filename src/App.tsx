import PlaceholderPage from './components/PlaceholderPage'
import BlogPage from './pages/BlogPage'
import HobbyPage from './pages/HobbyPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import PostPage from './pages/PostPage'
import ProjectsPage from './pages/ProjectsPage'
import { useHashPage } from './router/useHashPage'

function App() {
    const page = useHashPage()

    switch (page) {
        case 'home':
            return <HomePage />
        case 'hobby':
            return <HobbyPage />
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
