import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {
  render() {
    const { books, updateBook } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={books.filter(book => book.shelf === "currentlyReading")}
              updateBook={updateBook}
            />
            <Bookshelf
              title="Want to Read"
              books={books.filter(book => book.shelf === "wantToRead")}
              updateBook={updateBook}
            />
            <Bookshelf
              title="Read"
              books={books.filter(book => book.shelf === "read")}
              updateBook={updateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks