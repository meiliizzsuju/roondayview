import React, { useState } from 'react'
import { Box, MenuItem, Select, Tab, Tabs } from '@mui/material'
import { Container } from '@mui/system'

import './staffuser.css';

const inputErrorState = ` error-field`;

const StaffUser = () => {
    const [value, setValue] = useState(0);
    const [additemfields, setAddItemFields] = useState(false); // to check if all the field has been entered
    const [updateitemfields, setUpdateItemFields] = useState(false); // to check if all the field has been entered
    const [restaurantDetailFields, setRestaurantDetailFields] = useState(false); // to check if all the field has been entered
    const [additem_name, setAdditem_name] = useState('');
    const [additem_price, setAdditem_price] = useState('');
    const [additem_desc, setAdditem_desc] = useState('');
    const [additem_ingre, setAdditem_ingre] = useState('');

    const [updateitem_search, setUpdateItem_search] = useState('');
    const [updateitem_price, setUpdateItem_price] = useState('');
    const [updateitem_avail, setUpdateItem_avail] = useState(10);
    const [updateitem_desc, setUpdateItem_desc] = useState('');
    const [updateitem_ingre, setUpdateItem_ingre] = useState('');

    const [restaurantDetail_tags, setRestaurantDetail_tags] = useState('');
    const [restaurantDetail_hours, setRestaurantDetail_hours] = useState('');
    const [restaurantDetail_mesg, setRestaurantDetail_mesg] = useState('');
    const [restaurantDetail_desc, setRestaurantDetail_desc] = useState('');
    const [restaurantDetail_address, setRestaurantDetail_address] = useState('');


    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    const addNewItem = () =>{
        if(additem_name,additem_price,additem_desc,additem_ingre){
            // to be added to BE with staffId
            console.log(additem_name,additem_price,additem_desc,additem_ingre)

            alert('Item has been added');
            setAdditem_name('')
            setAdditem_price('')
            setAdditem_desc('')
            setAdditem_ingre('')
        } else{
            setAddItemFields(true);

            setTimeout(
              () => {
                setAddItemFields(false); // clear after 2 sec
              },
              5000,
            );  
        }
    }

    const UpdateItem = () =>{
        if(updateitem_search,updateitem_price,updateitem_avail,updateitem_desc,updateitem_ingre){
            // to be added to BE with staffId
            console.log(updateitem_search,updateitem_price,updateitem_avail,updateitem_desc,updateitem_ingre)

            alert('Item had been updated');
            setUpdateItem_search('')
            setUpdateItem_price('')
            setUpdateItem_avail(10)
            setUpdateItem_desc('')
            setUpdateItem_ingre('')
        } else{
            setUpdateItemFields(true);

            setTimeout(
              () => {
                setAddItemFields(false); // clear after 2 sec
              },
              5000,
            );  
        }
    }

    const UpdateResDetail = () =>{
        if(restaurantDetail_hours,restaurantDetail_hours.restaurantDetail_mesg,restaurantDetail_desc,restaurantDetail_address){
            // to be added to BE with staffId
            console.log(restaurantDetail_hours,restaurantDetail_hours.restaurantDetail_mesg,restaurantDetail_desc,restaurantDetail_address)

            alert("Restaurant detail has been updated");
            setRestaurantDetail_tags('')
            setRestaurantDetail_hours('')
            setRestaurantDetail_mesg('')
            setRestaurantDetail_desc('')
            setRestaurantDetail_address('')
        } else{
            setRestaurantDetailFields(true);

            setTimeout(
              () => {
                setAddItemFields(false); // clear after 2 sec
              },
              5000,
            );  
        }
    }

    const clearadditemfields = () =>{
        setAdditem_name('')
        setAdditem_price('')
        setAdditem_desc('')
        setAdditem_ingre('')
    }

    const clearUpdateItemFields = () =>{
        setUpdateItem_search('')
        setUpdateItem_price('')
        setUpdateItem_avail(10)
        setUpdateItem_desc('')
        setUpdateItem_ingre('')
    }

    const clearResDetailFields = () =>{
        setRestaurantDetail_tags('')
        setRestaurantDetail_hours('')
        setRestaurantDetail_mesg('')
        setRestaurantDetail_desc('')
        setRestaurantDetail_address('')
    }
    

    return (

    <div className='staffuser'>
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Form navigator" className='staffuser__tabs'>
                        <Tab label="Add New Menu" {...a11yProps(0)} />
                        <Tab label="Update Existing Menu" {...a11yProps(1)} />
                        <Tab label="Restaurant Description" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <div
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-0`}
                aria-labelledby={`simple-tab-0`}
                >
                {value === 0 && (
                    <Box sx={{ p: 3 }}>
                        <div className='staffuser__box'>
                            <div>
                                <h3>Add New Menu</h3>

                                <div className='form-control relative'>
                                    <label htmlFor="additem">Add Menu Item</label>
                                    <input type="text" name="additem" placeholder='Name'
                                        value={additem_name}
                                        onChange={(e)=> setAdditem_name(e.target.value)}
                                        className={(additemfields&&additem_name === '') ? (inputErrorState) : ('')}
                                    />
                                    {(additemfields&&additem_name === '') &&(
                                    <span className='error-message'>Please provide 'name'</span>
                                    )}
                                </div>
                                <div className='form-control relative'>
                                    <label htmlFor="additem">Price</label>
                                    <input type="text" name="additem" placeholder='Input Dollar amount'
                                        value={additem_price}
                                        onChange={(e)=> setAdditem_price(e.target.value)}
                                        className={(additemfields&&additem_price === '') ? (inputErrorState) : ('')}
                                    />
                                    {(additemfields&&additem_price === '') &&(
                                    <span className='error-message'>Please provide 'price'</span>
                                    )}
                                </div>
                                <div className='form-control relative'>
                                    <label htmlFor="additem">Description</label>
                                    <textarea type="text" name="additem" placeholder='Provide description'
                                        value={additem_desc}
                                        onChange={(e)=> setAdditem_desc(e.target.value)}
                                        className={(additemfields&&additem_desc === '') ? (inputErrorState) : ('')}
                                    />
                                    {(additemfields&&additem_desc === '') &&(
                                    <span className='error-message'>Please provide 'description'</span>
                                    )}
                                </div>
                                <div className='form-control relative'>
                                    <label htmlFor="additem">Ingredients</label>
                                    <textarea type="text" name="additem" placeholder='Provide Ingredients'
                                        value={additem_ingre}
                                        onChange={(e)=> setAdditem_ingre(e.target.value)}
                                        className={(additemfields&&additem_ingre === '') ? (inputErrorState) : ('')}
                                    />
                                    {(additemfields&&additem_ingre === '') &&(
                                    <span className='error-message'>Please provide 'ingredients'</span>
                                    )}
                                </div>

                                <div className='staffuser__box--bottom'>
                                <button
                                    type="button"
                                    onClick={clearadditemfields}
                                    className="btn btn-form"
                                >
                                    Discard
                                </button>
                                <button
                                    type="button"
                                    onClick={addNewItem}
                                    className="btn btn-form"
                                >
                                    Post
                                </button>
                                </div>
                            </div>
                        </div>
                    </Box>
                )}
                </div>
                <div
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-1`}
                aria-labelledby={`simple-tab-1`}
                >
                {value === 1 && (
                    <Box sx={{ p: 3 }}>
                        <div className='staffuser__box'>
                            <div>
                                <h3>Update Existing Menu</h3>

                                <div className='form-control relative'>
                                    <input type="text" name="updateitem_search" placeholder='Name'
                                        value={updateitem_search}
                                        onChange={(e)=> setUpdateItem_search(e.target.value)}
                                        className={(updateitemfields&&updateitem_search === '') ? (inputErrorState) : ('')}
                                    />
                                    {(updateitemfields&&additem_name === '') &&(
                                    <span className='error-message'>Please provide 'name'</span>
                                    )}
                                </div>
                                <div className='form-control relative'>
                                    <label htmlFor="additem">Price</label>
                                    <input type="text" name="additem" placeholder='Input Dollar amount'
                                        value={updateitem_price}
                                        onChange={(e)=> setUpdateItem_price(e.target.value)}
                                        className={(updateitemfields&&updateitem_price === '') ? (inputErrorState) : ('')}
                                    />
                                    {(updateitemfields&&updateitem_price === '') &&(
                                    <span className='error-message'>Please provide 'price'</span>
                                    )}
                                </div>
                                <div className='form-control form-control--select relative'>
                                    <label htmlFor="additem">Availability</label>
                                    <Select
                                        labelId="updateitem_avail-label"
                                        id="updateitem_avail"
                                        value={updateitem_avail}
                                        onChange={(e)=> setUpdateItem_avail(e.target.value)}
                                    >
                                    <MenuItem value={10}>Available</MenuItem>
                                    <MenuItem value={20}>Temporarily Unavailable</MenuItem>
                                    <MenuItem value={30}>No Longer Available</MenuItem>
                                    </Select>
                                    {(updateitemfields&&additem_price === '') &&(
                                    <span className='error-message'>Please select</span>
                                    )}
                                </div>
                                <div className='form-control relative'>
                                    <label htmlFor="additem">Description</label>
                                    <textarea type="text" name="additem" placeholder='Provide description'
                                        value={updateitem_desc}
                                        onChange={(e)=> setUpdateItem_desc(e.target.value)}
                                        className={(updateitemfields&&updateitem_desc === '') ? (inputErrorState) : ('')}
                                    />
                                    {(updateitemfields&&updateitem_desc === '') &&(
                                    <span className='error-message'>Please provide 'description'</span>
                                    )}
                                </div>
                                <div className='form-control relative'>
                                    <label htmlFor="additem">Ingredients</label>
                                    <textarea type="text" name="additem" placeholder='Provide Ingredients'
                                        value={updateitem_ingre}
                                        onChange={(e)=> setUpdateItem_ingre(e.target.value)}
                                        className={(updateitemfields&&updateitem_ingre === '') ? (inputErrorState) : ('')}
                                    />
                                    {(updateitemfields&&updateitem_ingre === '') &&(
                                    <span className='error-message'>Please provide 'ingredients'</span>
                                    )}
                                </div>

                                <div className='staffuser__box--bottom'>
                                <button
                                    type="button"
                                    onClick={clearUpdateItemFields}
                                    className="btn btn-form"
                                >
                                    Discard
                                </button>
                                <button
                                    type="button"
                                    onClick={UpdateItem}
                                    className="btn btn-form"
                                >
                                    Post
                                </button>
                                </div>
                            </div>
                        </div>
                    </Box>
                )}
                </div>
                <div
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-2`}
                aria-labelledby={`simple-tab-2`}
                >
                {value === 2 && (
                    <Box sx={{ p: 3 }}>
                        <div className='staffuser__box'>
                            <div>
                                <h3>Restaurant Description</h3>

                                <div className='form-control relative'>
                                    <label htmlFor="restaurantdetails_tags">Restaurant Description</label>
                                    <input type="text" name="restaurantdetails_tags" placeholder='Add tags'
                                        value={restaurantDetail_tags}
                                        onChange={(e)=> setRestaurantDetail_tags(e.target.value)}
                                        className={(restaurantDetailFields&&restaurantDetail_tags === '') ? (inputErrorState) : ('')}
                                    />
                                    {(restaurantDetailFields&&restaurantDetail_tags === '') &&(
                                    <span className='error-message'>Please provide 'tags'</span>
                                    )}
                                </div>

                                <div className='form-control relative'>
                                    <label htmlFor="restaurantdetails_hours">Trading Hours</label>
                                    <input type="text" name="restaurantdetails_hours" placeholder='Input day and time'
                                        value={restaurantDetail_hours}
                                        onChange={(e)=> setRestaurantDetail_hours(e.target.value)}
                                        className={(restaurantDetailFields&&restaurantDetail_hours === '') ? (inputErrorState) : ('')}
                                    />
                                    {(restaurantDetailFields&&restaurantDetail_hours === '') &&(
                                    <span className='error-message'>Please provide 'hours'</span>
                                    )}
                                </div>

                                <div className='form-control relative'>
                                    <label htmlFor="restaurantdetails_mesg">Message</label>
                                    <input type="text" name="restaurantdetails_mesg" placeholder='Add general message'
                                        value={restaurantDetail_mesg}
                                        onChange={(e)=> setRestaurantDetail_mesg(e.target.value)}
                                        className={(restaurantDetailFields&&restaurantDetail_mesg === '') ? (inputErrorState) : ('')}
                                    />
                                    {(restaurantDetailFields&&restaurantDetail_mesg === '') &&(
                                    <span className='error-message'>Please provide 'message'</span>
                                    )}
                                </div>

                                <div className='form-control relative'>
                                    <label htmlFor="restaurantDetail_desc">Description of Restaurant</label>
                                    <textarea type="text" name="restaurantDetail_desc" placeholder='Provide description'
                                        value={restaurantDetail_desc}
                                        onChange={(e)=> setRestaurantDetail_desc(e.target.value)}
                                        className={(restaurantDetailFields&&restaurantDetail_desc === '') ? (inputErrorState) : ('')}
                                    />
                                    {(restaurantDetailFields&&restaurantDetail_desc === '') &&(
                                    <span className='error-message'>Please provide 'message'</span>
                                    )}
                                </div>

                                <div className='form-control relative'>
                                    <label htmlFor="restaurantDetail_address">Address</label>
                                    <textarea type="text" name="restaurantDetail_address" placeholder='Provide address'
                                        value={restaurantDetail_address}
                                        onChange={(e)=> setRestaurantDetail_address(e.target.value)}
                                        className={(restaurantDetailFields&&restaurantDetail_address === '') ? (inputErrorState) : ('')}
                                    />
                                    {(restaurantDetailFields&&restaurantDetail_address === '') &&(
                                    <span className='error-message'>Please provide 'address'</span>
                                    )}
                                </div>


                                <div className='staffuser__box--bottom'>
                                <button
                                    type="button"
                                    onClick={clearResDetailFields}
                                    className="btn btn-form"
                                >
                                    Discard
                                </button>
                                <button
                                    type="button"
                                    onClick={UpdateResDetail}
                                    className="btn btn-form"
                                >
                                    Post
                                </button>
                                </div>
                            </div>
                        </div>
                    </Box>
                )}
                </div>
            </Box>
        </Container>
    </div>
  )
}

export default StaffUser