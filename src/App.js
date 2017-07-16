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
    this.setState(state => ({
      books: state.books.map(b => b.id === book.id ? book : b)
    }));

    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp