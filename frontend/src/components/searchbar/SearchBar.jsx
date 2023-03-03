import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import axios from "axios";

import './searchbar.css';
import { Autocomplete, FormControl, TextField } from '@mui/material';

const SearchBar = () => {
    const navigate = useNavigate()
    const [ searchItem, setSearchItem ] = useState(null);
    const [ blogs , setBlogs] = useState(null);

    const onSearch = () =>{
        if(searchItem){
            navigate(`/blog/${searchItem._id}`)
        }
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/foodblogs').then((response) => {
          setBlogs(response.data);
        });
    },[])

    return (
    <div className='searchbar'>
        <div className='searchbar__container'>
            {
                blogs &&
                <FormControl fullWidth>
                    <Autocomplete
                    id="bloglist"
                    options={blogs}
                    getOptionLabel={(option) => option.title}
                    onChange={(event, value) => setSearchItem(value)}
                    value={searchItem}
                    onSelect={onSearch}
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
            }
        </div>
    </div>
  )
}

export default SearchBar