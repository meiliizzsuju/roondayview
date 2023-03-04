import { Box, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import {restaurantMockData} from '../../mockdata/mockData.js';

import axios from "axios";

import './newblog.css'


const NewBlog = ({user}) => {
    const [blogFields, setBlogFields] = useState(false);
    const [b_dishName, setB_dishName] = useState('');
    const [b_dishNameValid, setB_dishNameValid] = useState(false);
    const [b_price, setB_price] = useState('');
    const [b_restaurants, setB_restaurants] = useState('');
    const [b_desc, setB_desc] = useState('');
    const [b_descValid, setB_descValid] = useState(false);
    const [b_type, setB_type] = useState('');

    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    const token = localStorage.getItem('auth-token');
    const restaurant_rest = restaurantMockData;

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setB_restaurants(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
    };

    const titleValidate = (val) =>{
        setB_dishName(val)
        if(b_dishName.length >= 8){
            setB_dishNameValid(true)
        }else{
            setB_dishNameValid(false)
        }
    }

    const descValidate = (val) =>{
        setB_desc(val)
        if(b_desc.length >= 10){
            setB_descValid(true)
        }else{
            setB_descValid(false)
        }
    }

    const creatNewBlog = () => {
        setBlogFields(true);
        if(b_dishNameValid && b_descValid){
            // POST
            axios.post( 
                '/foodblogs',
                {
                    title: b_dishName,
                    description: b_desc,
                    restaurant: b_restaurants[0],
                    price: b_price,
                    cuisine: b_type
                },
                {headers: { Authorization: `Bearer ${token}` }}
                ).then(function (response){
                    if(response.status === 200){
                        alert('New blog has been added');
                        setB_dishName('')
                        setB_price('')
                        setB_restaurants('')
                        setB_desc('')
                        setB_type('')

                        setBlogFields(false);
                    }
                }).catch(function (error){
                    switch (error.response.status) {
                        case 400:
                            alert(error.response.data['data'])
                            break;
                        case 401:
                            alert(error.response.data['data'])
                            break;
                        default:
                            break;
                    }
                });

        } else{
            console.log("fill the form");
        }
    }

    const clearBlogFields = () => {
        setB_dishName('')
        setB_price('')
        setB_restaurants('')
        setB_desc('')
        setB_type('')
    }


    return (
        <div className='blogform'>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                    <TextField required
                        id="b_dishName"
                        type="text" name="restaurantdetails_tags" label='Add Dish'
                        value={b_dishName}
                        onFocus={onFocus} onBlur={onBlur}
                        onChange={(e)=> titleValidate(e.target.value)}
                        error={(blogFields===true&&b_dishName === '') || (focused===true&&b_dishName.length < 8)}
                        helperText="Minimum 8 characters"
                    />
                </FormControl>

                <FormControl fullWidth>
                    <Select
                        required
                        name="restaurantdetails_tags"
                        displayEmpty
                        value={b_restaurants}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                            return <em>Select restaurant from the list</em>;
                            }

                            return selected.join(', ');
                        }}
                        inputprops={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem disabled value="">
                        <em>Select restaurant from the list</em>
                    </MenuItem>
                    {restaurant_rest.map((item) => (
                        <MenuItem
                            key={item.id}
                            value={item.name}
                        >
                        {item.name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel htmlFor="amount">Amount</InputLabel>
                    <OutlinedInput required
                        id="b_price"
                        type="number" name="b_price" label='Amount'
                        inputprops={{
                            inputProps: { 
                                max: 100000, min: 0 
                            }
                        }}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        value={b_price}
                        onChange={(e)=> setB_price(e.target.value)}
                        error={(blogFields===true&&b_price === '')}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <TextField required
                        id="b_desc"
                        type="text" name="b_desc" label='Description'
                        multiline rows={4}
                        value={b_desc}
                        onChange={(e)=> descValidate(e.target.value)}
                        error={(blogFields===true&&b_desc === '') || (focused===true&&b_desc.length < 10)}
                        helperText="Minimum 10 characters"
                    />
                </FormControl>
                
                <FormControl fullWidth>
                    <TextField required
                        type="text" name="b_type" label='Provide Cousine type eg. Japanese Thai'
                        value={b_type}
                        onChange={(e)=> setB_type(e.target.value)}
                        error={(blogFields===true&&b_type === '')}
                    />
                </FormControl>

                <div className='staffuser__box--bottom'>
                    <button
                        type="button"
                        onClick={clearBlogFields}
                        className="btn btn-form"
                    >
                        Discard
                    </button>
                    <button
                        type="button"
                        onClick={creatNewBlog}
                        className="btn btn-form"
                    >
                        Post
                    </button>
                </div>
            </Box>

        </div>
    )
}

export default NewBlog