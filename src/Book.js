import React, { Component } from 'react';

class Book extends Component {
    handleShelfChange = (event) => { this.props.handleShelfChange(this.props.book, event.target.value); }

    render() {
        const book = this.props.book;
        
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193 }}>
                        <img className="book-cover" style={{ width: 128, height: 193 }} src={book.imageLinks.thumbnail} alt="book"/>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={this.handleShelfChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
            </div>
        );
    }
}
export default Book;