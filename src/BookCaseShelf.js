import React from 'react';
import Book from './Book';
import propTypes from 'prop-types';

const BookCaseShelf = (props) => {
    BookCaseShelf.PropTypes = {
        books: propTypes.array.isRequired,
        shelfTitle: propTypes.string.isRequired
    }

    const { books, shelfTitle } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} handleShelfChange={props.handleShelfChange} allBooks={books} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
export default BookCaseShelf;