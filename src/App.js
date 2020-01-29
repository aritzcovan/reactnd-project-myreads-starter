import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import SearchButton from './SearchButton';
import BookCase from './BookCase';
import './App.css'
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    CR: 'currentlyReading',
    R: 'read',
    WTR: 'wantToRead'
  }
  responseFilter = (list, filterVal) => (list.filter(item => (item.shelf === filterVal)));

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    BooksAPI.getAll()
      .then((response) => {
        this.setAssignment(this.state.CR, this.responseFilter(response, this.state.CR));
        this.setAssignment(this.state.R, this.responseFilter(response, this.state.R));
        this.setAssignment(this.state.WTR, this.responseFilter(response, this.state.WTR));
      });
  }

  setAssignment = (prop, books) => {
    this.setState(currState => ({
      ...currState, books: {
        ...currState.books, [prop]: books
      }
    }))
  }

  onShelfChange = (book, newShelf) => {
    //console.log(`${newShelf} ${book.id}`);
    BooksAPI.update(book, newShelf)
      .then(response => {
        this.loadData();
      });
  }


  render() {
    return (
      <div className="app">
        
        <Route path='/' exact render={() =>(
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

        <Route path='/search' component={SearchPage} />

      </div>
    );
  }
}

export default BooksApp
