import React, { Component } from 'react';

class Book extends Component {
    handleShelfChange = (event) => { this.props.handleShelfChange(this.props.book, event.target.value); }

    render() {
        let selectedShelf = 'none';
        const book = this.props.book;
        const bookCase = this.props.bookCase;
        

        //check if this book is currently in the book case and if so, set the proper shelf
        const allBooks = [...bookCase.currentlyReading, ...bookCase.read, ...bookCase.wantToRead];
        let match = allBooks.filter(bookInCase => bookInCase.id === book.id);
        
        if (match.length > 0) {
            selectedShelf = match[0].shelf;
        } else {
            selectedShelf = 'none';
        }
        
        //check to make sure we have a thumbnail image
        const bookCover = book.imageLinks && book.imageLinks.thumbnail
            ? book.imageLinks.thumbnail
            : 'no image'

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${bookCover})` }}></div>

                    <div className="book-shelf-changer">
                        <select value={selectedShelf} onChange={this.handleShelfChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {(book.authors && book.authors.length > 0) && (
                    <div className="book-authors">
                        <ul>
                            {book.authors.map((author, idx) =>
                                <li key={idx}>{author}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}
export default Book;