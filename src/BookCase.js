import React, { Component } from 'react';
import BookCaseShelf from './BookCaseShelf';

class BookCase extends Component {

    render() {
        const allBooks = this.props.books;
        const { currentlyReading, wantToRead, read } = this.props.books;

        return (
            <div>
                <BookCaseShelf books={currentlyReading} shelfTitle="Reading" handleShelfChange={this.props.handleShelfChange} bookCase={allBooks} />
                <BookCaseShelf books={wantToRead} shelfTitle="Want to Read" handleShelfChange={this.props.handleShelfChange} bookCase={allBooks} />
                <BookCaseShelf books={read} shelfTitle="Read" handleShelfChange={this.props.handleShelfChange} bookCase={allBooks} />
            </div>
        );
    }

}

export default BookCase;