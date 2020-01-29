import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import SearchButton from './SearchButton';
import BookCase from './BookCase';
import './App.css'
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll()
      .then((response) => {
        this.setState({ books: response });
      });
  }

  onShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(response => {
        book.shelf = newShelf;
        this.setState(currState => ({
          books: currState.books.filter(b => b.id !== book.id).concat(book)
        }))
      });
  }

  render() {
    return (
      <div className="app">
        {/* Home Component */}
        <Route path='/' exact render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {/* bookcase */}
                <BookCase books={this.state.books} handleShelfChange={this.onShelfChange} />
              </div>
            </div>
            {/* button */}
            <SearchButton />
          </div>
        )} />

        {/* Search Component */}
        <Route path='/search' render={() => (
          <SearchPage handleShelfChange={this.onShelfChange} books={this.state.books}  />
        )} />

      </div>
    );
  }
}

export default BooksApp
