import React from 'react';
import { Box, Container } from '@mui/system';
import { Outlet } from 'react-router-dom';

import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';


export const Admin = () => {
  const classes = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  
  return (
    <div className='adminuser'>
      <Container>
        <Box sx={{ my: 5 }}>
          <h1>Admin</h1>
          <div className='admin__nav'>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<PersonIcon />}
              href="/admin/users"
              size="large"
              sx={{ mr: 2}}
            >
              Manage User
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<ArticleIcon />}
              href="/admin/blogs"
              size="large"
              sx={{ mr: 2}}
            >
              Manage Blogs
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<EmailIcon />}
              href="/admin/messages"
              size="large"
              sx={{ mr: 2}}
            >
              Messages
            </Button>
          </div>
          <Outlet/>
        </Box>
      </Container>
    </div>
  )
}
