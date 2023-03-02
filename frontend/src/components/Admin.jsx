import React, { useEffect, useState } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import axios from "axios";

import '../components/css/admin.css'
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';


export const Admin = () => {
  const [availUsers, setAvailUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);
  const user_list = availUsers;

  const confirmDelete = () =>{
    axios.delete(`http://localhost:5000/users/${selectedUser._id}`)
    .then(function (response) {
      if(response.status === 200){
        setOpen(false);
        setSelectedUser(null);
        setConfirmDel(true)
      }
    })
    .catch(function (error) {
      console.log(error)
    });
  }

  const removeUser = () =>{
    setOpen(true);
  }


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    axios.get(`http://localhost:5000/users`).then((response) => {
      setAvailUsers(response.data);
      setConfirmDel(false)
    });
  },[confirmDel])
  
  return (
    <div className='adminuser'>
      <Container>
        <Box sx={{ my: 5 }}>
          <h1>Admin Manage User</h1>
          <div className='adminuser__form'>
            <div className='form-control relative'>
              <label htmlFor="restaurantdetails_tags">Search User</label>
              {user_list && 
                <div className='adminuser__form--users'>
                  <FormControl fullWidth>
                    <Autocomplete
                      id="userlist"
                      sx={{ width: 300 }}
                      options={user_list}
                      getOptionLabel={(option) => option.username}
                      onChange={(event, value) => setSelectedUser(value)}
                      value={selectedUser}
                      renderInput={(params) => (
                        <TextField {...params} label="search here" margin="normal" />
                      )}
                      renderOption={(props, option, { inputValue }) => {
                        const matches = match(option.username, inputValue, { insideWords: true });
                        const parts = parse(option.username, matches);
    
                        return (
                          <li {...props}>
                            <div>
                              {parts.map((part, index) => (
                                <span
                                  key={index}
                                  style={{
                                    fontWeight: part.highlight ? 700 : 400,
                                  }}
                                >
                                  {part.text}
                                </span>
                              ))}
                            </div>
                          </li>
                        );
                      }}
                    />
                  </FormControl>
                  {selectedUser && 
                    <div className='adminuser__form--controls'>
                      <Button variant="outlined" color="error" size="large" startIcon={<DeleteIcon fontSize="inherit"/>}
                        onClick={removeUser}
                      >
                        Remove user
                      </Button>
                    </div>
                  }
                </div>

              }
            </div>
          </div>
        </Box>

        { open &&
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{`Are you sure, "${selectedUser.username}" will be removed?`}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                This change can not be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Discard</Button>
              <Button onClick={confirmDelete} variant="outlined" color="error" size="large" startIcon={<DeleteIcon fontSize="inherit"/>}>Confirm</Button>
            </DialogActions>
          </Dialog>
        }
      </Container>
    </div>
  )
}
