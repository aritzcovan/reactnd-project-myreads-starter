import React, { Component } from 'react';
import Book from './Book';


class BookCaseShelf extends Component {

    render() {
        const { books, shelfTitle } = this.props;
        console.log(this.props);
        const theBooks =  books.map((book) => (
            <li key={book.id}>
                <Book book={book} handleShelfChange={this.props.handleShelfChange} />
            </li>
        ));

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                       {theBooks}
                     </ol>
                 </div>
            </div>
        );
    }
}

export default BookCaseShelf;