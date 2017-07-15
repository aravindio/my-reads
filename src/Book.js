import React from 'react'

class Book extends React.Component {
  render() {
    const { book } = this.props
    const styles = {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")`
    }
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={styles}></div>
            <div className="book-shelf-changer">
              <select>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {book.title && book.title}
          </div>
          <div className="book-authors">
            {book.authors && book.authors.join(", ")}
          </div>
        </div>
      </li>
    )
  }
}

export default Book