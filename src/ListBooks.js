import React from 'react'
import Bookshelf from './Bookshelf'

class ListBooks extends React.Component {
  render() {
    const { books } = this.props
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
            />
            <Bookshelf
              title="Want to Read"
              books={books.filter(book => book.shelf === "wantToRead")}
            />
            <Bookshelf
              title="Read"
              books={books.filter(book => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks