import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import propTypes from 'prop-types';
import { throttle, debounce } from 'throttle-debounce';

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.searchDebounced = debounce(500, this.search);
        this.searchThrottled = throttle(500, this.search);
    }

    state = {
        query: '',
        books: [],
        error: false
    }

    onTextChange = (event) => {
        const query = event.target.value;
        this.setState({ query: query }, () => {
            if (query.endsWith(' ')) {
                this.searchThrottled(query.trim());
            } else {
                this.searchDebounced(query.trim());
            }
        });
    }

    search = () => {
        if (this.state.query && this.state.query.length > 0) {
            BooksAPI.search(this.state.query)
                .then(response => {
                    response.length > 0
                        ? this.setState({ books: response, error: false })
                        : this.setState({ books: [], error: true })
                });
        } else {
            this.setState({ books: [], error: false })
        }
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onTextChange} />
                    </div>
                </div>

                <div className="search-books-results">
                    {this.state.books.length > 0 && (
                        <ol className="books-grid">
                            {this.state.books.map(book =>
                                <li key={book.id}>
                                    <Book book={book} handleShelfChange={this.props.handleShelfChange} allBooks={this.props.books} />
                                </li>
                            )}
                        </ol>
                    )}
                    {this.state.error && (
                        <h3>no book found! try again.</h3>
                    )}
                </div>
            </div>
        );
    }
}

SearchPage.PropTypes = {
    handleShelfChange: propTypes.func.isRequired,
    allBooks: propTypes.array.isRequired
}
export default SearchPage;