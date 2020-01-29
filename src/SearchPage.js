import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI'


class SearchPage extends Component {

    state = {
        query: '',
        books: [],
        error: false
    }

    search = (event) => {
        const query = event.target.value;
        this.setState({query});
        if(query){
            BooksAPI.search(query)
                .then(response => {
                    response.length > 0
                    ? this.setState({books: response, error: false})
                    : this.setState({books: [], error: true})
                });
        } else {
            this.setState({ query: '', books: [], error: false })
        }
    };

    render() {

        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.search} />
                    </div>
                </div>

                <div className="search-books-results">
                    {this.state.books.length > 0 && (
                        <ol className="books-grid">
                            {this.state.books.map(book => 
                                <li key={book.id}>
                                    <Book book={book} handleShelfChange={this.props.handleShelfChange} bookCase={this.props.bookCase} />
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

export default SearchPage;