import React from 'react';
import { Link } from 'react-router-dom';

const SearchButton = () => {
    return (
        <div className="open-search">
            {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
            {/* <button to='/search'>Add a book</button> */}
            <Link to="/search">Add a book</Link>
        </div>
    );
}
export default SearchButton;