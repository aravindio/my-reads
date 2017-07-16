import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBook = (book, shelf) => {
    let bookIds = this.state.books.map(b => b.id)
    if (bookIds.indexOf(book.id) === -1) {
      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
    } else {
      this.setState(state => ({
        books: state.books.map(b => b.id === book.id ? book : b)
      }));
    }

    BooksAPI.update(book, shelf);
  }

  render() {
    const { books } = this.state
    const updateBook = this.updateBook
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={books}
            updateBook={updateBook}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            updateBook={updateBook}
            bookIds={books.map(b => b.id)}
            bookShelves={books.map(b => b.shelf)}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp