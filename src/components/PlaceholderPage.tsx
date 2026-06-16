type PlaceholderPageProps = {
    title: string
    message?: string
}

function PlaceholderPage({
    title,
    message = 'Coming soon.',
}: PlaceholderPageProps) {
    return (
        <main className="placeholder-page">
            <h1>{title}</h1>
            <p>{message}</p>
            <a href="#/home">Go to Home</a>
        </main>
    )
}

export default PlaceholderPage
