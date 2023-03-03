import React from 'react';
import { Box, Container } from '@mui/system';
import { Outlet } from 'react-router-dom';

import '../../components/css/admin.css'


export const Admin = () => {
  
  return (
    <div className='adminuser'>
      <Container>
        <Box sx={{ my: 5 }}>
          <h1>Admin</h1>
          <div className='admin__nav'>
            <a href="/admin/users" className='btn'>
              Manage Users
            </a>
            <a href="/admin/blogs" className='btn'>
              Manage Blogs
            </a>
            <a href="/admin/blogs" className='btn'>
              Messages
            </a>
          </div>
          <Outlet/>
        </Box>
      </Container>
    </div>
  )
}
