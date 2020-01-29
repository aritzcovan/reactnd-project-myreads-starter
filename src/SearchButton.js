import React from 'react';
import { Link } from 'react-router-dom';

const SearchButton = () => {
    return (
        <div className="open-search">
                <Link to="/search">
                    <button className="open-search-button"></button>    
                </Link>
        </div>
    );
}
export default SearchButton;