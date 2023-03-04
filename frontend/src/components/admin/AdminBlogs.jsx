import React, { useEffect, useState } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import axios from "axios";

import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const AdminBlogs = () => {
    const [availBlogs, setAvailBlogs] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [open, setOpen] = useState(false);
    const [confirmDel, setConfirmDel] = useState(false);
    const blog_list = availBlogs;
  
    const confirmDelete = () =>{
      axios.delete(`/foodblogs/${selectedBlog._id}`)
      .then(function (response) {
        if(response.status === 200){
          setOpen(false);
          setSelectedBlog(null);
          setConfirmDel(true)
        }
      })
      .catch(function (error) {
        console.log(error)
      });
    }
  
    const removeBlog = () =>{
      setOpen(true);
    }
  
  
    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(()=>{
      axios.get(`/foodblogs`).then((response) => {
        console.log(response)
        setAvailBlogs(response.data);
        setConfirmDel(false)
      });
    },[confirmDel]);

    return (
    <div className='adminblog'>
        <h1>Manage Blogs</h1>
        <div className='adminblog__form'>
            <div className='form-control relative'>
            <label htmlFor="restaurantdetails_tags">Search Blog</label>
            {blog_list && 
                <div className='adminblog__form--blogs'>
                <FormControl fullWidth>
                    <Autocomplete
                    id="bloglist"
                    sx={{ width: 300 }}
                    options={blog_list}
                    getOptionLabel={(option) => option.title}
                    onChange={(event, value) => setSelectedBlog(value)}
                    value={selectedBlog}
                    renderInput={(params) => (
                        <TextField {...params} label="search here" margin="normal" />
                    )}
                    renderOption={(props, option, { inputValue }) => {
                        const matches = match(option.title, inputValue, { insideWords: true });
                        const parts = parse(option.title, matches);
    
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
                {selectedBlog && 
                    <div className='adminblog__form--controls'>
                    <Button variant="outlined" color="error" size="large" startIcon={<DeleteIcon fontSize="inherit"/>}
                        onClick={removeBlog}
                    >
                        Remove blog
                    </Button>
                    </div>
                }
                </div>

            }
            </div>
        </div>
        { open &&
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{`Are you sure, "${selectedBlog.title}" will be removed?`}</DialogTitle>
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
    </div>
    )
}
