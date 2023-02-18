import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({searchTerm,setSearchTerm}) => {
    const navigate = useNavigate();

    return (
    <div className='search-box'>
        <input type="text" 
            onChange={(e)=> setSearchTerm(e.target.value)}
            placeholder="Search here"
            value={searchTerm}
            onFocus={()=> navigate('/search')}
        />
    </div>
  )
}

export default SearchBar