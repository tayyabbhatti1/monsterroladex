import React from 'react';
import '../search-box/search-box.style.css'

const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div>
            <input className ='search-box' type='search' 
            placeholder={placeholder}
            onChange={handleChange} 
            />
        </div>
    )
}

export default SearchBox;