import { MenuItem, OutlinedInput, Select } from '@mui/material';
import React, { useState } from 'react';
import {restaurantMockData} from '../../mockdata/mockData.js';

import './newblog.css'

const inputErrorState = ` error-field`;


const NewBlog = ({user}) => {
    const [blogFields, seBlogFields] = useState(false);
    const [b_dishName, setB_dishName] = useState('');
    const [b_price, setB_price] = useState('');
    const [b_restaurants, setB_restaurants] = useState('');
    const [b_desc, setB_desc] = useState('');
    const [b_ingre, setB_ingre] = useState('');

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

    const creatNewBlog = () =>{
        if(b_dishName,b_price,b_restaurants,b_desc,b_desc){
            // to be added to BE with staffId
            console.log(b_dishName,b_price,b_restaurants,b_desc,b_desc)

            alert('New blog has been added');
            setB_dishName('')
            setB_price('')
            setB_restaurants('')
            setB_desc('')
            setB_ingre('')
        } else{
            seBlogFields(true);

            setTimeout(
              () => {
                seBlogFields(false); // clear after 2 sec
              },
              5000,
            );  
        }
    }


    const clearBlogFields = () => {
        setB_dishName('')
        setB_price('')
        setB_restaurants('')
        setB_desc('')
        setB_ingre('')
    }


    return (
        <div className='blogform'>
            <div className='form-control relative'>
                <label htmlFor="restaurantdetails_tags">New Blog</label>
                <input type="text" name="restaurantdetails_tags" placeholder='Add Dish '
                    value={b_dishName}
                    onChange={(e)=> setB_dishName(e.target.value)}
                    className={(blogFields&&b_dishName === '') ? (inputErrorState) : ('')}
                />
                {(blogFields&&b_dishName === '') &&(
                <span className='error-message'>Please provide 'name'</span>
                )}
            </div>

            <div className='form-control relative'>
                <label htmlFor="restaurantdetails_tags">Restaurant</label>
                <Select
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
                    inputProps={{ 'aria-label': 'Without label' }}
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
                {(blogFields&&b_restaurants === '') &&(
                <span className='error-message'>Please provide 'price'</span>
                )}
            </div>

            <div className='form-control relative'>
                <label htmlFor="restaurantdetails_tags">Price</label>
                <input type="text" name="restaurantdetails_tags" placeholder='Input Dollar Amount'
                    value={b_price}
                    onChange={(e)=> setB_price(e.target.value)}
                    className={(blogFields&&b_price === '') ? (inputErrorState) : ('')}
                />
                {(blogFields&&b_price === '') &&(
                <span className='error-message'>Please provide 'price'</span>
                )}
            </div>

            <div className='form-control relative'>
                <label htmlFor="b_desc">Description</label>
                <textarea type="text" name="b_desc" placeholder='Provide description'
                    value={b_desc}
                    onChange={(e)=> setB_desc(e.target.value)}
                    className={(blogFields&&b_desc === '') ? (inputErrorState) : ('')}
                />
                {(blogFields&&b_desc === '') &&(
                <span className='error-message'>Please provide 'message'</span>
                )}
            </div>

            <div className='form-control relative'>
                <label htmlFor="b_ingre">Ingredients</label>
                <textarea type="text" name="b_ingre" placeholder='Provide description'
                    value={b_ingre}
                    onChange={(e)=> setB_ingre(e.target.value)}
                    className={(blogFields&&b_ingre === '') ? (inputErrorState) : ('')}
                />
                {(blogFields&&b_ingre === '') &&(
                <span className='error-message'>Please provide 'Ingredients'</span>
                )}
            </div>

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
        </div>
    )
}

export default NewBlog