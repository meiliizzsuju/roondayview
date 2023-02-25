import React, { useState } from 'react'
import { Box, MenuItem, Select, Tab, Tabs } from '@mui/material'
import { Container } from '@mui/system'

import './staffuser.css';

const inputErrorState = ` error-field`;

const StaffUser = () => {
    const [value, setValue] = useState(0);
    const [additemfields, setAddItemFields] = useState(false); // to check if all the field has been entered
    const [updateitemfields, setUpdateItemFields] = useState(false); // to check if all the field has been entered
    const [additem_name, setAdditem_name] = useState('');
    const [additem_price, setAdditem_price] = useState('');
    const [additem_desc, setAdditem_desc] = useState('');
    const [additem_ingre, setAdditem_ingre] = useState('');

    const [updateitem__search, setUpdateItem_search] = useState('');
    const [updateitem__price, setUpdateItem_price] = useState('');
    const [updateitem__avail, setUpdateItem_avail] = useState(10);
    const [updateitem__desc, setUpdateItem_desc] = useState('');
    const [updateitem__ingre, setUpdateItem_ingre] = useState('');




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

            alert('Item is added');
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
        if(updateitem__search,updateitem__price,updateitem__avail,updateitem__desc,updateitem__ingre){
            // to be added to BE with staffId
            console.log(updateitem__search,updateitem__price,updateitem__avail,updateitem__desc,updateitem__ingre)

            alert('Item is updated');
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
    

    return (

    <div className='staffuser'>
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Form navigator" className='staffuser__tabs'>
                        <Tab label="Add New Menu" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
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
                        Item 2
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
                        Item 3
                    </Box>
                )}
                </div>
            </Box>
        </Container>
    </div>
  )
}

export default StaffUser