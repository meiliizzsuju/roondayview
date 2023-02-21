import { Container } from '@mui/material';
import React from 'react';
import SearchBar from './searchbar/SearchBar';


const Home = () => {
  return (
    <div className='homepage'>
      <Container>
        <SearchBar/>
      </Container>
    </div>
  )
}

export default Home