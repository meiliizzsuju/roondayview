import React from 'react';

import './searchbar.css';

const SearchBar = () => {
    const setSearchTerm = (event) =>{
        console.log('log search term:',event)
    }

    return (
    <div className='searchbar'>
        <div className='searchbar__container'>
            <input type='search' placeholder='Search Here'
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default SearchBar