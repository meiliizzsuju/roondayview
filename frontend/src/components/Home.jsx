import { Container } from '@mui/material';
import React from 'react';
import BlogFeed from './blog/BlogFeed';
import SearchBar from './searchbar/SearchBar';
import Trends from './trends/Trends';


const Home = () => {
  return (
    <div className='homepage'>
      <Container>
        <SearchBar/>
        <Trends/>
        <BlogFeed key="homefeed"/>
      </Container>
    </div>
  )
}

export default Home