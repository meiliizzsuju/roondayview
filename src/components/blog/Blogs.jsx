import { Container } from '@mui/material';
import { useRef, useState } from 'react';
import NewBlog from '../blogform/NewBlog';
import {blogMockData} from '../../mockdata/mockData';

import './blog.css';
import BlogFeed from './BlogFeed';

export const Blogs = () => {
  const [show, setShow] = useState(false);
  const user = 'user object to be implement' // parsing user object
  const blogData = blogMockData;

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className='blogpage'>
      <Container>
        <div className='blogpage__top'>
          <button type="button" className='btn' onClick={handleClick}>
            {show ? 'Hide' : 'Add New Blog'}
          </button>
          {show ? (
            <NewBlog user={user}/>
          ) : null}
        </div>

        <BlogFeed/>
      </Container>
    </div>
  )
}
