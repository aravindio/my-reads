import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  state = {
    query: "",
    books: []
  }

  getBooks = query => {
    if (query.length) {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then(books => {
        this.setState({ books });
      })
    } else {
      this.setState({ query, books: [] })
    }
  }

  render() {
    const { query, books} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => this.getBooks(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(books) && books.map(book => (
              <Book
                key={book.id}
                book={book}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks