import React, { Component } from 'react';
import BookCaseShelf from './BookCaseShelf';

class BookCase extends Component {

    render() {

        const { currentlyReading, wantToRead, read } = this.props.books;
        
        return (
            <div>
                <BookCaseShelf books={currentlyReading} shelfTitle="Reading" handleShelfChange={this.props.handleShelfChange} />
                <BookCaseShelf books={wantToRead} shelfTitle="Want to Read" handleShelfChange={this.props.handleShelfChange} />
                <BookCaseShelf books={read} shelfTitle="Read" handleShelfChange={this.props.handleShelfChange} />
            </div>
        );
    }

}

export default BookCase;