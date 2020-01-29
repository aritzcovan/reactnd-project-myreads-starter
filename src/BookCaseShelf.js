import React, { Component } from 'react';
import Book from './Book';


class BookCaseShelf extends Component {

    render() {
        const { books, shelfTitle, bookCase } = this.props;
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book book={book} handleShelfChange={this.props.handleShelfChange} bookCase={bookCase} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookCaseShelf;