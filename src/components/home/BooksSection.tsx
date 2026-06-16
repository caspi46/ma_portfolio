import { BOOKS } from '../../data/home'

function BooksSection() {
    return (
        <>
            <h2 className="section-title">Books I&apos;m Reading</h2>
            <ul className="book-list">
                {BOOKS.map((book) => (
                    <li key={book.title} className="book-list-item">
                        <p className="book-entry">
                            <span className="book-title">{book.title}</span>
                            <span className="book-author"> — {book.author}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BooksSection
