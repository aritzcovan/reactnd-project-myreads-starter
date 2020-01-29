import React from 'react';
import BookCaseShelf from './BookCaseShelf';
import propTypes from 'prop-types';

const BookCase = (props) => {
    BookCase.PropTypes = {
        books: propTypes.array.isRequired,
        shelfTitle: propTypes.string.isRequired,
        handleShelfChange: propTypes.func.isRequired
    }
    
    const allBooks = props.books;
    const getBooksForShelf = (shelfName) => (
        allBooks.filter(book => book.shelf === shelfName)
    );

    return (
        <div>
            <BookCaseShelf books={getBooksForShelf('currentlyReading')} shelfTitle="Reading" handleShelfChange={props.handleShelfChange} />
            <BookCaseShelf books={getBooksForShelf('wantToRead')} shelfTitle="Want to Read" handleShelfChange={props.handleShelfChange} />
            <BookCaseShelf books={getBooksForShelf('read')} shelfTitle="Read" handleShelfChange={props.handleShelfChange} />
        </div>
    );
}
export default BookCase;