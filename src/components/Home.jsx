import { Container } from '@mui/material';
import React from 'react';
import SearchBar from './searchbar/SearchBar';
import Trends from './trends/Trends';


const Home = () => {
  return (
    <div className='homepage'>
      <Container>
        <SearchBar/>
        <Trends/>
      </Container>
    </div>
  )
}

export default Home